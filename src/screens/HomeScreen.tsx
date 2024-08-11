import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { HomeScreenProps } from '../types/navigator.type';
import Proyeks from '../components/user/Proyeks';
import { baseStyles } from '../styles';
import { COLORS } from '../constants/colors';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { logout, user } = useAuthContext();
  return (
    <View
      style={baseStyles.centerContainer}
    >
      <View style={
        [
          baseStyles.innerCenterContainer,
          {
            gap: 20,
            paddingVertical: 20,
          }
        ]
      }>
        <Image
          style={{ width: 200, height: 200, alignSelf: 'center' }}
          source={require('../assets/images/logo.png')}
        />
        <View>
          <Text
            style={
              baseStyles.primaryTitle
            }
          >
            Ayo Kita KKN / KKP
          </Text>
          <Text
            style={
              {
                color: COLORS.darkGrey,
              }
            }
          >
            Aplikasi ini adalah aplikasi yang membantu mahasiswa dalam melakukan KKN dan KKP di Global Institute
          </Text>
        </View>
        <TouchableOpacity
          style={[
            baseStyles.primaryButton,
          ]}
          onPress={() => {
            navigation.navigate('UserProyekNavigator');
          }}
        >
          <Text
            style={baseStyles.textButton}
          >
            Lihat KKN / KKP
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
