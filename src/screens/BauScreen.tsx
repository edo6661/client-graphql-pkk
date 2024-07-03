import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BauScreenProps } from '../types/navigator.type'
import { gql, useMutation, useQuery } from '@apollo/client'
import { getBau } from '../api/query/baus.query'
import { useApolloClient } from '@apollo/client'
import { Bau } from '../__generated__/graphql'
import { updateBau } from '../api/mutation/bau.mutation'


const BauScreen = (
  { navigation, route }: BauScreenProps
) => {
  const client = useApolloClient()
  const data = client.readFragment<Bau>({
    id: `Bau:${route.params.id}`,
    fragment: gql`
      fragment BauDetail on Bau {
        ...BauFields
      }
    `,
  })
  const [update, {
    data: updateData,
    loading: updateLoading,
    error: updateError
  }] = useMutation(updateBau, {
    update(cache, { data }) {
      if (!data || !data.updateBau) return console.error('Data updateBau not found')
      cache.modify({
        fields: {
          baus(existingBaus = [], { readField }) {
            return existingBaus.map((bau: Bau) => {
              if (readField('id', bau) === data.updateBau.id) {
                return {
                  ...bau,
                  ...data.updateBau
                }
              } else {
                return bau
              }
            })
          }
        }
      })


    }
  })
  const [name, setName] = useState(data?.name)
  const onEdit = () => {
    console.log("data", route.params.id, name)
    const res = update({
      variables: {
        updateBauId: route.params.id,
        name
      },
      optimisticResponse: {
        updateBau: {
          __typename: 'Bau',
          id: route.params.id,
          name: name
        }
      }
    })

    navigation.navigate('Home')
  }
  useEffect(() => {
    setName(data?.name)

  }, [data?.name])
  return (
    <View>
      <Text>BauScreen
        {route.params.id}
      </Text>
      {updateLoading && <Text>update loading...</Text>}
      {updateError && <Text>update error: {updateError.message}</Text>}
      <TextInput
        value={name}
        onChange={(e) => setName(e.nativeEvent.text)}
      />
      <TouchableOpacity
        onPress={onEdit}
      >
        <Text>
          Edit
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BauScreen

const styles = StyleSheet.create({})