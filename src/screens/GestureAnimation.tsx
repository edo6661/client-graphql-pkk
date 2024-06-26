import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector, PanGestureHandlerEventPayload, TouchableOpacity } from 'react-native-gesture-handler';

const SIZE = 100
const BOUNDARY_OFFSET = 50;

const GestureAnimation = () => {
  const isPressed = useSharedValue(false);
  const bgColor = useSharedValue('rgb(0,0,0)')
  const x = useSharedValue(0)
  const width = useSharedValue(0)
  const onLayout = (e: LayoutChangeEvent) => {
    console.log("width: ", e.nativeEvent.layout.width)
    width.value = e.nativeEvent.layout.width
  }
  const pan = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
      bgColor.value = withTiming('rgb(255,255,0)')
    })
    .onStart(() => {
      bgColor.value = withTiming('rgb(0,255,255)')
    })
    .onEnd(() => {
      bgColor.value = withTiming('rgb(255,0,255)')
    })
    .onUpdate(() => {
      bgColor.value = withTiming('rgb(100,100,255)')
    })
    // ! x dan y:
    // Posisi saat ini dari titik sentuh pada layar.
    // ! translationX dan translationY:
    // Jarak yang telah ditempuh dari titik awal gesture dalam arah horizontal (x) dan vertikal (y).
    //! velocityX dan velocityY:
    // Kecepatan pergerakan gesture dalam piksel per detik untuk arah horizontal (x) dan vertikal (y).
    .onChange((e) => {
      bgColor.value = withTiming('rgb(255,0,0)')
      // x.value = e.translationX
      x.value += e.changeX

    })
    .onFinalize((e) => {
      isPressed.value = false;
      // x.value = withSpring(0)
      bgColor.value = withTiming('rgb(0,255,0)')
      x.value = withDecay({
        velocity: e.velocityX,
        rubberBandEffect: true,
        clamp: [
          // ! memastikan bahwa objek yang digerakkan tidak keluar dari area yang ditentukan, sesuai dengan ukuran layar (width.value) dan ukuran objek (SIZE).
          // ! kenapa di pada dibagi 2, karena object nya udah di tengah dan di tambah lagi dengan ukuran object nya agar dia bisa keluar dari layar + BOUNDARY_OFFSET itu untuk memberikan jarak agar object tidak langsung keluar dari layar
          -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
          (width.value / 2) - SIZE / 2 - BOUNDARY_OFFSET
        ],
      })
    })
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: bgColor.value,
    transform: [
      { scale: isPressed.value ? 1.1 : 1 },
      { translateX: x.value }
    ]


  }))
  const handleReset = () => {
    isPressed.value = false;
    bgColor.value = withTiming('rgb(0,0,0)')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}
        onLayout={onLayout}
      >
        <GestureDetector gesture={pan}

        >
          <Animated.View style={[styles.object, animatedStyle]} />
        </GestureDetector>
      </View>
    </View>
  )
}

export default GestureAnimation

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  inner: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  object: {
    width: 100,
    height: 100,
  }
})