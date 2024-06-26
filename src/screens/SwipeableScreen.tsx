import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector, RectButton, Swipeable } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const SwipeableScreen = () => {
  return (
    <View style={{
      gap: 20,
      flex: 1
    }}>
      <Text>SwipeableScreen</Text>
      <SwipeableExample />
    </View>
  )
}

export default SwipeableScreen

const SwipeableExample = () => {
  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete?')
  };

  return (
    <Swipeable
      renderRightActions={(progress, dragX) =>
        RightActions(progress, dragX, handleDelete)
      }
    >
      <View>
        <Text>Swipeable Element</Text>
      </View>
    </Swipeable>
  );
};



const RightActions = (progress: any, dragX: any, onPress: () => void) => {
  return (
    <View>
      <RectButton onPress={onPress}>
        <View>
          <Text>Delete</Text>
        </View>
      </RectButton>
    </View>
  );
};

