import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardScreen from '../screens/admin/DashboardScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { AdminBottomTabParamList } from '../types/adminNavigator.type'
import CreateScreen from '../screens/admin/CreateScreen'
import { useAuthContext } from '../contexts/AuthContext'
import ButtonProfile from '../components/ButtonProfile'


const Tab = createBottomTabNavigator<AdminBottomTabParamList>()

const AdminBottomTabs = () => {
  const { user } = useAuthContext()
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <>
            {user && (
              <ButtonProfile />
            )}
          </>
        )
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon
            name='dashboard'
            size={size}
            color={color}
          />
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <MaterialIcon
            name='create-new-folder'
            size={size}
            color={color}
          />
        }}
      />

    </Tab.Navigator>
  )
}

export default AdminBottomTabs

const styles = StyleSheet.create({})