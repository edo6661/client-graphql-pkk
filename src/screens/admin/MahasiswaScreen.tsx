import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { COLORS } from '../../constants/colors'
import Separator from '../../components/Separator'

const MahasiswaScreen = (
  { navigation, route }: MahasiswaNavigatorScreenProps<"Mahasiswas">
) => {
  const { data, loading, error } = useQuery(getMahasiswas)
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
            mahasiswa: {
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
      style={baseStyles.centerContainer}
    >
      <View style={[
        baseStyles.innerCenterContainer,
        {
          paddingVertical: 20,
        }
      ]}>
        {
          loading && (
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
          )
        }
        {error && <TemporaryError err={error} />}
        <FlatList
          data={data?.mahasiswas}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 16,
          }}
          ListHeaderComponent={
            <View>
              <Text style={baseStyles.secondaryTitle}>
                Daftar Mahasiswa
              </Text>
              <Separator
                color={COLORS.grey}
                height={2}
                orientation='horizontal'
                width={'100%'}
              />
            </View>
          }
          renderItem={({ item }) => (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailsMahasiswas', { id: item.id })}
              >
                <View style={{
                  flexDirection: 'column',
                  gap: 4,
                }}>
                  <Text>Nama: {item.fullname}</Text>
                  <Text>NIM: {item.nim}</Text>
                </View>
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

export default MahasiswaScreen

const styles = StyleSheet.create({})
