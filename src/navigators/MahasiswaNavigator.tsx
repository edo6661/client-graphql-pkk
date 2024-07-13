import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MahasiswaNavigatorParamList } from '../types/adminNavigator.type'
import MahasiswaScreen from '../screens/admin/MahasiswaScreen';
import DetailsMahasiswaScreen from '../screens/admin/DetailsMahasiswaScreen';

const MahasiswaStack = createStackNavigator<MahasiswaNavigatorParamList>();

const MahasiswaNavigator = () => {
  return (
    <MahasiswaStack.Navigator>
      <MahasiswaStack.Screen name="Mahasiswas" component={MahasiswaScreen} />
      <MahasiswaStack.Screen name="DetailsMahasiswas" component={DetailsMahasiswaScreen} />
    </MahasiswaStack.Navigator>
  )
}

export default MahasiswaNavigator

const styles = StyleSheet.create({})