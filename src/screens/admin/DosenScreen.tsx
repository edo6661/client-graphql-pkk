import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Fragment } from 'react'
import { AdminStackScreenProps, DosenNavigatorScreenProps } from '../../types/adminNavigator.type'
import { useMutation, useQuery } from '@apollo/client'
import { getDosen } from '../../api/query/dosen.query'
import { Dosen, MutationDeleteDosenArgs, MutationDeleteUserArgs } from '../../__generated__/graphql'
import ModalClose from '../../components/ModalClose'
import { removeDosen } from '../../api/mutation/dosen.mutation'
import { deleteUser } from '../../api/mutation/user.mutation'
import { COLORS } from '../../constants/colors'
import { baseStyles } from '../../styles'
import Separator from '../../components/Separator'

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
    <View
      style={[
        baseStyles.centerContainer
      ]}
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
        <FlatList
          data={data?.dosens}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 16
          }}
          ListHeaderComponent={
            <View>
              <Text
                style={[
                  baseStyles.secondaryTitle,
                ]}
              >
                Daftar Dosen
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
                onPress={() => navigation.navigate('DetailsDosens', { id: item.id })}

              >
                <View
                  style={{
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  <Text>Nama: {
                    item.fullname
                  }</Text>
                  <Text>
                    NIDN: {
                      item.nidn
                    }</Text>

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

export default DosenScreen

const styles = StyleSheet.create({})