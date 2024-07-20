import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { KonsentrasiNavigatorParamList } from '../types/adminNavigator.type'
import KonsentrasiScreen from '../screens/admin/KonsentrasiScreen'
import KonsentrasiDetailsScreen from '../screens/admin/KonsentrasiDetailsScreen'

const KonsentrasiStack = createStackNavigator<KonsentrasiNavigatorParamList>()

const KonsentrasiNavigator = () => {
  return (
    <KonsentrasiStack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <KonsentrasiStack.Screen
        name='Konsentrasis'
        component={KonsentrasiScreen}
      />
      <KonsentrasiStack.Screen
        name='DetailsKonsentrasis'
        component={KonsentrasiDetailsScreen}
      />
    </KonsentrasiStack.Navigator>
  )
}

export default KonsentrasiNavigator

const styles = StyleSheet.create({})