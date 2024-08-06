import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { baseStyles } from '../../styles'

const TemporaryLoading = () => {
  return (
    <Text
      style={baseStyles.errorText}
    >TemporaryLoading...</Text>
  )
}

export default TemporaryLoading

const styles = StyleSheet.create({})