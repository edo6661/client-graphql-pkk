import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ApolloError } from '@apollo/client'
import { baseStyles } from '../../styles'

const TemporaryError = (
  { err }: {
    err: ApolloError | undefined
  }
) => {
  return (
    <Text
      style={baseStyles.errorText}
    >
      {err?.message}
    </Text>
  )
}

export default TemporaryError
