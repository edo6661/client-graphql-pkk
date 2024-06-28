import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardScreen from '../screens/admin/DashboardScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AdminBottomTabParamList } from '../types/adminNavigator.type'
import DosenScreen from '../screens/admin/DosenScreen'
import MahasiswaScreen from '../screens/admin/MahasiswaScreen'
import FakultasScreen from '../screens/admin/FakultasScreen'
import KonsentrasiScreen from '../screens/admin/KonsentrasiScreen'
import ProgramStudiScreen from '../screens/admin/ProgramStudiScreen'
import PendaftaranScreen from '../screens/admin/PendaftaranScreen'
import PersyaratanScreen from '../screens/admin/PersyaratanScreen'
import AdminScreen from '../screens/admin/AdminScreen'
import ProyekScreen from '../screens/admin/ProyekScreen'

const Tab = createBottomTabNavigator<AdminBottomTabParamList>()

const AdminBottomTabs = () => {
  return (
    <Tab.Navigator>
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

    </Tab.Navigator>
  )
}

export default AdminBottomTabs

const styles = StyleSheet.create({})