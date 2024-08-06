import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabParamList } from '../types/navigator.type'
const ButtonProfile = () => {
  const navigation = useNavigation<
    NavigationProp<BottomTabParamList>
  >()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      style={{
        padding: 12
      }}
    >
      <Icon
        name='user'
        size={26}
        color='black'
      />
    </TouchableOpacity>
  )
}

export default ButtonProfile

const styles = StyleSheet.create({})