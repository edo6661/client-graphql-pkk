import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="blue" />;
const UsingIcon = () => {
  return (
    <View>
      <Text>Icon</Text>
      {myIcon}
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={() => Alert.alert('Login with Facebook')}
      >
        Login with Facebook
      </Icon.Button>
    </View>
  );
};

export default UsingIcon;

const styles = StyleSheet.create({});
