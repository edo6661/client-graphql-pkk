import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProyeksScreen from '../../screens/user/ProyeksScreen'
import { UserProyekNavigatorParamList } from '../../types/navigator.type'
import UserDetailsProyekScreen from '../../screens/user/UserDetailsProyekScreen'

const stack = createStackNavigator<UserProyekNavigatorParamList>()

const UserProyekNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        title: 'Proyek',
      }}
    >
      <stack.Screen
        name='UserProyek'
        component={ProyeksScreen}
      />
      <stack.Screen
        name='UserDetailsProyek'
        component={UserDetailsProyekScreen}
      />
    </stack.Navigator>
  )
}

export default UserProyekNavigator

const styles = StyleSheet.create({})