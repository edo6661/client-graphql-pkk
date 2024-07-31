import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { CreateLaporanProyekScreenProps, LaporanProyekScreenProps } from '../../types/navigator.type'
import { Laporan, MutationCreateLaporanArgs, RoleMahasiswa } from '../../__generated__/graphql'
import { gql, useMutation } from '@apollo/client'
import { createLaporan } from '../../api/mutation/laporan.mutation'
import { useAuthContext } from '../../contexts/AuthContext'
import Toast from 'react-native-toast-message'

const CreateLaporanProyekScreen = (
  { navigation }: CreateLaporanProyekScreenProps
) => {


  const { user } = useAuthContext()
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

  return (
    <View>
      {Object.keys(form).filter(field =>
        !field.includes('Id')
      ).map((key) => (
        <TextInput
          key={key}
          placeholder={key}
          value={
            form[key as keyof Laporan] as string
          }
          onChangeText={(text) => setForm({ ...form, [key]: text })}
        />
      ))}
      <Button
        title='Create Laporan'
        onPress={onSubmit}
      />

    </View>
  )
}

export default CreateLaporanProyekScreen

const styles = StyleSheet.create({})