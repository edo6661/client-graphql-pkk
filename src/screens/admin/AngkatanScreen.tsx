import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getAngkatans } from '../../api/query/angkatan.query'
import { Angkatan, MutationDeleteAngkatanArgs } from '../../__generated__/graphql'
import { baseStyles } from '../../styles'
import { AngkatanNavigatorScreenProps } from '../../types/adminNavigator.type'
import ModalClose from '../../components/ModalClose'
import { deleteAngkatan } from '../../api/mutation/angkatan.mutation'
import { COLORS } from '../../constants/colors'
import TemporaryError from '../../components/state/TemporaryError'
import Separator from '../../components/Separator'

const AngkatanScreen = ({ navigation }: AngkatanNavigatorScreenProps<"Angkatans">) => {
  const { data, loading, error } = useQuery<{
    angkatans: Angkatan[]
  }>(getAngkatans)

  const [remove] = useMutation<any, MutationDeleteAngkatanArgs>(deleteAngkatan, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          angkatans(existingAngkatans = [], { readField }) {
            return existingAngkatans.filter((angkatan: Angkatan) =>
              readField('id', angkatan) !== data.deleteAngkatan.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: Angkatan) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteAngkatan: {
            __typename: "Angkatan",
            id: item.id,
            tahun: item.tahun,
            createdAt: item.createdAt,
            updatedAt: new Date(),
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
          data={data?.angkatans}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 16 }}
          ListHeaderComponent={
            <View>
              <Text style={baseStyles.secondaryTitle}>Daftar Angkatan</Text>
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
                onPress={() => navigation.navigate('DetailsAngkatans', { id: item.id })}
              >
                <Text style={styles.itemText}>{item.tahun}</Text>
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

export default AngkatanScreen

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
