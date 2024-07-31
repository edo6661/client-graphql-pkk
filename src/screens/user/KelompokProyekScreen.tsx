import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KelompokProyekScreenProps } from '../../types/navigator.type'
import { useAuthContext } from '../../contexts/AuthContext'
import { Kelompok, MutationUpdateKelompokArgs, Proyek } from '../../__generated__/graphql'
import { getKelompok } from '../../api/query/kelompok.query'
import { useMutation, useQuery } from '@apollo/client'
import { updateKelompok } from '../../api/mutation/kelompok.mutation'
import { getProyek } from '../../api/query/proyek.query'
import Toast from 'react-native-toast-message'

const KelompokProyekScreen = (
  { navigation, route }: KelompokProyekScreenProps
) => {

  const { user } = useAuthContext()

  const { data: currentKelompok, error, loading, refetch: refetchKel } = useQuery<{
    kelompok: Kelompok
  }>(getKelompok, {
    variables: {
      id: route.params.id
    },
  })
  const { refetch: refetchProyek } = useQuery<{
    getProyek: Proyek
  }>(getProyek, {
    variables: {
      id: currentKelompok?.kelompok?.proyekId
    }
  });





  const [update] = useMutation<
    { updateKelompok: Partial<Kelompok> },
    MutationUpdateKelompokArgs
  >(updateKelompok, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateKelompok) return console.error('Data updateKelompok not found');
      cache.modify({
        fields: {
          kelompoks(existingKelompoks = [], { readField }) {
            return existingKelompoks.map((kelompokExist: Kelompok) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', kelompokExist) === route.params.id) {
                return {
                  ...kelompokExist,
                  ...data.updateKelompok,
                };
              } else {
                return kelompokExist;
              }
            });
          },

        },
      });
    },
  });

  const kelompok = currentKelompok?.kelompok

  const [form, setForm] = useState<Partial<Kelompok>>({
    id: kelompok?.id,
    name: kelompok?.name,
    proyekId: kelompok?.proyekId,
    // @ts-ignore
    nilai: kelompok?.nilai?.toString() ?? '',
    feedback: kelompok?.feedback ?? '',
  })

  useEffect(() => {
    if (kelompok) {
      setForm({
        id: kelompok.id,
        name: kelompok.name,
        proyekId: kelompok.proyekId,
        // @ts-ignore
        nilai: kelompok.nilai ? kelompok.nilai.toString() : '',
        feedback: kelompok.feedback ?? '',
      })
    }
  }, [kelompok])



  return (
    <View>
      {Object.keys(form).filter(field => field === 'nilai' || field === 'feedback').map((key) => (
        <View key={key}>
          <TextInput
            key={key}
            value={form[key as keyof Kelompok] as string}
            onChangeText={(text) => setForm({ ...form, [key]: text })}
            placeholder={`Masukkan ${key}`}
            inputMode={
              key === 'nilai' ? 'numeric' : 'text'
            }
          />
        </View>
      ))}
      <Button
        title="Update Kelompok"
        onPress={async () => {
          try {
            await update({
              variables: {
                id: form.id!,
                name: form.name!,
                proyekId: form.proyekId!,
                nilai: +form.nilai!,
                feedback: form.feedback!
              },
              optimisticResponse: {
                updateKelompok: {
                  ...kelompok,
                  __typename: "Kelompok",
                  name: form.name,
                  proyekId: form.proyekId,
                  id: form.id,
                  nilai: +form.nilai!,
                  feedback: form.feedback
                }
              }
            })
            refetchKel()
            refetchProyek()
            Toast.show({
              type: 'success',
              text1: 'Sukses Memberikan Feedback dan Nilai Kelompok',
            })
            navigation.navigate('MahasiswaProyek')
          } catch (err) {
            console.error(err)
          }
        }}
      />
    </View>
  )
}

export default KelompokProyekScreen

const styles = StyleSheet.create({})