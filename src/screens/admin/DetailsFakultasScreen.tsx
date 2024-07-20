import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FakultasNavigatorScreenProps } from '../../types/adminNavigator.type'

const DetailsFakultasScreen = (
  { route, navigation }: FakultasNavigatorScreenProps<'DetailsFakultas'>
) => {
  return (
    <View>
      <Text>DetailsFakultasScreen {route.params?.id}</Text>
    </View>
  )
}

export default DetailsFakultasScreen

const styles = StyleSheet.create({})