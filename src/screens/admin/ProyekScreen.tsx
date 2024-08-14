import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getProyeks } from '../../api/query/proyek.query'
import { Proyek, MutationDeleteProyekArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import { ProyekNavigatorParamList, ProyekNavigatorScreenProps } from '../../types/adminNavigator.type'
import ModalClose from '../../components/ModalClose'
import { deleteProyek } from '../../api/mutation/proyek.mutation'
import dayjs from 'dayjs'
import Separator from '../../components/Separator'
import { COLORS } from '../../constants/colors'

const ProyekScreen = (
  { navigation, route }: ProyekNavigatorScreenProps<"Proyeks">
) => {

  const { data,

    loading
  } = useQuery<{
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
        baseStyles.centerContainer
      }
    >
      <View style={
        [
          baseStyles.innerCenterContainer, {
            paddingVertical: 20
          }
        ]
      }>
        {loading && (
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
        )}


        <FlatList

          data={data?.proyeks}
          ListHeaderComponent={
            <View>
              <Text style={baseStyles.secondaryTitle}>Daftar Proyek</Text>
              <Separator
                color={COLORS.grey}
                height={2}
                orientation='horizontal'
                width={'100%'}
              />
            </View>

          }
          contentContainerStyle={{
            gap: 16
          }}
          style={{
            width: '100%'
          }}
          renderItem={({ item }) => (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailsProyeks', { id: item.id! })}
              >
                <View style={{
                  flexDirection: 'column',
                  gap: 4,
                }}>
                  <Text>Nama: {item.name}</Text>
                  <Text>Lokasi: {item.lokasi ?? 'N/A'}</Text>
                </View>
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
    </View>
  )
}

export default ProyekScreen

const styles = StyleSheet.create({})