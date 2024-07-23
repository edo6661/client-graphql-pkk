import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PersyaratanNavigatorParamList } from '../types/adminNavigator.type'
import DetailsPersyaratanScreen from '../screens/admin/DetailsPersyaratanScreen'
import PersyaratanScreen from '../screens/admin/PersyaratanScreen'

const stack = createStackNavigator<PersyaratanNavigatorParamList>()

const PersyaratanNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Persyaratans" component={PersyaratanScreen} />
      <stack.Screen name="DetailsPersyaratans" component={DetailsPersyaratanScreen} />
    </stack.Navigator>
  )
}

export default PersyaratanNavigator

const styles = StyleSheet.create({})