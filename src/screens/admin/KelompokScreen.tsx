import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getKelompoks } from '../../api/query/kelompok.query'
import { Kelompok, Mahasiswa, MutationDeleteKelompokArgs, MutationUpdateMahasiswaArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import { KelompokNavigatorParamList, KelompokNavigatorScreenProps } from '../../types/adminNavigator.type'
import ModalClose from '../../components/ModalClose'
import { deleteKelompok } from '../../api/mutation/kelompok.mutation'
import { updateMahasiswa } from '../../api/mutation/mahasiswa.mutation'

const KelompokScreen = (
  { navigation, route }: KelompokNavigatorScreenProps<"Kelompoks">
) => {

  const { data, error: errKel } = useQuery<{
    kelompoks: Kelompok[]
  }>(getKelompoks)

  console.log(data)
  console.log(errKel)

  const [remove, { error }] = useMutation<any, MutationDeleteKelompokArgs>(deleteKelompok, {

    update(cache, { data }) {
      cache.modify({
        fields: {
          kelompoks(existingKelompoks = [], { readField }) {
            return existingKelompoks.filter((kelompok: Kelompok) =>
              readField('id', kelompok) !== data.deleteKelompok.id
            )
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

  console.log(error)

  const onRemove = async (item: Kelompok) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteKelompok: {
            __typename: "Kelompok",
            id: item.id,
            name: item.name,
            createdAt: item.createdAt,
            updatedAt: new Date(),
            proyekId: item.proyekId,
          }
        }
      })

    } catch (err) {
      console.log(err)
    }
  }



  return (
    <View
      style={
        baseStyles.container
      }
    >
      <Text>Kelompok</Text>
      <FlatList

        data={data?.kelompoks}
        contentContainerStyle={{
          gap: 4
        }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsKelompoks', { id: item.id })}
            >
              <Text>{
                item.name
              }</Text>
            </TouchableOpacity>
            <ModalClose
              trigger='Delete'
              action={onRemove}
              item={item}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default KelompokScreen

const styles = StyleSheet.create({})