import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getKonsentrasis } from '../../api/query/konsentrasi.query'
import { useQuery } from '@apollo/client'

const KonsentrasiScreen = () => {
  const { data, loading, error, } = useQuery(getKonsentrasis)
  console.log(error)
  return (
    <View>
      <Text>KonsentrasiScreen</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error </Text>}
      <Text>
        {JSON.stringify(data)}

      </Text>
    </View>
  )
}

export default KonsentrasiScreen

const styles = StyleSheet.create({})