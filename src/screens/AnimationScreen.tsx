import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Decay from '../components/Decay'
import BasicAnimation from '../components/BasicAnimation'
import SvgAnimation from '../components/SvgAnimation'
import DelayRepeatSequence from '../components/DelayRepeatSequence'
import GestureAnimation from './GestureAnimation'

const AnimationScreen = () => {
  return (
    <View style={{
      gap: 20,
      padding: 20,
    }}>
      <BasicAnimation />
      <DelayRepeatSequence />
      <GestureAnimation />
      <SvgAnimation />
    </View>
  )
}

export default AnimationScreen

const styles = StyleSheet.create({})