import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { DetailsProyekScreenProps } from '../../types/navigator.type';
import { gql, useApolloClient } from '@apollo/client';
import { Proyek, RoleMahasiswa, TypeProyek } from '../../__generated__/graphql';
import { Picker } from '@react-native-picker/picker';
import { useAuthContext } from '../../contexts/AuthContext';

const UserDetailsProyekScreen = ({ navigation, route }: DetailsProyekScreenProps) => {
  const { user } = useAuthContext();

  const client = useApolloClient();
  const proyek = client.readFragment<Proyek>({
    id: `Proyek:${route?.params?.id}`,
    fragment: gql`
      fragment ProyekDetails on Proyek {
        ...ProyekFields 
      }
    `
  });

  if (!proyek) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }



  return (
    <View style={styles.container}>
      <Image source={{
        uri: proyek.photo?.includes(
          'http' || 'https'
        ) ? proyek.photo : "https://i.pinimg.com/236x/42/92/f8/4292f8591dab26fcaa4b3ab213895e6f.jpg"
      }} style={styles.image} />
      <Text style={styles.title}>{proyek.name}</Text>
      <Text style={styles.description}>{proyek.description}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Type:</Text>
        <Text style={styles.infoValue}>{proyek.type}</Text>
      </View>
      {proyek.type === TypeProyek.Kkn && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Batas Kelompok:</Text>
          <Text style={styles.infoValue}>{proyek?.batasOrang! - proyek.mahasiswa?.length!} / {proyek.batasOrang}   </Text>
        </View>
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Lokasi:</Text>
        <Text style={styles.infoValue}>{proyek.lokasi || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Pembimbing:</Text>
        <Text style={styles.infoValue}>{proyek?.pembimbing![0]?.fullname || 'N/A'}</Text>
      </View>
      {proyek.type === TypeProyek.Kkn && (
        <View style={{
          ...styles.infoContainer,
          flex: 1 / 4
        }}>
          <Text style={styles.infoLabel}>Kelompok:</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 5,
            }}
          >
            {proyek.kelompok!.length > 0 ? proyek?.kelompok!.map((k, index) => (
              <View key={index}
                style={{
                }}
              >
                <Text style={styles.infoValue}>{k?.name}</Text>
              </View>
            )) : (
              <Text style={styles.infoValue}>N/A</Text>
            )}
          </View>
        </View>
      )}

      {!user && (
        <Button
          title='Login terlebih dahulu sebelum mendaftar'
          disabled
        />
      )}
      {(user?.mahasiswa?.proyek?.type === TypeProyek.Kkn && !user?.mahasiswa?.proyekId && user?.mahasiswa?.role === RoleMahasiswa.Anggota) && (
        <>
          <Picker>
            <Picker.Item label='Pilih Kelompok' value='' />
            {proyek.kelompok!.map((k, index) => (
              <Picker.Item key={index} label={k?.name} value={k?.id}
              />
            ))}
          </Picker>
        </>
      )}
      {(user?.mahasiswa?.proyek?.type === TypeProyek.Kkn && !user?.mahasiswa?.proyekId && user?.mahasiswa?.role === RoleMahasiswa.Anggota) && (
        <Button
          title='Daftar'
        />
      )}
      {user?.mahasiswa?.proyekId && (
        <Button
          title='Sudah Terdaftar Di Proyek'
          disabled
        />
      )}
      {user?.dosen && (
        <Button
          title={
            !user.dosen.proyekId ? 'Tunggu didaftarkan pembimbing oleh admin' : 'Sudah Menjadi Pembimbing'
          }
          disabled
        />
      )}



    </View>
  );
};

export default UserDetailsProyekScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#555',
    width: 120,
  },
  infoValue: {
    flex: 1,
    color: '#333',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
