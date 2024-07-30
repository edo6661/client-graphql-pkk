import { StyleSheet, Text, View, Image, FlatList, Button, ScrollView } from 'react-native';
import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { getProyek } from '../../api/query/proyek.query';
import { useAuthContext } from '../../contexts/AuthContext';
import dayjs from 'dayjs';
import { Kelompok, Maybe, Proyek } from '../../__generated__/graphql';
import { MahasiswaProyekNavigatorProps } from '../../types/navigator.type';

const MahasiswaProyekScreen = (
  { navigation }: MahasiswaProyekNavigatorProps
) => {
  const { user } = useAuthContext();
  const { data, loading, error } = useQuery<{
    getProyek: Proyek
  }>(getProyek, {
    variables: {
      id: user?.mahasiswa?.proyekId ?? user?.mahasiswa?.kelompok?.proyekId
    }
  });
  const idKelompokMahasiswa = user?.mahasiswa?.kelompokId ?? user?.mahasiswa?.kelompok?.id;


  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const proyek = data?.getProyek;

  if (!proyek) {
    return (
      <View style={styles.container}>
        <Text>Data not found</Text>
      </View>
    );
  }


  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: proyek.photo?.includes(
            'http' || 'https'
          ) ? proyek.photo : "https://i.pinimg.com/236x/42/92/f8/4292f8591dab26fcaa4b3ab213895e6f.jpg"

        }}
        style={styles.image}
      />
      <Text style={styles.title}>{proyek.name}</Text>
      <Text style={styles.description}>{proyek.description}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Type:</Text>
        <Text style={styles.infoValue}>{proyek.type}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Lokasi:</Text>
        <Text style={styles.infoValue}>{proyek.lokasi || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Pembimbing:</Text>
        <Text style={styles.infoValue}>{proyek?.pembimbing![0]!.fullname || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Tanggal Mulai:</Text>
        <Text style={styles.infoValue}>{dayjs(+proyek.tanggalMulai!).format(
          'DD-MM-YYYY'
        )}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Tanggal Selesai:</Text>
        <Text style={styles.infoValue}>{dayjs(+proyek.tanggalSelesai!).format('DD-MM-YYYY')}</Text>
      </View>
    </View>
  );

  const renderKelompokItem = ({ item }: {
    item: Maybe<Kelompok>
  }) => (
    <View style={styles.kelompokItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Kelompok:</Text>
      </View>

      <Text style={styles.infoValue}>Nama: {item?.name}</Text>
      <Text style={styles.infoValue}>Nilai: {item?.nilai || 'N/A'}</Text>
      <Text style={styles.infoValue}>Feedback: {item?.feedback || 'N/A'}</Text>

      <Text style={[styles.infoLabel, { marginVertical: 10 }]}>Anggota Kelompok: {item?.mahasiswa?.length}</Text>
      <FlatList
        data={item?.mahasiswa}
        keyExtractor={(mahasiswa) => mahasiswa!.id}
        renderItem={({ item }) => (
          <Text style={styles.infoValue}>{item?.fullname}</Text>
        )}
      />
    </View>
  );

  const renderFooter = () => (
    <Button
      title='Laporan'
      onPress={() => navigation.navigate('LaporanProyekNavigator')}
    />
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={proyek.kelompok?.filter((kel) => kel!.id === idKelompokMahasiswa)}
      keyExtractor={(item) => item!.id}
      renderItem={renderKelompokItem}
      ListFooterComponent={renderFooter}
      contentContainerStyle={styles.container}
    />
  );
};

export default MahasiswaProyekScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 16,
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
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  kelompokItem: {
    marginBottom: 16,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
});
