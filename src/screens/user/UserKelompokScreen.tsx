import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
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

const UserKelompokScreen = () => {
  const { user } = useAuthContext()
  const { data } = useQuery<{
    mahasiswas: Array<Mahasiswa>
  }>(getMahasiswas)
  const { data: currentKelompok, error, loading, refetch } = useQuery<{
    kelompok: Kelompok
  }>(getKelompok, {
    variables: {
      id: user?.mahasiswa?.kelompokId
    },

  })



  const [form, setForm] = useState<Partial<
    Mahasiswa>>({
      id: '',
      kelompokId: user?.mahasiswa?.kelompokId,
    })
  const onChange = (key: string, value: string) => setForm({
    ...form,
    [key]: value
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
          kelompokId: form.kelompokId!
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



  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        gap: 10
      }}
    >
      {loading && <Text>Loading...</Text>}
      {!user?.mahasiswa?.kelompokId && (
        <CreateKelompok />
      )}
      {user?.mahasiswa?.kelompokId && (
        <View>
          <Text>
            Anggota Kelompok: {currentKelompok?.kelompok.mahasiswa?.length}
          </Text>
          {currentKelompok?.kelompok.mahasiswa && (
            <FlatList
              data={currentKelompok.kelompok.mahasiswa}
              renderItem={({ item }) => (
                <Text>
                  {item?.fullname}
                </Text>
              )}
              keyExtractor={(item) => item!.id}
            />
          )}
        </View>
      )}

      {(user?.mahasiswa?.kelompokId && user.mahasiswa.role === RoleMahasiswa.Ketua) && (
        <View>
          <Picker
            selectedValue={form.id}
            onValueChange={(value) => {
              if (value === null) return
              onChange('id', value)
            }}

          >
            <Picker.Item label='Select Mahasiswa' value={null} />
            {data?.mahasiswas.filter((mhs) =>
              mhs.kelompokId === null && mhs.role === RoleMahasiswa.Anggota && mhs.proyekId === null
            ).map((mahasiswa) => (
              <Picker.Item
                key={mahasiswa.id}
                label={mahasiswa.fullname}
                value={mahasiswa.id}

              />
            ))}
          </Picker>
          <Button
            title={
              currentKelompok?.kelompok?.mahasiswa?.length! > 3
                ? 'Anggota Kelompok Penuh'
                : 'Tambah Anggota'
            }
            onPress={onUpdate}
            disabled={
              currentKelompok?.kelompok?.mahasiswa?.length! > 3
            }
          />
        </View>
      )}
    </View>
  )
}

export default UserKelompokScreen

const styles = StyleSheet.create({})