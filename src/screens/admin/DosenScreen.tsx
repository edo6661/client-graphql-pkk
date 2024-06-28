import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AdminStackScreenProps } from '../../types/adminNavigator.type'

const DosenScreen = (
  { navigation }: AdminStackScreenProps<'Dosen'>
) => {
  return (
    <View>
      <Text>DosenScreen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  )
}

export default DosenScreen

const styles = StyleSheet.create({})