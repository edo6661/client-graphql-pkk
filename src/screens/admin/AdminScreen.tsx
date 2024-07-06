import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getAdmins } from '../../api/query/admin.query'
import { useMutation, useQuery } from '@apollo/client'
import { Admin, MutationDeleteUserArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import { AdminNavigatorScreenProps } from '../../types/adminNavigator.type'
import { deleteAdmin } from '../../api/mutation/admin.mutation'
import { deleteUser } from '../../api/mutation/user.mutation'
import ModalClose from '../../components/ModalClose'

const AdminScreen = (
  { navigation, route }: AdminNavigatorScreenProps<"Admins">
) => {
  const { data, loading, error, } = useQuery<{
    admins: Admin[]
  }>(getAdmins)

  const [remove] = useMutation<any, MutationDeleteUserArgs>(deleteUser, {

    update(cache, { data }) {
      cache.modify({
        fields: {
          admins(existingAdmins = [], { readField }) {
            return existingAdmins.filter((admin: Admin) =>
              readField('userId', admin) !== data.deleteUser.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: Admin) => {
    try {
      const res = await remove({
        variables: {
          id: item.userId
        },
        optimisticResponse: {
          deleteUser: {
            __typename: "User",
            id: item.userId,
            username: item.fullname,
            admin: {
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
      <Text>AdminScreen</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error </Text>}
      <FlatList

        data={data?.admins}
        contentContainerStyle={{
          gap: 4
        }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsAdmins', { id: item.id })}
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
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})