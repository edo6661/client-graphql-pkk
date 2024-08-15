import { ActivityIndicator, Button, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
import { baseStyles } from '../../styles'
import { COLORS } from '../../constants/colors'
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
    error,
    loading: loadingCreate
  }] = useMutation<{
    createLaporan: Partial<Laporan>
  }, MutationCreateLaporanArgs>(createLaporan, {
    update(cache, { data }) {
      if (!data || !data.createLaporan) return console.error('Data createLaporan not found')
      cache.modify({
        fields: {
          getLaporanByProyekId(existingLaporans = []) {
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
        setForm(prev => ({
          ...prev,
          file: uploadedUrl
        }))
        Toast.show({
          type: 'success',
          text1: 'Upload Berhasil',
          text2: 'File Anda telah berhasil diupload',
        });
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
    }
  }, [image]);

  const allLoading = loadingCreate || uploading

  return (
    <View
      style={
        baseStyles.centerContainer
      }
    >
      <View style={[
        baseStyles.innerCenterContainer, {
          paddingVertical: 20,
          gap: 12,
        }
      ]}>


        {Object.keys(form).filter(field =>
          !field.includes('Id')
        ).map((key) => (
          <Fragment key={key}>

            {key === 'file' && (
              <Fragment>
                {/* <Button
                  title="Select PDF" onPress={selectPdf} /> */}
                <TouchableOpacity
                  onPress={selectPdf}
                  style={baseStyles.primaryButton}>
                  <Text style={baseStyles.textButton}>
                    Pilih PDF
                  </Text>
                </TouchableOpacity>
                {file && <Text>{file.name}</Text>}
                {file && (
                  // <Button
                  //   title="Upload" onPress={onUpload} disabled={uploading} />
                  <TouchableOpacity
                    onPress={onUpload}
                    style={[
                      baseStyles.primaryButton,
                      {
                        backgroundColor: uploading ? COLORS.grey : COLORS.primaryBlue
                      }
                    ]}
                    disabled={uploading}
                  >
                    <Text style={baseStyles.textButton}>
                      Upload
                    </Text>
                  </TouchableOpacity>
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
                  // <Button

                  //   title="Pilih Foto"
                  //   onPress={choosePhotoFromLibrary}
                  // />
                  <TouchableOpacity
                    onPress={choosePhotoFromLibrary}
                    style={baseStyles.primaryButton}>
                    <Text style={baseStyles.textButton}>
                      Pilih Foto
                    </Text>
                  </TouchableOpacity>
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
        {/* <Button

          title='Create Laporan'
          onPress={onSubmit}
        /> */}
        <TouchableOpacity
          onPress={onSubmit}
          style={baseStyles.primaryButton}>
          <Text style={baseStyles.textButton}>
            Buat Laporan
          </Text>
        </TouchableOpacity>
      </View>

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