import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Circle, Svg } from 'react-native-svg'
import Animated, { useAnimatedProps, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const SvgAnimation = () => {
  const r = useSharedValue(10)
  const handleIncrease = () => {
    r.value += 10
  }
  const animatedProps = useAnimatedProps(() => ({
    r: withSpring(r.value, {
      duration: 1000
    })
  }))

  return (
    <View>
      <Svg
        onPress={handleIncrease}
      >
        <AnimatedCircle cx="50%" cy="25%" fill={'blue'} animatedProps={animatedProps} />
      </Svg>
    </View>
  )
}

export default SvgAnimation

const styles = StyleSheet.create({})