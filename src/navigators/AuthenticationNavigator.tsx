import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticationNavigatorParamList } from '../types/navigator.type'
import AuthScreen from '../screens/AuthScreen'
import RegisterScreen from '../screens/RegisterScreen'

const stack = createStackNavigator<AuthenticationNavigatorParamList>()
const AuthenticationNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <stack.Screen
        name='Login'
        component={AuthScreen}
      />
      <stack.Screen
        name='Register'
        component={RegisterScreen}
      />

    </stack.Navigator>
  )
}

export default AuthenticationNavigator

const styles = StyleSheet.create({})