import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from '../screens/HomeScreen'
import AuthScreen from '../screens/AuthScreen'
import { BottomTabParamList } from '../types/navigator.type'
import BauScreen from '../screens/BauScreen'


const Tab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='home' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Auth'
        component={AuthScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='sign-in' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Bau'
        component={BauScreen}
        options={{
          headerShown: false,

        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})