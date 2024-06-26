import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import FormScreen from './FormScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ImageScreen from './ImageScreen'
import ListScreen from './ListScreen'
import ViewScreen from './ViewScreen'
import TouchableScreen from './TouchableScreen'
import SwipeableScreen from './SwipeableScreen'
import LinkingScreen from './LinkingScreen'
import AnimationScreen from './AnimationScreen'
import GestureScreen from './GestureScreen'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='home' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Form'
        component={FormScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='wpforms' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Image'
        component={ImageScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='image' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='List'
        component={ListScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='list' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='View'
        component={ViewScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='street-view' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Touchable'
        component={TouchableScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <MaterialIcon name='touch-app' size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name='Swipeable'
        component={SwipeableScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <MaterialIcon name='swipe' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Linking'
        component={LinkingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name='link' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Animation'
        component={AnimationScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <MaterialIcon name='animation' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Gesture'
        component={GestureScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <MaterialIcon name='gesture' size={size} color={color} />,
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})