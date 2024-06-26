import { Alert, Button, FlatList, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DATA } from '../constants/data'
import FlatListComp from '../components/FlatListComp'
import SectionListComp from '../components/SectionListComp'

const ListScreen = () => {


  return (
    <>
      <View
        style={{
          gap: 20
        }}
      >
        <FlatListComp />
        <SectionListComp />
      </View>
    </>
  )
}

export default ListScreen

const styles = StyleSheet.create({})