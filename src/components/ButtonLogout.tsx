import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabParamList } from '../types/navigator.type'
import { useAuthContext } from '../contexts/AuthContext'
const ButtonLogout = () => {
  const { logout } = useAuthContext()
  const navigation = useNavigation<
    NavigationProp<BottomTabParamList>
  >()
  return (
    <TouchableOpacity
      onPress={logout}
      style={{
        padding: 12
      }}
    >
      <Icon
        name='logout'
        size={26}
        color='black'
      />
    </TouchableOpacity>
  )
}

export default ButtonLogout

const styles = StyleSheet.create({})