import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const StatusBarComp = () => {
  const [statusBarHidden, setStatusBarHidden] = useState(false);
  const [statusBarColor, setStatusBarColor] = useState("purple");

  const switchStatusBar = () => setStatusBarHidden(!statusBarHidden);
  const changeStatusBarColor = () => setStatusBarColor(statusBarColor === "purple" ? "blue" : "purple");
  return (
    <>
      <StatusBar
        animated
        barStyle={
          'dark-content' /* 'default', 'light-content', 'dark-content' */
        }
        networkActivityIndicatorVisible
        translucent
        hidden={statusBarHidden}
        showHideTransition={'slide' /* 'fade', 'slide' */}
        backgroundColor={
          statusBarColor
        }
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',

      }}>
        <Button onPress={
          switchStatusBar
        }
          title={
            statusBarHidden ? 'Show Status Bar' : 'Hide Status Bar'
          }
        />
        <Button onPress={
          changeStatusBarColor
        }
          title={
            'Change Status Bar Color'
          }
        />
      </View>


    </>
  )
}

export default StatusBarComp

const styles = StyleSheet.create({})