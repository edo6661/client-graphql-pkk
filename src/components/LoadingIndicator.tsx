import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
interface LoadingIndicatorProps {
  loading: boolean
}
const LoadingIndicator = (
  { loading }: LoadingIndicatorProps
) => {
  return loading && (
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

export default LoadingIndicator

const styles = StyleSheet.create({})