import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabParamList } from '../types/navigator.type'
import { useAuthContext } from '../contexts/AuthContext'
const ButtonProfile = () => {
  const navigation = useNavigation<
    NavigationProp<BottomTabParamList>
  >()
  const { user } = useAuthContext()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      style={{
        padding: 12
      }}
    >
      <Image
        source={{ uri: user?.profilePhoto }}
        style={{
          width: 42,
          height: 42,
          borderRadius: 21
        }}
      />
    </TouchableOpacity>
  )
}

export default ButtonProfile

const styles = StyleSheet.create({})