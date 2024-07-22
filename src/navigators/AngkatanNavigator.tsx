import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AngkatanNavigatorParamList } from '../types/adminNavigator.type'
import DetailsAngkatanScreen from '../screens/admin/DetailsAngkatanScreen'
import AngkatanScreen from '../screens/admin/AngkatanScreen'

const AngkatanStack = createStackNavigator<AngkatanNavigatorParamList>()

const AngkatanNavigator = () => {
  return (
    <AngkatanStack.Navigator>
      <AngkatanStack.Screen name="Angkatans" component={AngkatanScreen} />
      <AngkatanStack.Screen name='DetailsAngkatans' component={DetailsAngkatanScreen} />
    </AngkatanStack.Navigator>
  )
}

export default AngkatanNavigator

const styles = StyleSheet.create({})