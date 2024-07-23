import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KelompokNavigatorParamList } from '../types/adminNavigator.type'
import { createStackNavigator } from '@react-navigation/stack'
import KelompokScreen from '../screens/admin/KelompokScreen'
import DetailsKelompokScreen from '../screens/admin/DetailsKelompokScreen'
const stack = createStackNavigator<KelompokNavigatorParamList>()
const KelompokNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Kelompoks" component={KelompokScreen} />
      <stack.Screen name='DetailsKelompoks' component={DetailsKelompokScreen} />
    </stack.Navigator>

  )
}

export default KelompokNavigator

const styles = StyleSheet.create({})