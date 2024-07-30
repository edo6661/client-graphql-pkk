import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MahasiswaProyekLaporanNavigatorParamList } from '../../types/navigator.type'
import LaporanProyekScreen from '../../screens/user/LaporanProyekScreen'
import CreateLaporanProyekScreen from '../../screens/user/CreateLaporanProyekScreen'
import DetailsLaporanProyekScreen from '../../screens/user/DetailsLaporanProyekScreen'
const stack = createStackNavigator<MahasiswaProyekLaporanNavigatorParamList>()
const LaporanProyekNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name='LaporanProyek'
        component={LaporanProyekScreen}
      />
      <stack.Screen
        name='CreateLaporanProyek'
        component={CreateLaporanProyekScreen}
      />
      <stack.Screen
        name='DetailsLaporanProyek'
        component={DetailsLaporanProyekScreen}
      />
    </stack.Navigator>
  )
}

export default LaporanProyekNavigator

const styles = StyleSheet.create({})