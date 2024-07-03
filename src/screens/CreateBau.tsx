import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { getBau, getBaus } from '../api/query/baus.query'
import { Bau, MutationCreateBauArgs } from '../__generated__/graphql'
import { createBau } from '../api/mutation/bau.mutation'

const CreateBau = (
  { navigation, route }: any
) => {
  const [name, setName] = useState("")
  const [create, {
    data: createData,
    loading: createLoading,
    error: createError
  }] = useMutation<{
    createBau: Bau
  }, MutationCreateBauArgs>(createBau, {

    update(cache, { data }) {
      if (!data || !data.createBau) return console.error('Data createBau not found')

      cache.modify({
        fields: {
          baus(existingBaus = []) {
            const newBau = cache.writeFragment({
              data: data.createBau,
              fragment: gql`
                fragment NewBau on Bau {
                  ...BauFields
                }
              `
            })
            if (!newBau) return console.error('New Bau not found')
            return [...existingBaus, newBau]
          }
        },
        optimistic: true
      })
    }
  })

  const onSubmit = async () => {
    create({
      variables: {
        name
      },
      optimisticResponse: {
        createBau: {
          __typename: 'Bau',
          id: 'tempId',
          name: name
        }
      },
    })
    setName("");
    navigation.navigate('Home')
  }

  return (
    <View>
      {createLoading && <Text>Creating Bau...</Text>}
      {createError && <Text>Error: {createError.message}</Text>}
      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={setName} // Use onChangeText instead of onChange for TextInput
      />
      <TouchableOpacity
        onPress={onSubmit}
      >
        <Text>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateBau

const styles = StyleSheet.create({})
