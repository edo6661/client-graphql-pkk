import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Proyeks from '../../components/user/Proyeks'
import { ProyeksScreenProps } from '../../types/navigator.type'

const ProyeksScreen = (
  { navigation }: ProyeksScreenProps
) => {
  return (
    <View style={{ flex: 1 }}>
      <Proyeks
        navigation={navigation}
      />
    </View>
  )
}

export default ProyeksScreen

const styles = StyleSheet.create({})