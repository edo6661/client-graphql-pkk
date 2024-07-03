import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getProgramStudis } from '../../api/query/programStudi.query'
import { useQuery } from '@apollo/client'

const ProgramStudiScreen = () => {
  const { data, loading, error, } = useQuery(getProgramStudis)
  console.log(error)
  return (
    <View>
      <Text>ProgramStudiScreen</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error </Text>}
      <Text>
        {JSON.stringify(data)}
      </Text>
    </View>
  )
}

export default ProgramStudiScreen

const styles = StyleSheet.create({})