import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getAdmins } from '../../api/query/admin.query'
import { useQuery } from '@apollo/client'

const AdminScreen = () => {
  const { data, loading, error, } = useQuery(getAdmins)
  console.log(error)
  return (
    <View>
      <Text>AdminScreen</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error </Text>}
      <Text>
        {JSON.stringify(data)}
      </Text>
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})