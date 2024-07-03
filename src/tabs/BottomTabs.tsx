import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from '../screens/HomeScreen'
import AuthScreen from '../screens/AuthScreen'
import { BottomTabParamList } from '../types/navigator.type'
import BauScreen from '../screens/BauScreen'
import { useAuthContext } from '../contexts/AuthContext'
import HomeAdminScreen from '../screens/HomeAdminScreen'
import DashboardScreen from '../screens/admin/DashboardScreen'
import CreateBau from '../screens/CreateBau'


const Tab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabs = () => {
  const { user } = useAuthContext()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={user?.role === "ADMIN" ? HomeAdminScreen : HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='home' size={size} color={color} />,
        }}
      />
      {!user && (
        <Tab.Screen
          name='Auth'
          component={AuthScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => <Icon name='sign-in' size={size} color={color} />,
          }}
        />
      )}
      <Tab.Screen
        name='Bau'
        component={BauScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CreateBau"
        component={CreateBau}
        options={{
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})