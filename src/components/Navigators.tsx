import { StyleSheet, } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../types/navigator.type'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuthContext } from '../contexts/AuthContext'
import BottomTabs from '../tabs/BottomTabs'
import AdminStackScreen from '../screens/admin/AdminStackScreen'
import ProfileNavigator from '../navigators/ProfileNavigator'
import ButtonProfile from './ButtonProfile'
import ButtonLogout from './ButtonLogout'


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
    >

      <Stack.Screen
        name='BottomTab'
        component={
          user ? conditionalTabs[user.role] : BottomTabs
        }
        options={{
          headerShown: false
        }}
      />
      {user && (
        <Stack.Screen
          name='Profile'
          component={ProfileNavigator}
          options={{
            headerRight: () => (
              <>
                {user && (
                  <ButtonLogout />
                )}

              </>
            )
          }}
        />
      )}
    </Stack.Navigator>
  )
}

export default Navigators

const styles = StyleSheet.create({})