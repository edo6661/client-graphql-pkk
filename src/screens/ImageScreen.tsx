import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, ScrollView, Dimensions } from 'react-native';


const ImageScreen = () => {
  const tabbarHeight = useBottomTabBarHeight()
  return (

    <ScrollView
      contentContainerStyle={{
        flex: 1,
        flexGrow: 1,

      }}
    >
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={[
          styles.small,
          {
            resizeMode: 'cover'
          }
        ]}
      />
      <Image
        source={
          require('../assets/images/anime.jpg')
        }
        style={[
          styles.medium,
          {
            resizeMode: "stretch",
            height: 200
          }
        ]}
      />
      <Image
        source={
          require('../assets/images/kazuma.jpg')
        }
        style={[
          styles.large,
          {
            resizeMode: "repeat",
            height: 150
          }
        ]}
      />
      <Image
        source={
          require('../assets/images/saiki.jpg')
        }
        style={[
          styles.medium,
          {
            resizeMode: "cover",
            aspectRatio: 1
          }
        ]}
      />
      <Image
        src='https://i.pinimg.com/564x/62/bb/38/62bb38ca3913a474a298799a1d9a695f.jpg'
        style={[
          styles.medium,
          {
            resizeMode: "center",
          }
        ]}
      />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/saiki.jpg')}
          resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  small: {
    width: 50,
    height: 50,
  },
  medium: {
    width: 100,
    height: 100,
  },
  large: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

})

export default ImageScreen;