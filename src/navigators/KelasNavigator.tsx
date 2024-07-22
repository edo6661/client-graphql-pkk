import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { KelasNavigatorParamList } from '../types/adminNavigator.type'
import KelasScreen from '../screens/admin/KelasScreen'
import DetailsKelasScreen from '../screens/admin/DetailsKelasScreen'

const stack = createStackNavigator<KelasNavigatorParamList>()

const KelasNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name='Kelass'
        component={KelasScreen}
      />
      <stack.Screen
        name='DetailsKelass'
        component={DetailsKelasScreen}
      />
    </stack.Navigator>
  )
}

export default KelasNavigator

const styles = StyleSheet.create({})