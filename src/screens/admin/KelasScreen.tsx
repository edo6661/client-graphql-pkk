import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { KelasNavigatorScreenProps } from '../../types/adminNavigator.type'
import { useMutation, useQuery } from '@apollo/client'
import { Kelas, MutationDeleteKelasArgs } from '../../__generated__/graphql'
import { getKelass } from '../../api/query/kelas.query'
import { deleteKelas } from '../../api/mutation/kelas.mutation'
import { baseStyles } from '../../styles'
import ModalClose from '../../components/ModalClose'
import { COLORS } from '../../constants/colors'
import TemporaryError from '../../components/state/TemporaryError'
import Separator from '../../components/Separator'

const KelasScreen = ({ navigation }: KelasNavigatorScreenProps<"Kelass">) => {

  const { data, loading, error } = useQuery<{
    kelass: Kelas[]
  }>(getKelass)

  const [remove] = useMutation<any, MutationDeleteKelasArgs>(deleteKelas, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          kelass(existingKelass = [], { readField }) {
            return existingKelass.filter((kelas: Kelas) =>
              readField('id', kelas) !== data.deleteKelas.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: Kelas) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteKelas: {
            __typename: "Kelas",
            ...item
          }
        }
      })
      console.log(res)
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
          data={data?.kelass}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 16 }}
          ListHeaderComponent={
            <View>
              <Text style={baseStyles.secondaryTitle}>Daftar Kelas</Text>
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
                onPress={() => navigation.navigate('DetailsKelass', { id: item.id })}
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

export default KelasScreen

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
