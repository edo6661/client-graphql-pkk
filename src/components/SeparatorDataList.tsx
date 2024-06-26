import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SeparatorDataList = () => {
  return (
    <View style={styles.separator} />
  )
}

export default SeparatorDataList

const styles = StyleSheet.create({
  separator: {
    height: 3,
    backgroundColor: 'blue',
    marginHorizontal: 16,
    marginVertical: 8,
  },

})