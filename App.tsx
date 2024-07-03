import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ApolloProviders from './src/components/providers/ApolloProviders';
import { AuthContextProvider, } from './src/contexts/AuthContext';
import Navigators from './src/components/Navigators';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/ToastConfig';

const App = () => {

  return (
    <AuthContextProvider>
      <ApolloProviders>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Navigators />
          </NavigationContainer>
          <Toast
            config={toastConfig}
            position='bottom'
            autoHide
            visibilityTime={2000}
          />
        </GestureHandlerRootView>
      </ApolloProviders>
    </AuthContextProvider>
  );
};

export default App;

