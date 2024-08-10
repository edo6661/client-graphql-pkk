import { Button, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { AdminNavigatorScreenProps, MahasiswaNavigatorScreenProps } from '../../types/adminNavigator.type'
import { adminItemFields } from '../../types/admin.type'
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client'
import { Admin, Angkatan, Dosen, Kelas, Kelompok, Konsentrasi, Mahasiswa, MutationUpdateAdminArgs, MutationUpdateDosenArgs, MutationUpdateMahasiswaArgs, MutationUpdateUserArgs, ProgramStudi, Proyek, Role, RoleMahasiswa, User } from '../../__generated__/graphql'
import { updateUser } from '../../api/mutation/user.mutation'
import Toast from 'react-native-toast-message'
import { updateMahasiswa } from '../../api/mutation/mahasiswa.mutation'
import { Picker } from '@react-native-picker/picker'
import { getProgramStudis } from '../../api/query/programStudi.query'
import { getProyeks } from '../../api/query/proyek.query'
import { getKonsentrasis } from '../../api/query/konsentrasi.query'
import { getKelass } from '../../api/query/kelas.query'
import { getAngkatans } from '../../api/query/angkatan.query'
import { getKelompoks } from '../../api/query/kelompok.query'
import { ProfileScreenProps } from '../../types/navigator.type'
import { useAuthContext } from '../../contexts/AuthContext'
import { updateDosen } from '../../api/mutation/dosen.mutation'
import { uploadImage } from '../../utils/uploadImage'
import ImageCropPicker from 'react-native-image-crop-picker'
import { baseStyles } from '../../styles'
import LoadingIndicator from '../../components/LoadingIndicator'
import { COLORS } from '../../constants/colors'
import { updateAdmin } from '../../api/mutation/admin.mutation'


const ProfileScreen = (
  { navigation }: ProfileScreenProps
) => {
  const { user, storeUser } = useAuthContext()
  const mahasiswa = user?.mahasiswa
  const dosen = user?.dosen


  const { data: fakultas } = useQuery<{
    programStudis: Array<ProgramStudi>
  }>(getProgramStudis)
  const { data: konsentrasi } = useQuery<{
    konsentrasis: Array<Konsentrasi>
  }>(getKonsentrasis)
  const { data: kelas } = useQuery<{
    kelass: Array<Kelas>
  }>(getKelass);
  const { data: angkatan } = useQuery<{
    angkatans: Array<Angkatan>
  }>(getAngkatans)


  const [updateUserMahasiswa, {
    loading: loadingUpdateMahasiswa
  }] = useMutation<{
    updateUser: Partial<User>
  }, MutationUpdateUserArgs>(updateUser)

  const [update] = useMutation<
    {
      updateMahasiswa: Partial<Mahasiswa> & {

      }
    },
    MutationUpdateMahasiswaArgs
  >(updateMahasiswa, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found')
      if (!data.updateMahasiswa) return console.error('Data updateMahasiswa not found')
      cache.modify({
        fields: {
          mahasiswas(existingMahasiswas = [], { readField }) {
            return existingMahasiswas.map((mahasiswaExist:
              Mahasiswa
            ) => {
              if (mahasiswa?.id === undefined) return <Text>Id not found</Text>

              if (readField('id', mahasiswaExist) === mahasiswa.id) {
                return {
                  ...mahasiswaExist,
                  ...data.updateMahasiswa,

                }
              } else {
                return mahasiswaExist
              }
            })
          }
        }
      })
    }
  })

  const [updateUserDosen, {
    loading: loadingUpdateDosen
  }] = useMutation<any, MutationUpdateUserArgs>(updateUser)

  const [updateDosenMutation] = useMutation<
    { updateDosen: Partial<Dosen> },
    MutationUpdateDosenArgs
  >(updateDosen, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found')
      if (!data.updateDosen) return console.error('Data updateDosen not found')
      cache.modify({
        fields: {
          dosens(existingDosens = [], { readField }) {
            return existingDosens.map((dosenExist: Dosen) => {
              if (dosen?.id === undefined) return console.error('Id not found')

              if (readField('id', dosenExist) === dosen.id) {
                return {
                  ...dosenExist,
                  ...data.updateDosen
                }
              } else {
                return dosenExist
              }
            })
          }
        }
      })
    }
  })

  const [updateAdminMutation, {
    loading: loadingUpdateAdmin
  }] = useMutation(updateAdmin, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found')
      if (!data.updateAdmin) return console.error('Data updateAdmin not found')
      cache.modify({
        fields: {
          admins(existingAdmins = [], { readField }) {
            return existingAdmins.map((adminExist: Admin) => {
              if (user?.admin?.id === undefined) return console.error('Id not found')

              if (readField('id', adminExist) === user?.admin.id) {
                return {
                  ...adminExist,
                  ...data.updateAdmin
                }
              } else {
                return adminExist
              }
            })
          }
        }
      })
    }
  })

  const [formAdmin, setFormAdmin] = useState<Partial<Admin> & {
    password: string,
    profilePhoto: string
  }>({
    id: user?.admin?.id || "",
    fullname: user?.admin?.fullname || "",
    password: "",
    profilePhoto: user?.profilePhoto || ""
  })

  const [form, setForm] = useState<Partial<
    Mahasiswa> & {
      password: string,
      profilePhoto: string
    }>({
      fullname: mahasiswa?.fullname || "",
      id: mahasiswa?.id || "",
      userId: mahasiswa?.userId || "",
      prodiId: mahasiswa?.prodiId || "",
      konsentrasiId: mahasiswa?.konsentrasiId || "",
      proyekId: mahasiswa?.proyekId || "",
      nim: mahasiswa?.nim || "",
      semester: +mahasiswa?.semester! || 0,
      kelompokId: mahasiswa?.kelompokId || "",
      angkatanId: mahasiswa?.angkatanId || "",
      role: mahasiswa?.role!,
      kelasId: mahasiswa?.kelasId || "",
      password: "",
      profilePhoto: user?.profilePhoto || ""

    })

  const [formDosen, setFormDosen] = useState<Partial<Dosen & {
    userId: string;
    password: string;

  }>>({
    fullname: dosen?.fullname,
    nidn: dosen?.nidn,
    userId: dosen?.userId,
    id: dosen?.id,
    password: "",
    proyekId: dosen?.proyekId || null

  })


  const [selectedKonsentrasi, setSelectedKonsentrasi] = useState<string>(
    mahasiswa?.konsentrasi?.id || ""
  );
  const [selectedProdi, setSelectedProdi] = useState<string>(
    mahasiswa?.prodi?.id || ""
  );
  const [selectedProyek, setSelectedProyek] = useState<string>(
    mahasiswa?.proyek?.id || ""
  );

  const [image, setImage] = useState<string | null>(null);
  const onUploadPhoto = async () => {
    try {
      const uploadedUrl = await uploadImage(
        image!,
      );
      setForm(prev => (
        {
          ...prev,
          profilePhoto: uploadedUrl!
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




  const onChange = (field: string, value: string) => {
    if (dosen) {
      setFormDosen(prevState => ({
        ...prevState,
        [field]: value
      }))
    } else if (user?.admin) {
      setFormAdmin(prevState => ({
        ...prevState,
        [field]: value
      }))
    } else {
      setForm(prevState => ({
        ...prevState,
        [field]: value
      }))
    }

  }


  const onUpdate = async () => {
    try {
      const sendedData = {
        ...form,
        semester: +form.semester!,
        userId: form.userId!,
        ...(form.proyekId ? { proyekId: form.proyekId } : {
          proyekId: null
        }),
        ...(form.kelompokId ? { kelompokId: form.kelompokId } : {
          kelompokId: null
        }),
        ...(form.kelasId ? { kelasId: form.kelasId } : {
          kelasId: null
        }),
        ...(form.konsentrasiId ? { konsentrasiId: form.konsentrasiId } : {
          konsentrasiId: null
        }),
        ...(form.angkatanId ? { angkatanId: form.angkatanId } : {
          angkatanId: null
        }),
        ...(form.prodiId ? { prodiId: form.prodiId } : {
          prodiId: null
        }),
        ...(form.role ? { role: form.role } : { role: RoleMahasiswa.Anggota }),
      }
      await update({
        variables: {
          id: mahasiswa?.id!,
          ...sendedData!,
        },
        optimisticResponse: {
          updateMahasiswa: {
            ...mahasiswa,
            ...sendedData,
            __typename: "Mahasiswa"
          }
        }
      })
      updateUserMahasiswa({
        variables: {
          id: mahasiswa?.userId!,
          data: {
            ...form.password && { password: form.password },
            username: form.fullname,
            profilePhoto: form.profilePhoto
          },

        },
        optimisticResponse: {
          updateUser: {
            id: mahasiswa?.userId!,
            ...form.password && { password: form.password },
            username: form.fullname,
            profilePhoto: form.profilePhoto
          }
        }
      })
      storeUser({
        ...user!,
        username: form.fullname!,
        profilePhoto: form.profilePhoto!,

        mahasiswa: {
          ...user?.mahasiswa!,
          ...sendedData
        }

      })
      Toast.show({
        swipeable: true,
        type: 'success',
        text1: `Sukses Update Mahasiswa ${form.fullname}`,
      })

      navigation.navigate('Home')

    } catch (err) {
      console.error(err)
    }
  }
  const onUpdateDosen = () => {
    updateDosenMutation({
      variables: {
        id: dosen?.id!,
        fullname: formDosen?.fullname!,
        nidn: formDosen?.nidn!,
        userId: dosen?.userId!,
        proyekId: selectedProyek || null,
      },
      optimisticResponse: {
        updateDosen: {
          ...dosen,
          fullname: formDosen.fullname
        }
      }
    })
    updateUserDosen({
      variables: {
        id: dosen?.userId!,
        data: {
          ...form.password && { password: form.password },
          username: formDosen.fullname,
          profilePhoto: form.profilePhoto

        },

      },
      optimisticResponse: {
        updateUser: {
          id: dosen?.userId!,
          ...form.password && { password: form.password },
          username: formDosen.fullname,
          profilePhoto: form.profilePhoto

        }
      }
    })
    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Dosen ${form.fullname}`,
    })
    storeUser({
      ...user!,
      username: formDosen.fullname!,
      profilePhoto: form.profilePhoto!,

      dosen: {
        ...user?.dosen!,
        fullname: formDosen.fullname!
      }
    })
    navigation.navigate('Home')
  }


  const onUpdateAdmin = () => {
    updateAdminMutation({
      variables: {
        id: user?.admin?.id!,
        fullname: formAdmin.fullname!,
      },
      optimisticResponse: {
        updateAdmin: {
          ...user?.admin,
          fullname: formAdmin.fullname
        }
      }
    })
    updateUserDosen({
      variables: {
        id: user?.id!,
        data: {
          ...formAdmin.password && { password: formAdmin.password },
          username: formAdmin.fullname,
          profilePhoto: formAdmin.profilePhoto

        },

      },
      optimisticResponse: {
        updateUser: {
          ...user,
          id: user?.id,
          ...formAdmin.password && { password: formAdmin.password },
          username: formAdmin.fullname,
          profilePhoto: formAdmin.profilePhoto

        }
      }
    })
    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Admin ${formAdmin.fullname}`,
    })
    storeUser({
      ...user!,
      username: formAdmin.fullname!,
      profilePhoto: formAdmin.profilePhoto!,

      admin: {
        ...user?.admin!,
        fullname: formAdmin.fullname!
      }
    })
    if (user?.admin) {
      navigation.navigate('Dashboard')
    } else {
      navigation.navigate('Home')
    }
  }

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      ...(selectedKonsentrasi && { konsentrasiId: selectedKonsentrasi }),
      ...(selectedProdi && { prodiId: selectedProdi }),
      ...(selectedProyek && { proyekId: selectedProyek })
    }))
  }, [selectedKonsentrasi, selectedProdi, selectedProyek])
  const mahasiswaHaveProyek = mahasiswa?.proyekId || mahasiswa?.kelompok?.proyekId

  useEffect(() => {
    if (image) {
      onUploadPhoto()
    }
  }, [image])




  return (
    <View
      style={baseStyles.centerContainer}
    >
      <View
        style={[
          baseStyles.innerCenterContainer,
          {
            padding: 10,
            gap: 12,
            flex: 1,
          }
        ]}
      >
        <LoadingIndicator
          loading={
            loadingUpdateMahasiswa || loadingUpdateDosen
          }
        />
        {form.profilePhoto ? (
          <TouchableOpacity
            onPress={choosePhotoFromLibrary}
            style={{
              alignItems: 'center'
            }}
          >
            <Image
              source={{ uri: image || form.profilePhoto }}
              style={baseStyles.profileImage}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={choosePhotoFromLibrary}
            style={{
              alignItems: 'center'
            }}

          >
            <Text>Upload Foto</Text>
          </TouchableOpacity>
        )}
        <View
          style={{
            gap: 12
          }}
        >
          {mahasiswa && adminItemFields["Mahasiswa"].map((field) => (
            <Fragment key={field}>

              {field.includes("id") || field.includes("Id") || field === 'role' ? null : (
                <TextInput
                  key={field}
                  placeholder={field}
                  value={form[field]?.toString()}
                  onChangeText={(value) => onChange(field, value)}
                  style={
                    baseStyles.primaryInput
                  }
                />
              )}
              {field === 'prodiId' && (
                <View style={
                  [
                    baseStyles.primaryInput,
                    {
                      paddingLeft: 0,
                    }
                  ]

                }
                >
                  <Picker
                    selectedValue={selectedProdi}
                    onValueChange={(itemValue) => setSelectedProdi(itemValue)}
                  >
                    <Picker.Item label="Pilih Prodi" value="" />
                    {fakultas?.programStudis.map((prodi) => (
                      <Picker.Item key={prodi.id} label={prodi.name} value={prodi.id} />
                    ))}
                  </Picker>
                </View>
              )}


              {field === 'konsentrasiId' && (
                <View style={
                  [
                    baseStyles.primaryInput,
                    {
                      paddingLeft: 0,
                    }
                  ]

                }
                >
                  <Picker
                    selectedValue={selectedKonsentrasi}
                    onValueChange={(itemValue) => setSelectedKonsentrasi(itemValue)}
                  >
                    <Picker.Item label="Pilih Konsentrasi" value="" />
                    {konsentrasi?.konsentrasis.map((konsentrasi) => (
                      <Picker.Item key={konsentrasi.id} label={konsentrasi.name} value={konsentrasi.id} />
                    ))}
                  </Picker>
                </View>
              )}
              {(!user?.mahasiswa?.kelompokId && !mahasiswaHaveProyek) && field === 'role' && (
                <View style={
                  [
                    baseStyles.primaryInput,
                    {
                      paddingLeft: 0,
                    }
                  ]

                }
                >
                  <Picker selectedValue={form.role} onValueChange={(itemValue) => onChange(field, itemValue as string)}>
                    <Picker.Item label="Pilih Role di kelompok" value="" />
                    <Picker.Item label={RoleMahasiswa.Anggota} value={RoleMahasiswa.Anggota} />
                    <Picker.Item label={RoleMahasiswa.Ketua} value={RoleMahasiswa.Ketua} />
                  </Picker>
                </View>
              )}

              {(field === 'angkatanId' || field === 'kelasId') && (
                <View style={
                  [
                    baseStyles.primaryInput,
                    {
                      paddingLeft: 0,
                    }
                  ]

                }
                >
                  <Picker
                    selectedValue={form[field]}
                    onValueChange={(itemValue) =>
                      onChange(field, itemValue!)
                    }
                  >
                    {form[field] === null && (
                      <Picker.Item label={`Pilih ${field}`} value={null} />
                    )}
                    {field === 'angkatanId' && angkatan?.angkatans.map((angkatan) => (
                      <Picker.Item key={angkatan.id} label={angkatan.tahun.toString()} value={angkatan.id} />
                    ))}
                    {field === 'kelasId' && kelas?.kelass.map((kelas) => (
                      <Picker.Item key={kelas.id} label={kelas.name} value={kelas.id} />
                    ))}
                  </Picker>
                </View>
              )}
            </Fragment>
          ))}
        </View>
        {dosen && adminItemFields["Dosen"].map((field) => (
          <Fragment key={field}>
            {field.includes("userId") || field.includes("proyekId") ? null : (
              <TextInput
                key={field}
                placeholder={field}
                value={formDosen[field]!}
                onChangeText={(value) => onChange(field, value)}
                style={
                  baseStyles.primaryInput
                }
              />
            )}

          </Fragment>
        ))}
        {user?.admin && adminItemFields["Admin"].filter((field) => field !== 'userId').map((field) => (
          <Fragment key={field}>
            <TextInput
              key={field}
              placeholder={field}
              value={formAdmin[field]!}
              onChangeText={(value) => onChange(field, value)}
              style={
                baseStyles.primaryInput
              }
            />
          </Fragment>
        ))}
        <TextInput
          placeholder='Password'
          onChangeText={(e) => {
            onChange('password', e)
          }}
          secureTextEntry={true}
          style={baseStyles.primaryInput}
        />

        {/* <Button
          title="Update"
          onPress={() => mahasiswa ? onUpdate() : onUpdateDosen()}
        /> */}
        <TouchableOpacity style={[
          baseStyles.primaryButton,
          loadingUpdateMahasiswa || loadingUpdateDosen ? {
            backgroundColor: 'grey'
          } : {
            backgroundColor: COLORS.primaryBlue
          }
        ]}
          onPress={() => mahasiswa ? onUpdate() : dosen ? onUpdateDosen() : onUpdateAdmin()}
          disabled={loadingUpdateMahasiswa || loadingUpdateDosen || loadingUpdateAdmin}
        >
          <Text
            style={baseStyles.textButton}
          >Update</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
