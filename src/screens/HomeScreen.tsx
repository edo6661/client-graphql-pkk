/* eslint-disable prettier/prettier */
import {
  ActivityIndicator,
  Button,
  StatusBar,

  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import KeyboardAvoidingViewComp from '../components/KeyboardAvoidingViewComp';
import ModalComp from '../components/ModalComp';
import StatusBarComp from '../components/StatusBarComp';
import TouchableHighlightComp from '../components/TouchableHighlightComp';
import TouchableOpacityComp from '../components/TouchableOpacityComp';
import TouchableWithoutFeedbackComp from '../components/TouchableWithoutFeedbackComp';
import { baseStyles } from '../styles';
import { ALLOWED_ENV_VAR, BLOCKED_ENV_VAR, TEST_ENV_VAR } from '@env';
import { logEnvs } from '../constants/envs';


const HomeScreen = () => {

  logEnvs()


  return (
    <View>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
      }}>
        ENV
      </Text>
      <Text style={{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
      }}>

      </Text>

      <Text style={baseStyles.separator}>Activity Indicator</Text>

      <ActivityIndicator
      // size={100}
      // color="red"
      />
      <Button
        title="Press me"
      //   onPress={() => alert('Button pressed')}
      //   accessibilityLabel="Learn more about this purple button"
      //   color="purple"
      // touchSoundDisabled={true}
      // disabled
      />
      <Text style={baseStyles.separator}>Keyboard Avoiding View</Text>

      {/* kalo ada keyboard bakal jadi padding / height, ga ngalangin view */}
      <KeyboardAvoidingViewComp />
      <Text style={baseStyles.separator}>Modal</Text>
      <ModalComp />
      <Text style={baseStyles.separator}>Status Bar</Text>
      <StatusBarComp />
    </View>
  );
};

export default HomeScreen;


