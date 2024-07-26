import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getProyeks } from '../../api/query/proyek.query'
import { Proyek, MutationDeleteProyekArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import { ProyekNavigatorParamList, ProyekNavigatorScreenProps } from '../../types/adminNavigator.type'
import ModalClose from '../../components/ModalClose'
import { deleteProyek } from '../../api/mutation/proyek.mutation'
import dayjs from 'dayjs'

const ProyekScreen = (
  { navigation, route }: ProyekNavigatorScreenProps<"Proyeks">
) => {

  const { data } = useQuery<{
    proyeks: Proyek[]
  }>(getProyeks)

  const [remove, { error }] = useMutation<any, MutationDeleteProyekArgs>(deleteProyek, {

    update(cache, { data }) {
      cache.modify({
        fields: {
          proyeks(existingProyeks = [], { readField }) {
            return existingProyeks.filter((proyek: Proyek) =>
              readField('id', proyek) !== data.deleteProyek.id
            )
          }
        }
      })
    }
  })


  const onRemove = async (item: Proyek) => {
    try {
      const res = await remove({
        variables: {
          id: item.id!
        },
        optimisticResponse: {
          deleteProyek: {
            __typename: "Proyek",
            id: item.id,
            createdAt: item.createdAt,
            updatedAt: new Date(),
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
      <Text>Proyek</Text>
      <FlatList

        data={data?.proyeks}
        contentContainerStyle={{
          gap: 4
        }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsProyeks', { id: item.id! })}
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
        keyExtractor={(item) => item.id!}
      />
    </View>
  )
}

export default ProyekScreen

const styles = StyleSheet.create({})