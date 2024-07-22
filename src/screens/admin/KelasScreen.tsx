import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { KelasNavigatorScreenProps } from '../../types/adminNavigator.type'
import { useMutation, useQuery } from '@apollo/client'
import { Kelas, MutationDeleteKelasArgs } from '../../__generated__/graphql'
import { getKelass } from '../../api/query/kelas.query'
import { deleteKelas } from '../../api/mutation/kelas.mutation'
import { baseStyles } from '../../styles'
import ModalClose from '../../components/ModalClose'

const KelasScreen = (
  {
    navigation
  }: KelasNavigatorScreenProps<"Kelass">
) => {

  const { data } = useQuery<{
    kelass: Kelas[]
  }>(getKelass)

  console.log(data)

  const [remove, { error }] = useMutation<any, MutationDeleteKelasArgs>(deleteKelas, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          kelass(existingKelass = [], { readField }) {
            return existingKelass.filter((kelas: Kelas) =>
              readField('id', kelas) !== data.deleteKelas.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: Kelas) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteKelas: {
            __typename: "Kelas",
            ...item
          }
        }
      })
      console.log(res)
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
      <Text>Angkatan</Text>
      <FlatList

        data={data?.kelass}
        contentContainerStyle={{
          gap: 4
        }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsKelass', { id: item.id })}
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

export default KelasScreen

const styles = StyleSheet.create({})