import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AdminScreen from '../screens/admin/AdminScreen'
import { AdminNavigatorParamList } from '../types/adminNavigator.type'
import DetailsAdminScreen from '../screens/admin/DetailsAdminScreen'

const AdminStack = createStackNavigator<AdminNavigatorParamList>()
const AdminNavigator = () => {
  return (
    <AdminStack.Navigator
      initialRouteName='Admins'
    >
      <AdminStack.Screen
        name='Admins'
        component={AdminScreen}
      />
      <AdminStack.Screen
        name='DetailsAdmin'
        component={DetailsAdminScreen}
      />
    </AdminStack.Navigator>
  )
}

export default AdminNavigator

const styles = StyleSheet.create({})