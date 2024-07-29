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
import Proyeks from '../components/user/Proyeks'
import ProyeksScreen from '../screens/user/ProyeksScreen'
import UserProyekNavigator from '../navigators/user/UserProyekNavigator'
import MahasiswaKelompok from '../screens/user/UserKelompokScreen'
import ProfileScreen from '../screens/user/ProfileScreen'
import YourProyekNavigator from '../navigators/user/YourProyekNavigator'
import UserKelompokNavigator from '../navigators/user/UserKelompokNavigator'


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
        name='UserProyekNavigator'
        component={UserProyekNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='list' size={size} color={color} />,
          headerShown: false,
          title: 'Proyek'
        }}
      />
      {user && (
        <>
          {(user.mahasiswa) && (
            <Tab.Screen
              name='UserKelompokNavigator'
              component={UserKelompokNavigator}
              options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name='group' size={size} color={color} />,
                headerShown: false,
                title: 'Kelompok'
              }}
            />
          )}
          {(user.mahasiswa?.proyekId || user.dosen?.proyekId) && (
            <Tab.Screen
              name='YourProyekNavigator'
              component={YourProyekNavigator}
              options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name='list' size={size} color={color} />,
                title: 'Proyek Saya'
              }}
            />
          )}
          <Tab.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => <Icon name='user' size={size} color={color} />,
            }}
          />
        </>
      )}


    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})