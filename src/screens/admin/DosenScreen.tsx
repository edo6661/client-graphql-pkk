import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Fragment } from 'react'
import { AdminStackScreenProps, DosenNavigatorScreenProps } from '../../types/adminNavigator.type'
import { useMutation, useQuery } from '@apollo/client'
import { getDosen } from '../../api/query/dosen.query'
import { Dosen, MutationDeleteDosenArgs, MutationDeleteUserArgs } from '../../__generated__/graphql'
import ModalClose from '../../components/ModalClose'
import { removeDosen } from '../../api/mutation/dosen.mutation'
import { deleteUser } from '../../api/mutation/user.mutation'

const DosenScreen = (
  { navigation }: DosenNavigatorScreenProps<"Dosens">
) => {
  const [remove] = useMutation<any, MutationDeleteUserArgs>(deleteUser, {

    update(cache, { data }) {
      cache.modify({
        fields: {
          dosens(existingDosens = [], { readField }) {
            return existingDosens.filter((dosen: Dosen) =>
              readField('userId', dosen) !== data.deleteUser.id
            )
          }
        }
      })
    }
  })

  const { data, loading } = useQuery<{
    dosens: Array<Dosen>
  }>(getDosen)


  const onRemove = async (item: Dosen & {
    userId?: string
  }) => {
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
    <View>
      <Text>DosenScreen</Text>

      {loading && <Text>Loading...</Text>}
      <FlatList
        data={data?.dosens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsDosens', { id: item.id })}
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
      />
    </View>
  )
}

export default DosenScreen

const styles = StyleSheet.create({})