import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { signIn } from '../api/mutation/auth.mutation'
import TemporaryLoading from '../components/state/TemporaryLoading'
import TemporaryError from '../components/state/TemporaryError'
import { storeUser } from '../lib/async-storage'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenProps, LoginScreenProps } from '../types/navigator.type'
import { useAuthContext } from '../contexts/AuthContext'
import { COLORS } from '../constants/colors'
import { baseStyles } from '../styles'
import Toast from 'react-native-toast-message'

const AuthScreen = (
  { navigation }: LoginScreenProps
) => {
  const { storeUser } = useAuthContext();

  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [login, { loading, error, data: res }] = useMutation(signIn, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found')
      if (!data.signIn) return console.error('Data signIn not found')
      storeUser(data.signIn)
      console.log(data.signIn)

    }
  })

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
          },
        }
      })
      // storeUser(res.data.signIn);
      Toast.show({
        type: 'success',
        text1: 'Login Success',
        text2: 'Welcome'
      })
      if (res.data.signIn.role === "ADMIN") {
        // @ts-expect-error
        return navigation.navigate('Dashboard')
      }
      // @ts-expect-error
      navigation.navigate('Home')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View
      style={baseStyles.centerContainer}
    >

      <View
        style={
          [
            baseStyles.innerCenterContainer,
            {
              gap: 12,
              paddingVertical: 20,
            }
          ]
        }
      >
        {
          loading && (
            <ActivityIndicator
              size='large'
              color={COLORS.primaryBlue}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
              }}
            />
          )
        }
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center'
          }}
          resizeMode='contain'
        />
        <TextInput
          style={baseStyles.primaryInput}
          placeholder='Username'
          onChange={(e) => {
            onChange('username', e.nativeEvent.text)
          }}
          placeholderTextColor={COLORS.black}
        />
        <TextInput placeholder='Password'
          onChange={(e) => {
            onChange('password', e.nativeEvent.text)
          }}
          secureTextEntry={true}
          style={baseStyles.primaryInput}
          placeholderTextColor={COLORS.black}

        />
        <TouchableOpacity
          onPress={() =>
            // @ts-expect-error
            navigation.navigate('Register')
          }
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 4,
          }}
        >
          <Text
            style={{
              color: COLORS.primaryBlue,
              fontWeight: '400'
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit}
          style={[
            baseStyles.primaryButton,
            !form.username || !form.password || loading ? {
              backgroundColor: COLORS.grey,
            } : {
              backgroundColor: COLORS.primaryBlue,
            }
          ]}
          disabled={
            !form.username || !form.password || loading
          }

        >
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              fontSize: 16,
            }}
          >Submit</Text>
        </TouchableOpacity>
        {error && <TemporaryError err={error} />}

      </View>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})