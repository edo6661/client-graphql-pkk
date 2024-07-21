import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getProgramStudis } from '../../api/query/programStudi.query'
import { useMutation, useQuery } from '@apollo/client'
import { baseStyles } from '../../styles'
import { ProgramStudiNavigatorScreenProps } from '../../types/adminNavigator.type'
import { MutationDeleteProgramStudiArgs, ProgramStudi } from '../../__generated__/graphql'
import ModalClose from '../../components/ModalClose'
import { deleteProgramStudi } from '../../api/mutation/programStudi.mutation'

const ProgramStudiScreen = (
  { navigation }: ProgramStudiNavigatorScreenProps<"ProgramStudis">
) => {
  const { data, loading, error, } = useQuery<{
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

        data={data?.programStudis}
        contentContainerStyle={{
          gap: 4
        }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsProgramStudis', { id: item.id })}
            >
              <Text>{
                item.name
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

export default ProgramStudiScreen

const styles = StyleSheet.create({})