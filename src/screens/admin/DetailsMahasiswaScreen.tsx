import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { AdminNavigatorScreenProps, MahasiswaNavigatorScreenProps } from '../../types/adminNavigator.type'
import { adminItemFields } from '../../types/admin.type'
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client'
import { Admin, Konsentrasi, Mahasiswa, MutationUpdateAdminArgs, MutationUpdateMahasiswaArgs, MutationUpdateUserArgs, ProgramStudi, Proyek, Role, User } from '../../__generated__/graphql'
import { updateUser } from '../../api/mutation/user.mutation'
import Toast from 'react-native-toast-message'
import { updateMahasiswa } from '../../api/mutation/mahasiswa.mutation'
import { Picker } from '@react-native-picker/picker'
import { getProgramStudis } from '../../api/query/programStudi.query'
import { getProyeks } from '../../api/query/proyek.query'
import { getKonsentrasis } from '../../api/query/konsentrasi.query'


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
    Mahasiswa & {
      prodiId: string,
      konsentrasiId: string,
      proyekId: string,
    }
  >>({
    fullname: mahasiswa?.fullname || "",
    id: mahasiswa?.id || "",
    userId: mahasiswa?.userId || "",
    prodiId: mahasiswa?.prodi.id || "",
    konsentrasiId: mahasiswa?.konsentrasi.id || "",
    proyekId: mahasiswa?.proyek?.id || "",
    nim: mahasiswa?.nim || "",
    semester: +mahasiswa?.semester! || 0,
  })
  const [selectedKonsentrasi, setSelectedKonsentrasi] = useState<string>(
    mahasiswa?.konsentrasi.id || ""
  );
  const [selectedProdi, setSelectedProdi] = useState<string>(
    mahasiswa?.prodi.id || ""
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
    update({
      variables: {
        id: route.params?.id!,
        fullname: form?.fullname!,
        nim: form?.nim!,
        semester: +form?.semester!,
        prodiId: form?.prodiId!,
        konsentrasiId: form?.konsentrasiId!,
        proyekId: form?.proyekId,

      },
      optimisticResponse: {
        updateMahasiswa: {
          ...mahasiswa,
          fullname: form.fullname,
          nim: form.nim,
          semester: form.semester,
          prodi: {
            ...mahasiswa?.prodi!,
            id: form.prodiId! ?? mahasiswa?.prodi?.id!,
          },
          konsentrasi: {
            ...mahasiswa?.konsentrasi!,
            id: form.konsentrasiId! ?? mahasiswa?.konsentrasi?.id!,
          },
          proyek: {
            ...mahasiswa?.proyek!,
            id: form.proyekId! ?? mahasiswa?.proyek?.id!,
          }


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
    <View>
      {adminItemFields["Mahasiswa"].map((field) => (
        <Fragment key={field}>
          {field.includes("id") || field.includes("Id") ? null : (
            <TextInput
              key={field}
              placeholder={field}
              value={form[field]?.toString()}
              onChangeText={(value) => onChange(field, value)}
            />
          )}
          {field === 'prodiId' && (
            <Picker
              selectedValue={selectedProdi}
              onValueChange={(itemValue) => setSelectedProdi(itemValue)}
            >
              <Picker.Item label="Pilih Prodi" value="" />
              {fakultas?.programStudis.map((prodi) => (
                <Picker.Item key={prodi.id} label={prodi.name} value={prodi.id} />
              ))}
            </Picker>
          )}

          {field === 'konsentrasiId' && (
            <Picker
              selectedValue={selectedKonsentrasi}
              onValueChange={(itemValue) => setSelectedKonsentrasi(itemValue)}
            >
              <Picker.Item label="Pilih Konsentrasi" value="" />
              {konsentrasi?.konsentrasis.map((konsentrasi) => (
                <Picker.Item key={konsentrasi.id} label={konsentrasi.name} value={konsentrasi.id} />
              ))}
            </Picker>
          )}

          {field === 'proyekId' && (
            <Picker
              selectedValue={selectedProyek}
              onValueChange={(itemValue) => setSelectedProyek(itemValue)}
            >
              <Picker.Item label="Pilih Proyek" value="" />
              {proyeks?.proyeks.map((proyek) => (
                <Picker.Item key={proyek.id} label={proyek.name} value={proyek.id} />
              ))}
            </Picker>
          )}
        </Fragment>
      ))}
      <Button
        title="Update"
        onPress={onUpdate}
      />

    </View>
  )
}

export default DetailsMahasiswaScreen

const styles = StyleSheet.create({})
