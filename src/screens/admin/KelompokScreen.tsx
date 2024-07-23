import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getKelompoks } from '../../api/query/kelompok.query'
import { Kelompok, MutationDeleteKelompokArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import { KelompokNavigatorParamList, KelompokNavigatorScreenProps } from '../../types/adminNavigator.type'
import ModalClose from '../../components/ModalClose'
import { deleteKelompok } from '../../api/mutation/kelompok.mutation'

const KelompokScreen = (
  { navigation, route }: KelompokNavigatorScreenProps<"Kelompoks">
) => {

  const { data } = useQuery<{
    kelompoks: Kelompok[]
  }>(getKelompoks)

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