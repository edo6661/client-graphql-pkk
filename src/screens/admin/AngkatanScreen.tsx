import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getAngkatans } from '../../api/query/angkatan.query'
import { Angkatan, MutationDeleteAngkatanArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import { AngkatanNavigatorParamList, AngkatanNavigatorScreenProps } from '../../types/adminNavigator.type'
import ModalClose from '../../components/ModalClose'
import { deleteAngkatan } from '../../api/mutation/angkatan.mutation'

const AngkatanScreen = (
  { navigation, route }: AngkatanNavigatorScreenProps<"Angkatans">
) => {

  const { data } = useQuery<{
    angkatans: Angkatan[]
  }>(getAngkatans)

  const [remove, { error }] = useMutation<any, MutationDeleteAngkatanArgs>(deleteAngkatan, {

    update(cache, { data }) {
      cache.modify({
        fields: {
          angkatans(existingAngkatans = [], { readField }) {
            return existingAngkatans.filter((angkatan: Angkatan) =>
              readField('id', angkatan) !== data.deleteAngkatan.id
            )
          }
        }
      })
    }
  })

  console.log(error)

  const onRemove = async (item: Angkatan) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteAngkatan: {
            __typename: "Angkatan",
            id: item.id,
            tahun: item.tahun,
            createdAt: item.createdAt,
            updatedAt: new Date(),
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

        data={data?.angkatans}
        contentContainerStyle={{
          gap: 4
        }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsAngkatans', { id: item.id })}
            >
              <Text>{
                item.tahun
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

export default AngkatanScreen

const styles = StyleSheet.create({})