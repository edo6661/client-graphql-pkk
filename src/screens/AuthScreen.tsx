import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { signIn } from '../api/mutation/auth.mutation'
import TemporaryLoading from '../components/state/TemporaryLoading'
import TemporaryError from '../components/state/TemporaryError'
import { storeUser } from '../lib/async-storage'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenProps } from '../types/navigator.type'
import { useAuthContext } from '../contexts/AuthContext'

const AuthScreen = (
  { navigation }: AuthScreenProps
) => {
  const { storeUser } = useAuthContext();

  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [login, { loading, error, data: res }] = useMutation(signIn)

  const onChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  const onSubmit = async () => {
    try {
      const res = await login({
        variables: {
          signInInput: {
            ...form
          }
        }
      })
      Alert.alert('success', JSON.stringify(res.data.signIn))
      storeUser(res.data.signIn);
      if (res.data.signIn.role === "ADMIN") {
        return navigation.navigate('Dashboard')
      }
      navigation.navigate('Home')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View>
      <TextInput placeholder='username'
        onChange={(e) => {
          onChange('username', e.nativeEvent.text)
        }}
      />
      <TextInput placeholder='password'
        onChange={(e) => {
          onChange('password', e.nativeEvent.text)
        }}
        secureTextEntry={true}
      />
      {loading && <TemporaryLoading />}
      {error && <TemporaryError err={error} />}
      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})