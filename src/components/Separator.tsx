import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SeparatorProps = {
  orientation: 'horizontal' | 'vertical',
  color: string,
  width: number | string,
  height: number | string,
  separatorStyle?: any
}

const Separator = (
  { orientation, color, width, height, separatorStyle }: SeparatorProps
) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: orientation === 'horizontal' ? width : 1,
        height: orientation === 'vertical' ? height : 1,
        ...separatorStyle
      }}
    />
  )
}

export default Separator

const styles = StyleSheet.create({})