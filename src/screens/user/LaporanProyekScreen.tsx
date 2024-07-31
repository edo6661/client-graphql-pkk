import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { getLaporanByProyekId } from '../../api/query/laporan.query';
import { useAuthContext } from '../../contexts/AuthContext';
import { Laporan, MutationDeleteLaporanArgs, RoleMahasiswa } from '../../__generated__/graphql';
import { CreateLaporanProyekScreenProps } from '../../types/navigator.type';
import { deleteLaporan } from '../../api/mutation/laporan.mutation';
import Toast from 'react-native-toast-message';
import ModalClose from '../../components/ModalClose';

const LaporanProyekScreen = ({ navigation }: CreateLaporanProyekScreenProps) => {
  const { user } = useAuthContext();

  const proyekId = user?.mahasiswa?.proyekId || user?.mahasiswa?.kelompok?.proyekId || user?.dosen?.proyekId

  const { data, error, loading } = useQuery<{ getLaporanByProyekId: Laporan[] }>(getLaporanByProyekId, {
    variables: { proyekId },
  });


  const [remove] = useMutation<any, MutationDeleteLaporanArgs>(deleteLaporan, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          getLaporanByProyekId(existingLaporans = [], { readField }) {
            return existingLaporans.filter((laporan: Laporan) => readField('id', laporan) !== data.deleteLaporan.id);
          },
        },
      });
    },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const isMahasiswaKetua = user?.mahasiswa?.role === RoleMahasiswa.Ketua;
  const isDosen = user?.dosen !== null;


  const onDelete = async (item: Laporan) => {
    try {
      await remove({
        variables: { id: item.id },
        optimisticResponse: {
          deleteLaporan: {
            __typename: 'Laporan',
            ...item,
          },
        },
      });
      Toast.show({
        type: 'success',
        text1: 'Berhasil',
        text2: 'Laporan berhasil di hapus',
      });
    } catch (err) {
      console.error(err);
    }

  }

  const renderItem = ({ item }: { item: Laporan }) => (
    <TouchableOpacity style={styles.itemContainer}
      onPress={
        () => navigation.navigate('DetailsLaporanProyek', {
          id: item.id
        })
      }
    >
      <Image source={{
        uri: item.photo?.includes(
          'http' || 'https'
        ) ? item.photo : "https://i.pinimg.com/236x/42/92/f8/4292f8591dab26fcaa4b3ab213895e6f.jpg"

      }} style={styles.image} />
      <Text style={styles.title}>{item.file}</Text>
      <Text style={styles.subtitle}>Feedback: {item.feedback}</Text>
      <Text style={styles.subtitle}>Dari: {item.mahasiswa.fullname}</Text>
      {isMahasiswaKetua && (
        <ModalClose
          action={onDelete}
          item={item}
          trigger='Hapus'
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Laporan </Text>
      <FlatList
        data={data?.getLaporanByProyekId}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {isMahasiswaKetua && (
        <Button title='Buat Laporan' onPress={() => navigation.navigate('CreateLaporanProyek')} />
      )}
    </View>
  );
};

export default LaporanProyekScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
