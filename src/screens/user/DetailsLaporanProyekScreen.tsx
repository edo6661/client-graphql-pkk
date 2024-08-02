import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { useMutation, useQuery } from '@apollo/client';
import { getLaporan } from '../../api/query/laporan.query';
import { Laporan, MutationUpdateLaporanArgs } from '../../__generated__/graphql';
import { DetailsLaporanProyekScreenProps } from '../../types/navigator.type';
import { useAuthContext } from '../../contexts/AuthContext';
import { updateLaporan } from '../../api/mutation/laporan.mutation';
import Toast from 'react-native-toast-message';

const DetailsLaporanProyekScreen = ({ route }: DetailsLaporanProyekScreenProps) => {
  const { user } = useAuthContext();
  const [form, setForm] = useState<Partial<Laporan>>({
    id: '',
    feedback: '',
  });

  const isUserDosen = user?.dosen !== null;


  const { data, loading, error } = useQuery<{ getLaporan: Laporan }>(getLaporan, {
    variables: {
      id: route.params.id,
    },
  });


  const [addFeedback] = useMutation<{
    updateLaporan: Partial<Laporan>
  }, MutationUpdateLaporanArgs>(updateLaporan, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateLaporan) return console.error('Data updateLaporan not found');
      cache.modify({
        fields: {
          getLaporanByProyekId(existingLaporans = [], { readField }) {
            return existingLaporans.map((laporanExist: Laporan) => {
              if (route.params.id === undefined) return <Text>Id not found</Text>;

              if (readField('id', laporanExist) === route.params.id) {
                return {
                  ...laporanExist,
                  ...data.updateLaporan,
                };
              } else {
                return laporanExist;
              }
            });
          },
        },
      });
    },
  });

  useEffect(() => {
    if (data?.getLaporan) {
      setForm({
        id: data.getLaporan.id,
        feedback: data.getLaporan.feedback,
      });
    }
  }, [data]);

  const onSubmit = async () => {
    try {
      await addFeedback({
        variables: {
          id: form.id!,
          feedback: form.feedback!,
        },
        optimisticResponse: {
          updateLaporan: {
            __typename: 'Laporan',
            ...data?.getLaporan,
            feedback: form.feedback,
          },
        },
      });
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: `Feedback ${form.feedback} added to Laporan`,
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const laporan = data?.getLaporan;

  return (
    <ScrollView style={styles.container}>
      {laporan ? (
        <View>
          <Image
            source={{
              uri: laporan.photo?.includes('http') || laporan.photo?.includes('https')
                ? laporan.photo
                : "https://i.pinimg.com/236x/42/92/f8/4292f8591dab26fcaa4b3ab213895e6f.jpg"
            }}
            style={styles.image}
          />
          <Text style={styles.title}>File: {laporan.file}</Text>
          <Text style={styles.subtitle}>Dari: {laporan.mahasiswa.fullname}</Text>
          <Text style={styles.subtitle}>Proyek: {laporan.proyek.name}</Text>
          <Text style={styles.subtitle}>Feedback: {laporan.feedback || 'Tidak ada feedback'}</Text>
          {user?.dosen && (
            <View style={{ marginTop: 12 }}>
              <TextInput
                value={form.feedback || ''}
                onChangeText={(text) => setForm((prev) => ({ ...prev, feedback: text }))}
                placeholder="Feedback"
              />
              <Button title="Submit" onPress={onSubmit} />
            </View>
          )}
        </View>
      ) : (
        <Text>No data available</Text>
      )}
    </ScrollView>
  );
};

export default DetailsLaporanProyekScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});
