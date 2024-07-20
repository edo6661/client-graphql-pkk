import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FakultasNavigatorParamList } from '../types/adminNavigator.type'
import FakultasScreen from '../screens/admin/FakultasScreen'
import DetailsFakultasScreen from '../screens/admin/DetailsFakultasScreen'

const FakultasStack = createStackNavigator<FakultasNavigatorParamList>()

const FakultasNavigator = () => {
  return (
    <FakultasStack.Navigator>
      <FakultasStack.Screen name='Fakultas' component={FakultasScreen} />
      <FakultasStack.Screen name='DetailsFakultas' component={DetailsFakultasScreen} />
    </FakultasStack.Navigator>
  )
}

export default FakultasNavigator

const styles = StyleSheet.create({})