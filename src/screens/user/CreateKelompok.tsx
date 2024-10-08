import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { adminItemFields } from '../../types/admin.type'
import { Kelompok, Mahasiswa, MutationCreateKelompokArgs, MutationUpdateMahasiswaArgs, Proyek, RoleMahasiswa } from '../../__generated__/graphql'
import { useAuthContext } from '../../contexts/AuthContext'
import { gql, useMutation, useQuery } from '@apollo/client'
import { getProyeks } from '../../api/query/proyek.query'
import { Picker } from '@react-native-picker/picker'
import { createKelompok } from '../../api/mutation/kelompok.mutation'
import Toast from 'react-native-toast-message'
import { updateMahasiswa } from '../../api/mutation/mahasiswa.mutation'
import { baseStyles } from '../../styles'
import { ActivityIndicator } from 'react-native'
import { COLORS } from '../../constants/colors'
import { wordFirstUpper } from '../../utils/wordFirstUpper'

const CreateKelompok = () => {
  const { user, storeUser } = useAuthContext()
  const [form, setForm] = useState<Partial<Kelompok>>({})

  const onChange = (key: keyof Kelompok, value: string) => {
    setForm({
      ...form,
      [key]: value
    })
  }


  const [createKelompokMutation, {
    loading
  }] = useMutation<any, MutationCreateKelompokArgs>(createKelompok, {
    update(cache, { data }) {
      if (!data?.createKelompok) return console.error('Data not found')
      cache.modify({
        fields: {
          kelompoks(existingKelompok = []) {
            const newKelompok = cache.writeFragment({
              data: data.createKelompok,
              fragment: gql`
                fragment NewKelompokMahasiswa on Kelompok {
                  name
                  id
                }`
            })
            if (!newKelompok) return console.error('New Kelompok not found')
            return [...existingKelompok, newKelompok]
          }
        }
      })
    }
  })

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
              if (user?.mahasiswa!.id === undefined) return <Text>Id not found</Text>

              if (readField('id', mahasiswaExist) === user.mahasiswa!.id) {
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

  const onSubmit = async () => {
    try {
      const res = await createKelompokMutation({
        variables: {
          name: form.name!,
        },
      })
      await update({
        variables: {
          ...user?.mahasiswa,
          id: user?.mahasiswa?.id!,
          userId: user?.id!,
          kelompokId: res.data.createKelompok.id,
        },
      })
      storeUser({
        ...user,
        // @ts-ignore
        mahasiswa: {
          ...user?.mahasiswa,
          kelompokId: res.data.createKelompok.id,
          kelompok: {
            ...res.data.createKelompok
          }
        }
      })

      Toast.show({
        type: 'success',
        text1: 'Kelompok berhasil dibuat',
      })
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
      })
      console.error(err)

    }
  }
  return (
    <View
      style={{ gap: 12 }}
    >

      {
        loading && (
          <ActivityIndicator
            size='large'
            color={COLORS.primaryBlue}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1,
            }}
          />
        )
      }

      <Text
        style={baseStyles.tertiaryTitle}
      >
        {user?.mahasiswa?.role === RoleMahasiswa.Ketua ? 'Buatlah kelompok jika anda ingin KKN' : 'Join kelompok jika anda ingin KKN'}
      </Text>
      {user?.mahasiswa?.role === RoleMahasiswa.Ketua &&
        <Fragment>
          {adminItemFields['Kelompok'].map((field) => (
            <Fragment
              key={field}
            >
              {(!field.includes('Id') && field !== 'feedback' && field !== 'nilai') && (
                <TextInput
                  placeholder={wordFirstUpper(field)}
                  value={form[field]!}
                  onChangeText={(value) => onChange(field, value)}
                  style={baseStyles.primaryInput}
                />
              )}
            </Fragment>
          ))}

          <TouchableOpacity
            style={[
              baseStyles.primaryButton,
              loading ? {
                backgroundColor: COLORS.grey
              } : {
                backgroundColor: COLORS.primaryBlue
              }
            ]}
            onPress={
              onSubmit
            }
          >
            <Text
              style={baseStyles.textButton}
            >

              {loading ? 'Loading...' : 'Buat Kelompok'}
            </Text>
          </TouchableOpacity>
        </Fragment>
      }
    </View>
  )
}

export default CreateKelompok

const styles = StyleSheet.create({})