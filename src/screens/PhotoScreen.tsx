import React, { useState } from 'react'
import { Button, Image, Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Toast from 'react-native-toast-message'
import { uploadImage } from '../utils/uploadImage'
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'
import DocumentPicker from 'react-native-document-picker'

const PhotoScreen = () => {
  const [image, setImage] = useState<string | null>(null)
  const [file, setFile] = useState<any>(null)
  const [uploading, setUploading] = useState(false)
  const [transferred, setTransferred] = useState(0)
  const [url, setUrl] = useState('')

  const requestCameraPermission = async () => {
    try {
      const granted = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA
      )
      return granted === RESULTS.GRANTED
    } catch (err) {
      console.warn(err)
      return false
    }
  }

  const takePhotoFromCamera = async () => {
    const hasPermission = await requestCameraPermission()
    if (!hasPermission) {
      Toast.show({
        type: 'error',
        text1: 'Permission Denied',
        text2: 'Camera permission is required to take photos.'
      })
      return
    }

    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log("IMAGE FROM CAMERA", image)
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path
      if (!imageUri) return console.error('Image not found')
      setImage(imageUri)
    }).catch((error) => { console.log(error) })
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log("IMAGE FROM LIBRARY", image)
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path
      if (!imageUri) return console.error('Image not found')
      setImage(imageUri)
    }).catch((error) => {

      console.log(error)
    })
  }

  const chooseFileFromLibrary = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        allowMultiSelection: false,
      });
      setFile(res);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // User cancelled the picker
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'User cancelled',
        });
      } else {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Error while picking file',
        });
      }
    }
  };




  const onUpload = async () => {
    if (!image) return console.error('Image not found')
    try {
      const uploadedUrl = await uploadImage(image, setUploading, setTransferred)
      setUrl(uploadedUrl!)
      Toast.show({
        type: 'success',
        text1: 'Upload Berhasil',
        text2: 'Foto Anda telah berhasil diupload'
      })
    } catch (err) {
      console.log(err)
      Toast.show({
        type: 'error',
        text1: 'Upload Gagal',
        text2: 'Foto Anda gagal diupload'
      })
    }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>PhotoScreen</Text>
      <Button
        title="Take a photo"
        onPress={takePhotoFromCamera}
      />
      <Button
        title="Choose a photo from library"
        onPress={choosePhotoFromLibrary}
      />
      <Button
        title="Choose a file from library"
        onPress={chooseFileFromLibrary}
      />
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}
      {image && (
        <Button
          title="Upload"
          onPress={onUpload}
          disabled={uploading}
        />
      )}
      {uploading && (
        <View style={styles.uploadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.uploadingText}>{`${transferred}% Uploaded`}</Text>
        </View>
      )}
    </View>
  )
}

export default PhotoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  uploadingContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  uploadingText: {
    fontSize: 16,
    marginTop: 10,
  },
  urlText: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
})
