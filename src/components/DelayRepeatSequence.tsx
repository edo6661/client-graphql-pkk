import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import { View, Button, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

export default function DelayRepeatSequence() {
  const offset = useSharedValue<number>(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const OFFSET = 5;
  const TIME = 250;
  const DELAY = 400;

  const handlePress = () => {
    // highlight-next-line
    offset.value = withDelay(
      // highlight-next-line
      DELAY,
      withSequence(
        // start from -OFFSET
        withTiming(-OFFSET, { duration: TIME / 2 }),
        // shake between -OFFSET and OFFSET 5 times
        withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
        // go back to 0 at the end
        withTiming(0, { duration: TIME / 2 })
      )
      // highlight-next-line
    );
  };

  return (
    <View

    >
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.box, style]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: '#b58df1',
  },
});
