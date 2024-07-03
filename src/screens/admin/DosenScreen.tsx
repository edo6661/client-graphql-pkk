import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AdminStackScreenProps } from '../../types/adminNavigator.type'
import { useQuery } from '@apollo/client'
import { getDosen } from '../../api/query/dosen.query'
import { Dosen } from '../../__generated__/graphql'

const DosenScreen = (
  { navigation }: AdminStackScreenProps<'Dosen'>
) => {

  const { data, loading } = useQuery<{
    dosens: Array<Dosen>
  }>(getDosen)

  return (
    <View>
      <Text>DosenScreen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
      {loading && <Text>Loading...</Text>}
      <Text>
        {JSON.stringify(data)}

      </Text>
    </View>
  )
}

export default DosenScreen

const styles = StyleSheet.create({})