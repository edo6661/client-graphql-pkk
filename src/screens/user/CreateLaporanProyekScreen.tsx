import { ActivityIndicator, Button, Image, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { CreateLaporanProyekScreenProps, LaporanProyekScreenProps } from '../../types/navigator.type'
import { Laporan, MutationCreateLaporanArgs, RoleMahasiswa } from '../../__generated__/graphql'
import { gql, useMutation } from '@apollo/client'
import { createLaporan } from '../../api/mutation/laporan.mutation'
import { useAuthContext } from '../../contexts/AuthContext'
import Toast from 'react-native-toast-message'
import { uploadImage } from '../../utils/uploadImage'
import ImageCropPicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker'
import { uploadPdf } from '../../utils/uploadPdf'
const CreateLaporanProyekScreen = (
  { navigation }: CreateLaporanProyekScreenProps
) => {
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [file, setFile] = useState<DocumentPickerResponse | null>(null);
  const [url, setUrl] = useState<string | null>(null);



  const { user } = useAuthContext()
  const [image, setImage] = useState<string | null>(null);
  const proyekId = user?.mahasiswa?.proyekId ?? user?.mahasiswa?.kelompok?.proyekId
  const [form, setForm] = useState<Partial<Laporan>>({
    photo: '',
    file: '',
    proyekId: proyekId!,
    mahasiswaId: user?.mahasiswa?.id!,
  })



  const [create, {
    error
  }] = useMutation<{
    createLaporan: Partial<Laporan>
  }, MutationCreateLaporanArgs>(createLaporan, {
    update(cache, { data }) {
      if (!data || !data.createLaporan) return console.error('Data createLaporan not found')
      cache.modify({
        fields: {
          getLaporanByProyekId(existingLaporans = []) {
            console.log("existingLaporans", existingLaporans)
            const newLaporan = cache.writeFragment({
              data: data.createLaporan,
              fragment: gql`
                fragment NewLaporan on Laporan {
                  ...LaporanFields
                }
              `
            })
            if (!newLaporan) return console.error('New Laporan not found')
            return [...existingLaporans, newLaporan]
          }
        }
      })
    }
  })

  if (error) {
    console.error(error)
  }

  const onSubmit = async () => {
    try {
      await create({
        variables: {
          mahasiswaId: form.mahasiswaId!,
          proyekId: form.proyekId!,
          ...form,
        },

      })
      setForm({})
      Toast.show({
        type: 'success',
        text1: 'Laporan berhasil dibuat',
      })

      navigation.navigate('LaporanProyek')
    } catch (err) {
      console.error(err)
    }
  }

  const onUploadPhoto = async () => {
    try {
      const uploadedUrl = await uploadImage(image!);
      setForm(prev => (
        {
          ...prev,
          photo: uploadedUrl!
        }
      ))
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Foto berhasil diupload'
      });
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Terjadi kesalahan saat mengupload foto'
      });
    }
  };


  const choosePhotoFromLibrary = () => {
    ImageCropPicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri!);
    }).catch((error) => {
      console.error(error);
    });
  };
  const selectPdf = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log('Selected file:', res[0]);
      setFile(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.log('Unknown error: ', err);
        throw err;
      }
    }
  };

  const onUpload = async () => {
    if (!file) return console.error('File not selected');
    try {
      const uploadedUrl = await uploadPdf(file, setUploading, setTransferred);
      if (!uploadedUrl) {
        console.error('Uploaded URL not found');
      } else {
        console.log('Uploaded URL: ', uploadedUrl);
        setForm(prev => ({
          ...prev,
          file: uploadedUrl
        }))
        Toast.show({
          type: 'success',
          text1: 'Upload Berhasil',
          text2: 'File Anda telah berhasil diupload',
        });
        console.log(form)
      }
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Upload Gagal',
        text2: 'File Anda gagal diupload',
      });
    }
  };

  useEffect(() => {
    if (image) {
      onUploadPhoto();
      console.log(form)
    }
  }, [image]);

  return (
    <View>
      {Object.keys(form).filter(field =>
        !field.includes('Id')
      ).map((key) => (
        <Fragment key={key}>

          {key === 'file' && (
            <Fragment>
              <Button title="Select PDF" onPress={selectPdf} />
              {file && <Text>{file.name}</Text>}
              {file && (
                <Button title="Upload" onPress={onUpload} disabled={uploading} />
              )}
              {uploading && (
                <View style={styles.uploadingContainer}>
                  <ActivityIndicator size="large" color="#0000ff" />
                  <Text style={styles.uploadingText}>{`${transferred}% Uploaded`}</Text>
                </View>
              )}

            </Fragment>
          )}
          {key === 'photo' && (
            <>
              {!form[key] && (
                <Button
                  title="Pilih Foto"
                  onPress={choosePhotoFromLibrary}
                />
              )}
              {form[key] && image && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: form[key] }}
                    style={styles.image}
                  />
                  <Icon
                    name="close"
                    onPress={() => setForm(prev => ({ ...prev, photo: '' }))}
                  />
                </View>
              )}


            </>
          )}
        </Fragment>
      ))}
      <Button
        title='Create Laporan'
        onPress={onSubmit}
      />

    </View>
  )
}

export default CreateLaporanProyekScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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