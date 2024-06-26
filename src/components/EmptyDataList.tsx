import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  title: string;
}

const EmptyDataList = (
  { title }: Props
) => {
  return (
    <Text>Empty {title} List</Text>
  )
}

export default EmptyDataList

const styles = StyleSheet.create({})