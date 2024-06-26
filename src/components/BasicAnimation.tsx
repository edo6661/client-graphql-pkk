import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming } from 'react-native-reanimated'


const BasicAnimation = () => {
  const boxWidth = useSharedValue(20)
  const boxColor = useSharedValue('rgba(0, 0, 255, 1)')
  const boxX = useSharedValue(0)
  const handlePressBox = () => {
    boxWidth.value = withSpring(boxWidth.value === 20 ? 100 : 20)
    // boxWidth.value = withTiming(boxWidth.value === 20 ? 100 : 20, {
    //   duration: 500
    // })

    // ! 2 pilihan
    boxColor.value = withSequence(
      withTiming('rgba(255, 0, 0, 1)', { duration: 500, }),
      withTiming('rgba(0, 255, 0, 1)', { duration: 500 }),
    )

    // boxColor.value = withTiming('blue', { duration: 500 });
    // setTimeout(() => {
    //   boxColor.value = withTiming('green', { duration: 500 });
    // }, 500); 

  }
  const handleMoveBox = () => {
    // ! Klik Pertama:
    // handleMoveBox dipanggil: boxX.value menjadi 10.
    // animatedStyles diperbarui: translateX akan dianimasikan ke 20 (10 * 2).
    // ! Klik Kedua:

    // handleMoveBox dipanggil: boxX.value menjadi 20.
    // animatedStyles diperbarui: translateX akan dianimasikan ke 40 (20 * 2).


    boxX.value += 10
  }
  const animatedStyles = useAnimatedStyle(() => ({
    // transform: [{ translateX: withSpring(boxX.value * 2) }],
    transform: [{
      translateX: withTiming(boxX.value * 2, {
        duration: 400,
        easing: Easing.inOut(Easing.ease)
      })
    }],
    backgroundColor: boxColor.value,
    width: boxWidth.value
  }))

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressBox}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleMoveBox}>
          <Text>Move Box</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { boxX.value = 0; }}>
          <Text>Reset Box</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default BasicAnimation

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  box: {
    aspectRatio: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
