import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getMahasiswas } from '../../api/query/mahasiswa.query'
import { baseStyles } from '../../styles'
import TemporaryLoading from '../../components/state/TemporaryLoading'
import TemporaryError from '../../components/state/TemporaryError'
import ModalClose from '../../components/ModalClose'
import { MahasiswaNavigatorScreenProps } from '../../types/adminNavigator.type'
import { Mahasiswa, MutationDeleteUserArgs } from '../../__generated__/graphql'
import { deleteUser } from '../../api/mutation/user.mutation'

const MahasiswaScreen = (
  { navigation, route }: MahasiswaNavigatorScreenProps<"Mahasiswas">
) => {
  const { data, loading, error, } = useQuery(getMahasiswas)
  const [remove] = useMutation<any, MutationDeleteUserArgs>(deleteUser, {


    update(cache, { data }) {
      cache.modify({
        fields: {
          mahasiswas(existingMahasiswas = [], { readField }) {
            return existingMahasiswas.filter((mahasiswa: Mahasiswa) =>
              readField('userId', mahasiswa) !== data.deleteUser.id
            )
          }
        }
      })
    }
  })



  const onRemove = async (item: Mahasiswa) => {
    try {
      const res = await remove({
        variables: {
          id: item.userId || '1'
        },
        optimisticResponse: {
          deleteUser: {
            __typename: "User",
            id: item.userId,
            username: item.fullname,
            dosen: {
              ...item,
            }
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
      <Text>MahasiswaScreen</Text>
      {loading && <TemporaryLoading />}
      {error && <TemporaryError err={error} />}
      <FlatList
        data={data?.mahasiswas}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsMahasiswas', { id: item.id })}
            >
              <Text>{
                item.fullname
              }</Text>
            </TouchableOpacity>
            <ModalClose
              trigger='Delete'
              action={onRemove}
              item={item}
            />
          </View>
        )}
        keyExtractor={(item) => item.id} />
    </View>
  )
}

export default MahasiswaScreen

const styles = StyleSheet.create({})