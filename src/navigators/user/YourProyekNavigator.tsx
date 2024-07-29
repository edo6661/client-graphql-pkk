import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MahasiswaProyekNavigatorParamList } from '../../types/navigator.type'
import MahasiswaProyekScreen from '../../screens/user/YourProyekScreen'

const stack = createStackNavigator<MahasiswaProyekNavigatorParamList>()

const YourProyekNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        title: 'Your Proyek',
      }}
    >
      <stack.Screen
        name='MahasiswaProyek'
        component={MahasiswaProyekScreen}
      />
    </stack.Navigator>
  )
}

export default YourProyekNavigator

const styles = StyleSheet.create({})