import { StyleSheet, } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../types/navigator.type'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuthContext } from '../contexts/AuthContext'
import BottomTabs from '../tabs/BottomTabs'
import AdminStackScreen from '../screens/admin/AdminStackScreen'


const Stack = createStackNavigator<RootStackParamList>()
const Navigators = () => {
  const { user } = useAuthContext();
  const conditionalTabs = {
    ADMIN: AdminStackScreen,
    MAHASISWA: BottomTabs,
    DOSEN: BottomTabs,
  }
  return (
    <Stack.Navigator
      initialRouteName='BottomTab'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='BottomTab'
        component={
          user ? conditionalTabs[user.role] : BottomTabs
        }
      />
    </Stack.Navigator>
  )
}

export default Navigators

const styles = StyleSheet.create({})