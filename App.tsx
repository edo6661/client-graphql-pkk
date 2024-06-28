import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './src/tabs/BottomTabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ApolloProviders from './src/components/providers/ApolloProviders';
import { RootStackParamList } from './src/types/navigator.type';
import { AuthContextProvider, useAuthContext } from './src/contexts/AuthContext';
import AdminBottomTabs from './src/tabs/AdminBottomTabs';
import Navigators from './src/components/Navigators';

const App = () => {

  return (
    <AuthContextProvider>
      <ApolloProviders>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Navigators />
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApolloProviders>
    </AuthContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
