import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import GestureAnimation from './GestureAnimation'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { LightSpeedInRight, LightSpeedOutLeft, runOnJS } from 'react-native-reanimated'

const GestureScreen = () => {
  const [count, setCount] = useState(0)
  const tap = useMemo(() => {
    return (
      Gesture.Tap()
        .onStart(() => {
          setCount(count + 1)
          // ! runOnJs memastikan bahwa pemanggilan setCount terjadi di dalam konteks JavaScript biasa (UI thread) dan bukan di dalam worklet yang dieksekusi oleh Reanimated di luar UI thread
        }).runOnJS(true)
    )
  },
    [count]
  );
  return (
    <View style={{ gap: 20, }}>
      <GestureDetector gesture={tap}>
        <View style={{
          padding: 20,
          backgroundColor: 'lightblue',
          borderRadius: 10,
        }}>
          <Text>Tap me! {count}</Text>
        </View>
      </GestureDetector>

      <GestureAnimation />
    </View>
  )
}

export default GestureScreen

const styles = StyleSheet.create({})