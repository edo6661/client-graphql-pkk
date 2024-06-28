import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BauScreenProps } from '../types/navigator.type'
import { useMutation, useQuery } from '@apollo/client'
import { getBau } from '../api/query/baus.query'
import { updateBau } from '../api/mutation/bau.mutation'

const BauScreen = (
  { navigation, route }: BauScreenProps
) => {
  const { data, loading, error } = useQuery(getBau, {
    variables: {
      bauId: route.params.id
    }
  })
  const [update, {
    data: updateData,
    loading: updateLoading,
    error: updateError
  }] = useMutation(updateBau)
  const [name, setName] = useState(data.bau.name)
  const onEdit = async () => {
    try {
      console.log("data", route.params.id, name)
      const res = await update({
        variables: {
          updateBauId: route.params.id,
          name
        }
      })
      console.log("res", res.data)

      navigation.navigate('Home')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <View>
      <Text>BauScreen
        {route.params.id}
      </Text>
      {loading && <Text>loading...</Text>}
      {error && <Text>{error.message}</Text>}
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