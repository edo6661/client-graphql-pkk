import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Proyeks from '../../components/user/Proyeks'
import { ProyeksScreenProps } from '../../types/navigator.type'
import { baseStyles } from '../../styles'
import { COLORS } from '../../constants/colors'

const ProyeksScreen = (
  { navigation }: ProyeksScreenProps
) => {
  return (
    <View style={
      baseStyles.centerContainer
    }>

      <Proyeks
        navigation={navigation}
      />
    </View>
  )
}

export default ProyeksScreen

const styles = StyleSheet.create({})