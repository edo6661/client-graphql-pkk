import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { DetailsProyekScreenProps } from '../../types/navigator.type';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { Kelompok, Mahasiswa, MutationUpdateKelompokArgs, MutationUpdateMahasiswaArgs, Proyek, RoleMahasiswa, TypeProyek } from '../../__generated__/graphql';
import { Picker } from '@react-native-picker/picker';
import { useAuthContext } from '../../contexts/AuthContext';
import dayjs from 'dayjs';
import { updateKelompok } from '../../api/mutation/kelompok.mutation';
import { updateMahasiswa } from '../../api/mutation/mahasiswa.mutation';
import { getProyeks } from '../../api/query/proyek.query';

const UserDetailsProyekScreen = ({ navigation, route }: DetailsProyekScreenProps) => {
  const { user, storeUser } = useAuthContext();

  const client = useApolloClient();

  const proyek = client.readFragment<Proyek>({
    id: `Proyek:${route?.params?.id}`,
    fragment: gql`
      fragment ProyekDetails on Proyek {
        ...ProyekFields 
      }
    `
  });
  const { refetch } = useQuery(getProyeks)




  const [update] = useMutation<
    { updateKelompok: Partial<Kelompok> },
    MutationUpdateKelompokArgs
  >(updateKelompok, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateKelompok) return console.error('Data updateKelompok not found');
      cache.modify({
        fields: {
          kelompoks(existingKelompoks = [], { readField }) {
            return existingKelompoks.map((kelompokExist: Kelompok) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', kelompokExist) === route.params.id) {
                return {
                  ...kelompokExist,
                  ...data.updateKelompok,
                };
              } else {
                return kelompokExist;
              }
            });
          },

        },
      });
    },
  });
  if (!proyek) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const isProyekKkn = proyek.type === TypeProyek.Kkn;
  const isMahasiswaHaveKelompok = user?.mahasiswa?.kelompokId;
  const isMahasiswaHaveProyek = user?.mahasiswa?.proyekId || user?.mahasiswa?.kelompok?.proyekId;
  const isMahasiswaKetua = user?.mahasiswa?.role === RoleMahasiswa.Ketua;
  const isDosen = user?.dosen;
  const isDosenHaveProyek = user?.dosen?.proyekId;



  const kelompokDaftarKeProyek = () => {
    update({
      variables: {
        id: user?.mahasiswa?.kelompokId!,
        proyekId: proyek.id!
      },
      optimisticResponse: {
        updateKelompok: {
          __typename: "Kelompok",
          ...user?.mahasiswa?.kelompok,
          id: user?.mahasiswa?.kelompokId!,
          proyekId: proyek.id!
        },
      },
    })
    storeUser({
      ...user!,
      mahasiswa: {
        ...user?.mahasiswa!,
        kelompok: {
          ...user?.mahasiswa?.kelompok!,
          proyekId: proyek.id!
        }
      }
    })
    refetch()
    navigation.navigate('UserProyek')


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
          <Text style={styles.infoLabel}>
            {proyek.type === TypeProyek.Kkn ? 'Batas Kelompok' : 'Batas Orang'}:
          </Text>
          <Text style={styles.infoValue}>{
            proyek.kelompok?.length
          } / {proyek.batasOrang}   </Text>
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
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Tanggal mulai</Text>
        <Text style={styles.infoValue}>{dayjs(+proyek?.tanggalMulai!).format('DD-MM-YYYY') || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Tanggal selesai</Text>
        <Text style={styles.infoValue}>{dayjs(+proyek?.tanggalSelesai!).format('DD-MM-YYYY') || 'N/A'}</Text>
      </View>
      <View style={{
        ...styles.infoContainer,
        justifyContent: 'center',
      }}>
      </View>
      {proyek?.kelompok?.length! > 0 && (
        <Text style={styles.infoLabel}>Kelompok</Text>
      )}
      {proyek.type === TypeProyek.Kkn && (
        <View style={{
          ...styles.infoContainer,
          flex: 1 / 4
        }}>
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
      {(!isDosen && user?.mahasiswa?.proyek?.type === TypeProyek.Kkn && !user?.mahasiswa?.proyekId && user?.mahasiswa?.role === RoleMahasiswa.Anggota) && (
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
      {/*  */}
      {isMahasiswaHaveProyek && proyek.id !== isMahasiswaHaveProyek && (
        <Button
          title='Sudah Terdaftar Di Proyek Lain'
          disabled
        />
      )}
      {/*  */}

      {/*  */}
      {!isDosen && user && isProyekKkn && !isMahasiswaHaveKelompok && !isMahasiswaKetua && (
        <Button
          title='Daftar Kelompok'
        />
      )}
      {/*  */}
      {isProyekKkn && isMahasiswaHaveKelompok && !isMahasiswaKetua && (
        <Button
          title='Tunggu Ketua Kelompok untuk mendaftar'
          disabled
        />
      )}
      {isProyekKkn && isMahasiswaHaveKelompok && isMahasiswaKetua && !isMahasiswaHaveProyek && (
        <Button
          title='Daftar'
          onPress={kelompokDaftarKeProyek}
        />
      )}
      {/*  */}
      {isMahasiswaHaveProyek === proyek.id && (
        <Button
          title='Sudah Terdaftar Di Proyek ini'
          disabled
        />
      )}
      {/*  */}
      {isDosen && !isDosenHaveProyek && (
        <Button
          title='Tunggu didaftarkan oleh admin'
          disabled
        />
      )}
      {/*  */}
      {isDosen && isDosenHaveProyek === proyek.id && (
        <Button
          title='Sudah terdaftar di proyek ini'
          disabled
        />
      )}
      {/*  */}
      {isDosen && isDosenHaveProyek !== proyek.id && (
        <Button
          title='Sudah terdaftar di proyek lain'
          disabled
        />
      )}
      {/*  */}
      {proyek.batasOrang === proyek.kelompok?.length && (
        <Button
          title='Proyek Penuh'
          disabled
        />
      )}
      <Text>
        Kelompok Length: {proyek.kelompok?.length}
      </Text>
      <Text>
        Kelompok Batas Orang:{proyek.batasOrang}
      </Text>


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
