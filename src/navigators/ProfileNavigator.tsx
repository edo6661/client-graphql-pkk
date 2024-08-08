import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileOptionsScreen from '../screens/ProfileOptionsScreen'
import ProfileScreen from '../screens/user/ProfileScreen'
import { ProfileOptionsNavigatorParamList } from '../types/navigator.type'

const stack = createStackNavigator<ProfileOptionsNavigatorParamList>()

const ProfileNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <stack.Screen
        name='ProfileOptions'
        component={ProfileOptionsScreen}
      />
      <stack.Screen
        name='EditProfile'
        component={ProfileScreen}
      />
    </stack.Navigator>
  )
}

export default ProfileNavigator

const styles = StyleSheet.create({})