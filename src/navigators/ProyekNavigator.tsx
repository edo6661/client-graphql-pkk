import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProyekNavigatorParamList } from '../types/adminNavigator.type'
import { createStackNavigator } from '@react-navigation/stack'
import ProyekScreen from '../screens/admin/ProyekScreen'
import DetailsProyekScreen from '../screens/admin/DetailsProyekScreen'

const stack = createStackNavigator<ProyekNavigatorParamList>()

const ProyekNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Proyeks" component={ProyekScreen} />
      <stack.Screen name='DetailsProyeks' component={DetailsProyekScreen} />
    </stack.Navigator>
  )
}

export default ProyekNavigator

const styles = StyleSheet.create({})