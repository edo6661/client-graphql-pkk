import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { KonsentrasiNavigatorScreenProps } from '../../types/adminNavigator.type'
import { Konsentrasi, MutationDeleteKonsentrasiArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import ModalClose from '../../components/ModalClose'
import { deleteKonsentrasi } from '../../api/mutation/konsentrasi.mutation'
import { getKonsentrasis } from '../../api/query/konsentrasi.query'
import { COLORS } from '../../constants/colors'
import TemporaryLoading from '../../components/state/TemporaryLoading'
import TemporaryError from '../../components/state/TemporaryError'
import Separator from '../../components/Separator'

const KonsentrasiScreen = (
  { navigation }: KonsentrasiNavigatorScreenProps<"Konsentrasis">
) => {

  const { data, loading, error } = useQuery<{
    konsentrasis: Konsentrasi[]
  }>(getKonsentrasis)

  const [remove] = useMutation<any, MutationDeleteKonsentrasiArgs>(deleteKonsentrasi, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          konsentrasis(existingKonsentrasi = [], { readField }) {
            return existingKonsentrasi.filter((konsentrasi: Konsentrasi) =>
              readField('id', konsentrasi) !== data.deleteKonsentrasi.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: Konsentrasi) => {
    try {
      await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteKonsentrasi: {
            __typename: "Konsentrasis",
            id: item.id,
            name: item.name,
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
          data={data?.konsentrasis}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 16 }}
          ListHeaderComponent={
            <View>
              <Text style={baseStyles.secondaryTitle}>Daftar Konsentrasi</Text>
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
                onPress={() => navigation.navigate('DetailsKonsentrasis', { id: item.id })}
              >
                <Text style={styles.itemText}>{item.name}</Text>
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

export default KonsentrasiScreen

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
