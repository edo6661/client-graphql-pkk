import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getAdmins } from '../../api/query/admin.query'
import { useMutation, useQuery } from '@apollo/client'
import { Admin, MutationDeleteUserArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import { AdminNavigatorScreenProps } from '../../types/adminNavigator.type'
import { deleteUser } from '../../api/mutation/user.mutation'
import ModalClose from '../../components/ModalClose'
import { COLORS } from '../../constants/colors'
import TemporaryError from '../../components/state/TemporaryError'
import Separator from '../../components/Separator'

const AdminScreen = (
  { navigation }: AdminNavigatorScreenProps<"Admins">
) => {
  const { data, loading, error } = useQuery<{
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
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={baseStyles.centerContainer}>
      <View style={[
        baseStyles.innerCenterContainer,
        { paddingVertical: 20 }
      ]}>
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
        {error && <TemporaryError err={error} />}
        <FlatList
          data={data?.admins}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 16 }}
          ListHeaderComponent={
            <View>
              <Text style={baseStyles.secondaryTitle}>Daftar Admin</Text>
              <Separator
                color={COLORS.grey}
                height={2}
                orientation='horizontal'
                width={'100%'}
              />
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailsAdmins', { id: item.id })}
              >
                <Text style={styles.itemText}>{item.fullname}</Text>
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
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
})
