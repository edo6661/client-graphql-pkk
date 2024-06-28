import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './src/tabs/BottomTabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ApolloProviders from './src/components/providers/ApolloProviders';
import { RootStackParamList } from './src/types/navigator.type';
import { AuthContextProvider } from './src/contexts/AuthContext';

const Stack = createStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <AuthContextProvider>
      <ApolloProviders>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='BottomTab'
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen
                name='BottomTab'
                component={BottomTabs}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApolloProviders>
    </AuthContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
