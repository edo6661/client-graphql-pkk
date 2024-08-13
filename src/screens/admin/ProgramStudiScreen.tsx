import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getProgramStudis } from '../../api/query/programStudi.query'
import { useMutation, useQuery } from '@apollo/client'
import { baseStyles } from '../../styles'
import { ProgramStudiNavigatorScreenProps } from '../../types/adminNavigator.type'
import { MutationDeleteProgramStudiArgs, ProgramStudi } from '../../__generated__/graphql'
import ModalClose from '../../components/ModalClose'
import { deleteProgramStudi } from '../../api/mutation/programStudi.mutation'
import { COLORS } from '../../constants/colors'
import TemporaryLoading from '../../components/state/TemporaryLoading'
import TemporaryError from '../../components/state/TemporaryError'
import Separator from '../../components/Separator'

const ProgramStudiScreen = (
  { navigation }: ProgramStudiNavigatorScreenProps<"ProgramStudis">
) => {
  const { data, loading, error } = useQuery<{
    programStudis: ProgramStudi[]
  }>(getProgramStudis)

  const [remove] = useMutation<any, MutationDeleteProgramStudiArgs>(deleteProgramStudi, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          programStudis(existingProgramStudis = [], { readField }) {
            return existingProgramStudis.filter((programStudi: ProgramStudi) =>
              readField('id', programStudi) !== data.deleteProgramStudi.id
            )
          }
        }
      })
    }
  })

  const onRemove = async (item: ProgramStudi) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteProgramStudi: {
            __typename: "ProgramStudi",
            id: item.id,
            name: item.name,
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
          data={data?.programStudis}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 16 }}
          ListHeaderComponent={
            <View>
              <Text style={baseStyles.secondaryTitle}>Daftar Program Studi</Text>
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
                onPress={() => navigation.navigate('DetailsProgramStudis', { id: item.id })}
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

export default ProgramStudiScreen

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
