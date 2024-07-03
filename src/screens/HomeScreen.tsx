import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { getBau, getBaus } from '../api/query/baus.query';
import TemporaryLoading from '../components/state/TemporaryLoading';
import TemporaryError from '../components/state/TemporaryError';
import { signOut } from '../api/mutation/auth.mutation';
import { getUser, removeUser } from '../lib/async-storage';
import { useAuthContext } from '../contexts/AuthContext';
import { HomeScreenProps } from '../types/navigator.type';
import { deleteBau } from '../api/mutation/bau.mutation';
import { Bau, MutationDeleteBauArgs } from '../__generated__/graphql';

const HomeScreen = (
  { navigation }: HomeScreenProps
) => {
  const { logout, user } = useAuthContext()
  const { data, error, loading, refetch } = useQuery<{
    baus: Bau[]
  }>(getBaus, {
    skip: !user
  });

  const [deleting, { data: deletedData, loading: deleteLoading, error: deleteError }] = useMutation
    <{ deleteBau?: Bau }, MutationDeleteBauArgs>
    (deleteBau, {
      // ! `existingBaus` adalah array referensi ke objek `Bau` yang sudah ada di cache
      update(cache, { data }) {
        const deleteBau = data?.deleteBau
        // console.log(data, 'data')
        // console.log(deleteBau, 'deleteBau')
        if (!deleteBau) return console.error('Data not found')
        cache.modify({
          fields: {
            baus(existingBaus = [], { readField }) {
              // existingBaus.forEach(bau => {
              //   const id = readField('id', bau);
              //   console.log("id", id);
              // });
              // ! readField adalah fungsi untuk membaca field dari objek yang ada di cache
              // ! Kita gunakan readField untuk mendapatkan id dari objek `Bau` yang ada di cache
              // ! Kita gunakan id untuk membandingkan objek `Bau` yang ada di cache dengan objek `Bau` yang akan dihapus

              return existingBaus.filter((bau: Bau) => readField('id', bau) !== deleteBau.id)
            }
          }
        })
      }
    })


  return (
    <View style={{ gap: 10 }}>
      {loading && <TemporaryLoading />}
      {error && <TemporaryError err={error} />}
      <Text>
        asdasd
      </Text>
      <View aria-hidden={loading}>
        <FlatList
          data={data?.baus}
          renderItem={({ item }) => (
            <>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Bau', { id: item.id });
                }}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
              <Button
                onPress={() => {
                  deleting({
                    variables: {
                      id: item.id
                    },
                    optimisticResponse: {
                      deleteBau: {
                        id: item.id,
                        __typename: 'Bau',
                        name: item.name
                      }
                    }
                  })
                }}
                title='Delete'
              />
            </>
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
