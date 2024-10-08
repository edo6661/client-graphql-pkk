import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KelompokProyekScreenProps, MahasiswaDetailsProyekScreenProps } from '../../types/navigator.type'
import { useAuthContext } from '../../contexts/AuthContext'
import { Mahasiswa, MutationUpdateKelompokArgs, Proyek } from '../../__generated__/graphql'
import { useMutation, useQuery } from '@apollo/client'
import { getProyek } from '../../api/query/proyek.query'
import Toast from 'react-native-toast-message'
import { getMahasiswa } from '../../api/query/mahasiswa.query'
import { updateMahasiswa } from '../../api/mutation/mahasiswa.mutation'
import { baseStyles } from '../../styles'
import { ActivityIndicator } from 'react-native'
import { COLORS } from '../../constants/colors'

const MahasiswaDetailsProyek = (
  { navigation, route }: MahasiswaDetailsProyekScreenProps
) => {

  const { user } = useAuthContext()

  const { data: currentMahasiswa, error, loading, refetch: refetchKel } = useQuery<{
    mahasiswa: Mahasiswa
  }>(getMahasiswa, {
    variables: {
      id: route.params.id!
    },
  })
  const { refetch: refetchProyek,
    loading: loadingProyek
  } = useQuery<{
    getProyek: Proyek
  }>(getProyek, {
    variables: {
      id: currentMahasiswa?.mahasiswa?.proyekId
    }
  });

  const [update, {
    loading: loadingUpdate
  }] = useMutation<
    { updateMahasiswa: Partial<Mahasiswa> },
    MutationUpdateKelompokArgs
  >(updateMahasiswa, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateMahasiswa) return console.error('Data updateMahasiswa not found');
      cache.modify({
        fields: {
          mahasiswas(existingMahasiswas = [], { readField }) {
            return existingMahasiswas.map((mahasiswaExist: Mahasiswa) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', mahasiswaExist) === route.params.id) {
                return {
                  ...mahasiswaExist,
                  ...data.updateMahasiswa,
                };
              } else {
                return mahasiswaExist;
              }
            });
          },

        },
      });
    },
  });

  const mahasiswa = currentMahasiswa?.mahasiswa

  const [form, setForm] = useState<Partial<Mahasiswa>>({
    id: mahasiswa?.id,
    // @ts-ignore
    nilai: mahasiswa?.nilai?.toString(),
  })

  useEffect(() => {
    if (mahasiswa) {
      setForm({
        id: mahasiswa.id,
        // @ts-ignore
        nilai: mahasiswa.nilai ? mahasiswa.nilai.toString() : '',

      })
    }
  }, [mahasiswa])


  const allLoading = loading || loadingUpdate || loadingProyek

  return (
    <View
      style={baseStyles.centerContainer}
    >
      <View style={[
        baseStyles.innerCenterContainer, {
          paddingVertical: 20,
          gap: 12,
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
        {Object.keys(form).filter(field => field === 'nilai' || field === 'feedback').map((key) => (
          <View key={key}>
            <TextInput
              key={key}
              value={form[key as keyof Mahasiswa] as string}
              onChangeText={(text) => setForm({ ...form, [key]: text })}
              placeholder={`Masukkan ${key}`}
              inputMode={
                key === 'nilai' ? 'numeric' : 'text'
              }
              style={baseStyles.primaryInput}
            />
          </View>
        ))}

        <TouchableOpacity style={baseStyles.primaryButton}
          onPress={
            async () => {
              try {
                await update({
                  variables: {
                    id: form.id!,
                    nilai: +form.nilai!,
                  },
                  optimisticResponse: {
                    updateMahasiswa: {
                      ...mahasiswa,
                      __typename: "Mahasiswa",
                      id: form.id,
                      nilai: +form.nilai!,
                    }
                  }
                })
                refetchKel()
                refetchProyek()
                Toast.show({
                  type: 'success',
                  text1: 'Sukses Memberikan Nilai ',
                })
                navigation.navigate('MahasiswaProyek')
              } catch (err) {
                console.error(err)
              }
            }
          }>
          <Text
            style={baseStyles.textButton}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MahasiswaDetailsProyek

const styles = StyleSheet.create({})