import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProgramStudiNavigatorParamList } from '../types/adminNavigator.type'
import ProgramStudiScreen from '../screens/admin/ProgramStudiScreen'
import DetailsProgramStudiScreen from '../screens/admin/DetailsProgramStudiScreen'


const ProgramStudiStack = createStackNavigator<ProgramStudiNavigatorParamList>()

const ProgramStudiNavigator = () => {
  return (
    <ProgramStudiStack.Navigator>
      <ProgramStudiStack.Screen name='ProgramStudis' component={ProgramStudiScreen} />
      <ProgramStudiStack.Screen name='DetailsProgramStudis' component={DetailsProgramStudiScreen} />
    </ProgramStudiStack.Navigator>
  )
}

export default ProgramStudiNavigator

const styles = StyleSheet.create({})