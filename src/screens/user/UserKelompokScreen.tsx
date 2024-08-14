import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import CreateKelompok from './CreateKelompok'
import { useMutation, useQuery } from '@apollo/client'
import { Kelompok, Mahasiswa, MutationDeleteKelompokArgs, MutationUpdateMahasiswaArgs, RoleMahasiswa } from '../../__generated__/graphql'
import { deleteKelompok } from '../../api/mutation/kelompok.mutation'
import ModalClose from '../../components/ModalClose'
import { getMahasiswas } from '../../api/query/mahasiswa.query'
import { getKelompok } from '../../api/query/kelompok.query'
import { Picker } from '@react-native-picker/picker'
import { updateMahasiswa } from '../../api/mutation/mahasiswa.mutation'
import Toast from 'react-native-toast-message'
import { UserKelompokNavigatorProps } from '../../types/navigator.type'
import { baseStyles } from '../../styles'
import { COLORS } from '../../constants/colors'

const UserKelompokScreen = (
  { navigation }: UserKelompokNavigatorProps
) => {
  const { user, storeUser } = useAuthContext()
  const { data,
    loading: loadingMahasiswa,
  } = useQuery<{
    mahasiswas: Array<Mahasiswa>
  }>(getMahasiswas)
  const { data: currentKelompok, error, loading, refetch } = useQuery<{
    kelompok: Kelompok
  }>(getKelompok, {
    variables: {
      id: user?.mahasiswa?.kelompokId
    },

  })
  const proyekId = user?.mahasiswa?.proyekId || user?.mahasiswa?.kelompok?.proyekId || user?.dosen?.proyekId



  const [form, setForm] = useState<Partial<
    Mahasiswa>>({
      id: '',
      kelompokId: user?.mahasiswa?.kelompokId,
    })
  const onChange = (key: string, value: string) => setForm({
    ...form,
    [key]: value
  })


  const [update, {
    loading: loadingUpdate
  }] = useMutation<
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
              if (form.id === undefined) return <Text>Id not found</Text>

              if (readField('id', mahasiswaExist) === form.id) {
                return {
                  ...mahasiswaExist,
                  ...data.updateMahasiswa,
                }
              } else {
                return mahasiswaExist
              }
            })
          },

        }
      })
    }
  })

  const onUpdate = async () => {
    try {
      await update({
        variables: {
          id: form.id!,
          kelompokId: form.kelompokId!,
        }
      })
      setForm({
        id: '',
        kelompokId: user?.mahasiswa?.kelompokId
      })
      refetch()
      Toast.show
        ({
          type: 'success',
          text1: 'Success',
          text2: 'Mahasiswa added to Kelompok'
        })
    } catch (err) {
      console.error(err)
    }
  }

  const keluarKelompok = async () => {
    try {
      await update({
        variables: {
          id: user?.mahasiswa?.id!,
          kelompokId: null,
        }
      })
      storeUser({
        ...user!,
        mahasiswa: {
          ...user?.mahasiswa!,
          kelompokId: null
        }
      })
      refetch()
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Mahasiswa removed from Kelompok'
      })

    } catch (err) {
      console.error(err)
    }
  }

  const allLoading = loading || loadingMahasiswa || loadingUpdate

  const isKelompokFull = currentKelompok?.kelompok?.mahasiswa?.length! > 3

  return (
    <View
      style={baseStyles.centerContainer}
    >
      <View style={[
        baseStyles.innerCenterContainer,
        {
          paddingVertical: 20,
          gap: 16
        }
      ]}>
        {
          allLoading && (
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
        {!loadingMahasiswa && !user?.mahasiswa?.kelompokId && (
          <CreateKelompok />
        )}
        {!loadingMahasiswa && user?.mahasiswa?.kelompokId && (
          <View

          >
            <Text
              style={baseStyles.secondaryTitle}
            >
              Anggota Kelompok: {currentKelompok?.kelompok.mahasiswa?.length}
            </Text>
            {currentKelompok?.kelompok.mahasiswa && (
              <FlatList
                data={currentKelompok.kelompok.mahasiswa}
                contentContainerStyle={{
                  gap: 4,
                }}
                renderItem={({ item }) => (
                  <Text

                  >
                    {item?.fullname}
                  </Text>
                )}
                keyExtractor={(item) => item!.id}
              />
            )}
          </View>
        )}
        <View style={{
          gap: 8
        }}>

          {!loadingMahasiswa && (user?.mahasiswa?.kelompokId && user.mahasiswa.role === RoleMahasiswa.Ketua) && (
            <View
              style={{
                gap: 16
              }}
            >
              <View
                style={[
                  baseStyles.primaryInput,
                  {
                    paddingLeft: 0,
                  }
                ]}
              >
                <Picker
                  selectedValue={form.id}
                  onValueChange={(value) => {
                    if (value === null) return
                    onChange('id', value)
                  }}

                >
                  {isKelompokFull ? (
                    <Picker.Item
                      label="Anggota Kelompok Penuh"
                      value={null}
                    />
                  ) : (
                    <Picker.Item
                      label="Pilih Anggota"
                      value={null}
                    />
                  )}
                  {!isKelompokFull && data?.mahasiswas.filter((mhs) =>
                    mhs.kelompokId === null && mhs.role === RoleMahasiswa.Anggota && proyekId === null
                  ).map((mahasiswa) => (
                    <Picker.Item
                      key={mahasiswa.id}
                      label={mahasiswa.fullname}
                      value={mahasiswa.id}

                    />
                  ))}
                </Picker>

              </View>

              <TouchableOpacity
                style={[
                  baseStyles.primaryButton, {
                    backgroundColor: isKelompokFull ? COLORS.grey : COLORS.primaryBlue
                  }
                ]}
                onPress={isKelompokFull ? (
                  () => Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Anggota Kelompok Penuh'
                  })
                ) : onUpdate}
                disabled={isKelompokFull}
              >
                <Text
                  style={baseStyles.textButton}
                >
                  {isKelompokFull
                    ? 'Anggota Kelompok Penuh'
                    : 'Tambah Anggota'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {user?.mahasiswa?.kelompokId && (user?.mahasiswa!.role === RoleMahasiswa.Anggota) && proyekId === null && (

            <TouchableOpacity style={baseStyles.primaryButton}
              onPress={keluarKelompok}>
              <Text style={baseStyles.textButton}>Keluar Kelompok</Text>
            </TouchableOpacity>
          )}

        </View>

      </View>
    </View>
  )
}

export default UserKelompokScreen

const styles = StyleSheet.create({})