import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { HomeScreenProps } from '../types/navigator.type';
import Proyeks from '../components/user/Proyeks';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { logout, user } = useAuthContext();
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Home</Text>
      <Text>{user ? user.username : "Guest"}</Text>
      <Text>{user && user.role}</Text>
      <Button
        title='Test'

      />
      {user && (
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
