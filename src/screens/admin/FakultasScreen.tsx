import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getFakultas } from '../../api/query/fakultas.query'
import { useQuery } from '@apollo/client'

const FakultasScreen = () => {

  const { data, loading, error, } = useQuery(getFakultas)

  console.log(error)

  return (
    <View>
      <Text>FakultasScreen</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error </Text>}
      <Text>
        {JSON.stringify(data)}
      </Text>
    </View>
  )
}

export default FakultasScreen

const styles = StyleSheet.create({})