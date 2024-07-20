import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getFakultas } from '../../api/query/fakultas.query'
import { useMutation, useQuery } from '@apollo/client'
import { AdminStackScreenProps, FakultasNavigatorScreenProps } from '../../types/adminNavigator.type'
import { Fakultas, MutationDeleteFakultasArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import ModalClose from '../../components/ModalClose'
import { deleteFakultas } from '../../api/mutation/fakultas.mutation'

const FakultasScreen = (
  { navigation, route }: FakultasNavigatorScreenProps<"Fakultas">
) => {

  const { data, loading, error, } = useQuery<{
    fakultas: Fakultas[]
  }>(getFakultas)

  const [remove] = useMutation<any, MutationDeleteFakultasArgs>(deleteFakultas, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          fakultas(existingFakultas = [], { readField }) {
            return existingFakultas.filter((fakultas: Fakultas) =>
              readField('id', fakultas) !== data.deleteFakultas.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: Fakultas) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteFakultas: {
            __typename: "Fakultas",
            id: item.id,
            name: item.name,
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
      <Text>Fakultascreen</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error </Text>}
      <FlatList

        data={data?.fakultas}
        contentContainerStyle={{
          gap: 4
        }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsFakultas', { id: item.id })}
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

export default FakultasScreen

const styles = StyleSheet.create({})