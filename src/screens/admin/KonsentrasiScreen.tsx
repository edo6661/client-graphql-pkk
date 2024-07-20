import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { AdminStackScreenProps, KonsentrasiNavigatorScreenProps } from '../../types/adminNavigator.type'
import { Konsentrasi, MutationDeleteKonsentrasiArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import ModalClose from '../../components/ModalClose'
import { deleteKonsentrasi } from '../../api/mutation/konsentrasi.mutation'
import { getKonsentrasis } from '../../api/query/konsentrasi.query'

const KonsentrasiScreen = (
  { navigation, route }: KonsentrasiNavigatorScreenProps<"Konsentrasis">
) => {

  const { data, loading, error, } = useQuery<{
    konsentrasis: Konsentrasi[]
  }>(getKonsentrasis)



  const [remove] = useMutation<any, MutationDeleteKonsentrasiArgs>(deleteKonsentrasi, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          konsentrasis(existingKonsentrasi = [], { readField }) {
            return existingKonsentrasi.filter((konsentrasi: Konsentrasi) =>
              readField('id', konsentrasi) !== data.deleteKonsentrasi.id
            )
          }
        }
      })
    }
  })


  const onRemove = async (item: Konsentrasi) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteKonsentrasi: {
            __typename: "Konsentrasis",
            id: item.id,
            name: item.name,
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
      <Text>Konsentrasicreen</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error </Text>}
      <FlatList

        data={data?.konsentrasis}
        contentContainerStyle={{
          gap: 4
        }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsKonsentrasis', { id: item.id })}
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

export default KonsentrasiScreen

const styles = StyleSheet.create({})