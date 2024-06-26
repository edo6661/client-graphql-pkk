import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View, Alert } from 'react-native';

const TouchableWithoutFeedbackComp = () => {

  return (
    <TouchableWithoutFeedback onPress={
      () => Alert.alert('You tapped the button!')
    }>
      <View style={styles.button}>
        <Text>Touch Here</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});

export default TouchableWithoutFeedbackComp;