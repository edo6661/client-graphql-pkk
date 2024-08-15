import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getFakultas } from '../../api/query/fakultas.query'
import { useMutation, useQuery } from '@apollo/client'
import { FakultasNavigatorScreenProps } from '../../types/adminNavigator.type'
import { Fakultas, MutationDeleteFakultasArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import ModalClose from '../../components/ModalClose'
import { deleteFakultas } from '../../api/mutation/fakultas.mutation'
import { COLORS } from '../../constants/colors'
import TemporaryLoading from '../../components/state/TemporaryLoading'
import TemporaryError from '../../components/state/TemporaryError'
import Separator from '../../components/Separator'

const FakultasScreen = (
  { navigation, route }: FakultasNavigatorScreenProps<"Fakultass">
) => {

  const { data, loading, error } = useQuery<{
    fakultas: Fakultas[]
  }>(getFakultas)

  const [remove] = useMutation<any, MutationDeleteFakultasArgs>(deleteFakultas, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          fakultas(existingFakultas = [], { readField }) {
            return existingFakultas.filter((fakultas: Fakultas) =>
              readField('id', fakultas) !== data.deleteFakultas.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: Fakultas) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteFakultas: {
            __typename: "Fakultas",
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
          data={data?.fakultas}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 16 }}
          ListHeaderComponent={
            <View>
              <Text style={baseStyles.secondaryTitle}>Daftar Fakultas</Text>
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
                onPress={() => navigation.navigate('DetailsFakultass', { id: item.id })}
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

export default FakultasScreen

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
