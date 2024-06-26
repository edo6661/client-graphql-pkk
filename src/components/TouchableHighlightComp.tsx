import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const TouchableHighlightComp = () => {

  return (
    <View >
      <TouchableHighlight onPress={
        () => Alert.alert('You tapped the button!')
      }
      // activeOpacity={0.6}
      // underlayColor="blue"
      >
        <View style={styles.button}>
          <Text
            style={{
              color: 'white'
            }}
          >Touchable Highglight</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TouchableHighlightComp;