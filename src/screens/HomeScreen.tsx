import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { getBau, getBaus } from '../api/query/baus.query';
import TemporaryLoading from '../components/state/TemporaryLoading';
import TemporaryError from '../components/state/TemporaryError';
import { SIGN_OUT } from '../api/mutation/auth.mutation';
import { getUser, removeUser } from '../lib/async-storage';
import { useAuthContext } from '../contexts/AuthContext';
import { HomeScreenProps } from '../types/navigator.type';

const HomeScreen = (
  { navigation }: HomeScreenProps
) => {
  const { logout, user } = useAuthContext()
  const { data, error, loading, refetch } = useQuery(getBaus, {
    skip: !user
  });
  const { data: bau } = useQuery(getBau, {
    variables: {
      bauId: "52c75e3c-4374-4dce-b856-30213cccbd87"
    }
  })

  console.log(bau)


  return (
    <View style={{ gap: 10 }}>
      {loading && <TemporaryLoading />}
      {error && <TemporaryError err={error} />}
      <View aria-hidden={loading}>
        <FlatList
          data={data?.baus}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Bau', { id: item.id });
              }}
            >
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
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
