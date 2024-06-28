import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { SIGN_IN } from '../api/mutation/auth.mutation'
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
  const [signUp, { loading, error, data: res }] = useMutation(SIGN_IN)

  const onChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  const onSubmit = async () => {
    try {
      const res = await signUp({
        variables: {
          signInInput: {
            ...form
          }
        }
      })
      Alert.alert('success', JSON.stringify(res.data.signIn))
      storeUser(res.data.signIn);
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