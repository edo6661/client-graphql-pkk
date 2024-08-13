import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { AdminNavigatorScreenProps, MahasiswaNavigatorScreenProps } from '../../types/adminNavigator.type'
import { adminItemFields } from '../../types/admin.type'
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client'
import { Admin, Angkatan, Kelas, Kelompok, Konsentrasi, Mahasiswa, MutationUpdateAdminArgs, MutationUpdateMahasiswaArgs, MutationUpdateUserArgs, ProgramStudi, Proyek, Role, RoleMahasiswa, User } from '../../__generated__/graphql'
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
import { baseStyles } from '../../styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const DetailsMahasiswaScreen = (
  { navigation, route }: MahasiswaNavigatorScreenProps<"DetailsMahasiswas">
) => {


  const { data: fakultas } = useQuery<{
    programStudis: Array<ProgramStudi>
  }>(getProgramStudis)
  const { data: proyeks } = useQuery<{
    proyeks: Array<Proyek>
  }>(getProyeks)
  const { data: konsentrasi } = useQuery<{
    konsentrasis: Array<Konsentrasi>
  }>(getKonsentrasis)
  const { data: kelas } = useQuery<{
    kelass: Array<Kelas>
  }>(getKelass);
  const { data: angkatan } = useQuery<{
    angkatans: Array<Angkatan>
  }>(getAngkatans)

  const { data: kelompok } = useQuery<{
    kelompoks: Array<Kelompok>
  }>(getKelompoks)



  if (route.params?.id === undefined) return <Text>Id not found</Text>
  const client = useApolloClient()
  const mahasiswa = client.readFragment<Mahasiswa>({
    id: `Mahasiswa:${route.params.id}`,
    fragment: gql`
      fragment MahasiswaDetails on Mahasiswa {
        ...MahasiswaFields
      }
    `,
  })


  const [updateUserMahasiswa] = useMutation<{
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
              if (route.params?.id === undefined) return <Text>Id not found</Text>

              if (readField('id', mahasiswaExist) === route.params.id) {
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

  const [form, setForm] = useState<Partial<
    Mahasiswa>>({
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



  const onChange = (field: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [field]: value
    }))
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
          id: route.params?.id!,
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
            password: form.fullname,
            username: form.fullname,
          },

        },
        optimisticResponse: {
          updateUser: {
            id: mahasiswa?.userId!,
            password: form.fullname,
            username: form.fullname,
          }
        }
      })
      Toast.show({
        swipeable: true,
        type: 'success',
        text1: `Sukses Update Mahasiswa ${form.fullname}`,
      })

      navigation.navigate("Mahasiswas")
    } catch (err) {
      console.error(err)
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

  return (
    <View
      style={baseStyles.centerContainer}
    >
      <KeyboardAwareScrollView contentContainerStyle={[
        baseStyles.innerCenterContainer, {
          paddingVertical: 20,
          gap: 12,
          flex: 1
        }
      ]}
        style={{
          width: '100%'
        }}
      >
        {adminItemFields["Mahasiswa"].map((field) => (
          <Fragment key={field}>
            {field.includes("id") || field.includes("Id") || field === 'role' ? null : (
              <TextInput
                key={field}
                placeholder={field}
                value={form[field]?.toString()}
                onChangeText={(value) => onChange(field, value)}
                style={baseStyles.primaryInput}
              />
            )}
            {field === 'prodiId' && (
              <View style={[
                baseStyles.primaryInput, {
                  paddingLeft: 0
                }
              ]}>
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
              <View style={[
                baseStyles.primaryInput, {
                  paddingLeft: 0
                }
              ]}>

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

            {field === 'proyekId' && (
              <View style={[
                baseStyles.primaryInput, {
                  paddingLeft: 0
                }
              ]}>

                <Picker
                  selectedValue={selectedProyek}
                  onValueChange={(itemValue) => setSelectedProyek(itemValue)}
                >
                  <Picker.Item label="Pilih Proyek" value={null} />
                  {proyeks?.proyeks.map((proyek) => (
                    <Picker.Item key={proyek.id} label={proyek.name!} value={proyek.id} />
                  ))}
                </Picker>
              </View>
            )}
            {field === 'role' && (
              <View style={[
                baseStyles.primaryInput, {
                  paddingLeft: 0
                }
              ]}>

                <Picker selectedValue={form.role} onValueChange={(itemValue) => onChange(field, itemValue as string)}>
                  <Picker.Item label="Pilih Role di kelompok" value="" />
                  <Picker.Item label={RoleMahasiswa.Anggota} value={RoleMahasiswa.Anggota} />
                  <Picker.Item label={RoleMahasiswa.Ketua} value={RoleMahasiswa.Ketua} />
                </Picker>
              </View>
            )}

            {(field === 'angkatanId' || field === 'kelasId' || field === 'kelompokId') && (
              <View style={[
                baseStyles.primaryInput, {
                  paddingLeft: 0
                }
              ]}>

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

                  {field === 'kelompokId' && kelompok?.kelompoks.map((kelompok) => (
                    <Picker.Item key={kelompok.id} label={kelompok.name} value={kelompok.id} />
                  ))}
                </Picker>
              </View>
            )}
          </Fragment>
        ))}

        <TouchableOpacity
          style={baseStyles.primaryButton}
          onPress={onUpdate}
        >
          <Text
            style={baseStyles.textButton}
          >
            Update
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>

    </View>
  )
}

export default DetailsMahasiswaScreen

const styles = StyleSheet.create({})
