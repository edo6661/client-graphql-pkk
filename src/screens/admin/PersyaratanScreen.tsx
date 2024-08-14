import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PersyaratanNavigatorScreenProps } from '../../types/adminNavigator.type'
import { useMutation, useQuery } from '@apollo/client'
import { Persyaratan, MutationDeletePersyaratanArgs } from '../../__generated__/graphql'
import { getPersyaratans } from '../../api/query/persyaratan.query'
import { baseStyles } from '../../styles'
import ModalClose from '../../components/ModalClose'
import { deletePersyaratan } from '../../api/mutation/persyaratan.mutation'

const PersyaratanScreen = (
  {
    navigation
  }: PersyaratanNavigatorScreenProps<"Persyaratans">
) => {

  const { data } = useQuery<{
    persyaratans: Persyaratan[]
  }>(getPersyaratans)


  const [remove, { error }] = useMutation<any, MutationDeletePersyaratanArgs>(deletePersyaratan, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          persyaratans(existingPersyaratans = [], { readField }) {
            return existingPersyaratans.filter((persyaratan: Persyaratan) =>
              readField('id', persyaratan) !== data.deletePersyaratan.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: Persyaratan) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deletePersyaratan: {
            __typename: "Persyaratan",
            ...item
          }
        }
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }


  const booleanToString = (value: boolean) => value === true ? 'Sudah' : 'Belum'

  return (
    <View
      style={
        baseStyles.container
      }
    >
      <Text>Persyaratan</Text>
      <FlatList

        data={data?.persyaratans}
        contentContainerStyle={{
          gap: 20
        }}
        renderItem={({ item }) => (
          <View style={{
            justifyContent: 'space-between',
            gap: 8
          }}>
            <Text>
              {item.mahasiswa.fullname}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsPersyaratans', { id: item.id })}
              style={{
                gap: 4
              }}
            >
              <Text>
                Keterangan
                Kelakuan Baik: {booleanToString(item.keteranganKelakuanBaik)}
              </Text>
              <Text>
                Keterangan
                Orang Tua: {booleanToString(item.keteranganOrangTua)}
              </Text>
              <Text>
                Keterangan
                Pembayaran: {booleanToString(item.keteranganPembayaran)}
              </Text>
              <Text>
                Keterangan
                Sehat: {booleanToString(item.keteranganSehat)}
              </Text>

              <Text>{
                item.mahasiswa.fullname
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

export default PersyaratanScreen

const styles = StyleSheet.create({})