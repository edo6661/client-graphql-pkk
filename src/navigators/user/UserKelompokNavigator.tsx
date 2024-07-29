import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { UserKelompokNavigatorParamList } from '../../types/navigator.type'
import UserKelompokScreen from '../../screens/user/UserKelompokScreen'

const stack = createStackNavigator<UserKelompokNavigatorParamList>()
const UserKelompokNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        title: 'Kelompok',
      }}
    >
      <stack.Screen
        name='UserKelompok'
        component={UserKelompokScreen}
      />
      <stack.Screen
        name='DetailsUserKelompok'
        component={UserKelompokScreen}
      />
    </stack.Navigator>
  )
}

export default UserKelompokNavigator

const styles = StyleSheet.create({})