import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DosenNavigatorParamList, DosenNavigatorScreenProps } from '../types/adminNavigator.type'
import DosenScreen from '../screens/admin/DosenScreen'
import DetailsDosenScreen from '../screens/admin/DetailsDosenScreen'

const DosenStack = createStackNavigator<DosenNavigatorParamList>()
const DosenNavigator = () => {
  return (
    <DosenStack.Navigator>
      <DosenStack.Screen
        name='Dosens'
        component={DosenScreen}
        options={{
          headerShown: false
        }}
      />
      <DosenStack.Screen
        name='DetailsDosens'
        component={DetailsDosenScreen}
      />
    </DosenStack.Navigator>
  )
}

export default DosenNavigator