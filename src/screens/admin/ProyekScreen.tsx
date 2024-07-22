import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client'
import { getProyeks } from '../../api/query/proyek.query'

const ProyekScreen = () => {
  const { data, loading, error, } = useQuery(getProyeks)
  console.log(data)
  return (
    <View>
      <Text>ProyekScreen</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error </Text>}
      <Text>
        {JSON.stringify(data)}
      </Text>
    </View>
  )
}

export default ProyekScreen

const styles = StyleSheet.create({})