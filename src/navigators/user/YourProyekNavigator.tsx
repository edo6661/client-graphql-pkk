import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MahasiswaProyekNavigatorParamList } from '../../types/navigator.type'
import MahasiswaProyekScreen from '../../screens/user/YourProyekScreen'
import { useQuery } from '@apollo/client'
import { getProyek } from '../../api/query/proyek.query'
import { useAuthContext } from '../../contexts/AuthContext'
import LaporanProyekNavigator from './LaporanProyekNavigator'
import KelompokProyekScreen from '../../screens/user/KelompokProyekScreen'

const stack = createStackNavigator<MahasiswaProyekNavigatorParamList>()

const YourProyekNavigator = () => {
  return (
    <stack.Navigator

    >
      <stack.Screen
        name='MahasiswaProyek'
        component={MahasiswaProyekScreen}
      />
      <stack.Screen
        name='KelompokProyek'
        component={KelompokProyekScreen}
      />
      <stack.Screen
        name='LaporanProyekNavigator'
        component={LaporanProyekNavigator}
        options={{
          headerShown: false
        }}
      />

    </stack.Navigator>
  )
}

export default YourProyekNavigator

const styles = StyleSheet.create({})