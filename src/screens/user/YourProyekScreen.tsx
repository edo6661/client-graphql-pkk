import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { useQuery } from '@apollo/client';
import { getProyek } from '../../api/query/proyek.query';
import { useAuthContext } from '../../contexts/AuthContext';
import dayjs from 'dayjs';
import { Kelompok, Mahasiswa, Maybe, Proyek, TypeProyek } from '../../__generated__/graphql';
import { MahasiswaProyekNavigatorProps } from '../../types/navigator.type';
import { parseDate } from '../../utils/date';
import { baseStyles } from '../../styles';
import { COLORS } from '../../constants/colors';

const YourProyekScreen = (
  { navigation }: MahasiswaProyekNavigatorProps
) => {
  const { user } = useAuthContext();
  const proyekId = user?.mahasiswa?.proyekId || user?.mahasiswa?.kelompok?.proyekId || user?.dosen?.proyekId;
  const { data,
    loading
    , error } = useQuery<{
      getProyek: Proyek
    }>(getProyek, {
      variables: {
        id: proyekId
      }
    });

  const isMahasiswa = user?.mahasiswa;
  const idKelompokMahasiswa = user?.mahasiswa?.kelompokId ?? user?.mahasiswa?.kelompok?.id;

  if (error) return <Text>Error: {error.message}</Text>;

  const proyek = data?.getProyek;

  const isDosen = user?.dosen;

  const isBolehDimulaiDanAdaPembimbing = proyek?.bolehDimulai && proyek?.pembimbing?.length;




  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: proyek?.photo?.includes(
            'http' || 'https'
          ) ? proyek?.photo : "https://i.pinimg.com/236x/42/92/f8/4292f8591dab26fcaa4b3ab213895e6f.jpg"
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{proyek?.name}</Text>
      <Text style={styles.description}>{proyek?.description}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Type:</Text>
        <Text style={styles.infoValue}>{proyek?.type}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Lokasi:</Text>
        <Text style={styles.infoValue}>{proyek?.lokasi || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Pembimbing:</Text>
        <Text style={styles.infoValue}>{proyek?.pembimbing?.[0]?.fullname || 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Tanggal Mulai:</Text>
        <Text style={styles.infoValue}>{proyek?.tanggalMulai ? parseDate(+proyek?.tanggalMulai) : 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Tanggal Selesai:</Text>
        <Text style={styles.infoValue}>{proyek?.tanggalSelesai ? parseDate(+proyek?.tanggalSelesai) : 'N/A'}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Boleh dimulai:</Text>
        <Text style={styles.infoValue}>{
          proyek?.bolehDimulai ? 'Ya' : 'Belum'
        }</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Telah selesai:</Text>
        <Text style={styles.infoValue}>{
          proyek?.telahSelesai ? 'Ya' : 'Belum'
        }</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>
          {proyek?.type === TypeProyek.Kkn ? `Kelompok: ${proyek?.kelompok?.length}` : `Mahasiswa: ${proyek?.mahasiswa?.length}`}
        </Text>
      </View>

    </View>
  );

  const renderKelompokItem = ({ item }: { item: Maybe<Kelompok> }) => (
    isMahasiswa ? (
      <View style={styles.kelompokItem}>
        {kelompok(item)}
      </View>
    ) : (
      <TouchableOpacity style={styles.kelompokItem}
        onPress={() => navigation.navigate('KelompokProyek', {
          id: item!.id
        })}
      >
        {kelompok(item)}
      </TouchableOpacity>
    )
  );

  const renderMahasiswaItem = ({ item }: { item: Maybe<Mahasiswa> }) => (
    isMahasiswa ? (
      <View style={styles.kelompokItem}>

        {mahasiswa(item)}
      </View>
    ) : (
      <>
        <TouchableOpacity style={styles.kelompokItem}
          onPress={() => navigation.navigate('MahasiswaDetailsProyek', {
            id: item!.id
          })}
        >
          {mahasiswa(item)}
        </TouchableOpacity>
      </>
    )
  );



  const kelompok = (item: Maybe<Kelompok>) => (
    <>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Kelompok:</Text>
      </View>

      <Text style={styles.infoValue}>Nama: {item?.name}</Text>
      <Text style={styles.infoValue}>Nilai: {item?.nilai || 'N/A'}</Text>
      {/* <Text style={styles.infoValue}>Feedback: {item?.feedback || 'N/A'}</Text> */}

      <Text style={[styles.infoLabel, { marginVertical: 10 }]}>Anggota Kelompok: {item?.mahasiswa?.length}</Text>
      <FlatList
        data={item?.mahasiswa}
        keyExtractor={(mahasiswa) => mahasiswa!.id}
        renderItem={({ item }) => (
          <Text style={styles.infoValue}>{item?.fullname}</Text>
        )}
      />
    </>
  );


  const mahasiswa = (item: Maybe<Mahasiswa>) => (
    <>
      <Text style={styles.infoValue}>Nama: {item?.fullname}</Text>
      <Text style={styles.infoValue}>Nilai: {item?.nilai ?? 'N/A'}</Text>
    </>
  );

  const renderFooter = () => (
    <Button
      title={
        isBolehDimulaiDanAdaPembimbing ? 'Lihat Laporan Proyek' : 'Belum Dimulaikan atau Belum Ada Pembimbing'
      }
      disabled={!isBolehDimulaiDanAdaPembimbing || loading}

      onPress={() => navigation.navigate('LaporanProyekNavigator')}
    />
  );

  const optionalDataKkn = isMahasiswa ? proyek?.kelompok?.filter((kel) => kel!.id === idKelompokMahasiswa) : proyek?.kelompok;
  const optionalDataKKp = proyek?.mahasiswa




  return (
    <View style={baseStyles.centerContainer}>
      <View style={[
        baseStyles.innerCenterContainer, {
          gap: 16,
          flex: 1,
          paddingHorizontal: 0,
        }
      ]}>
        {
          loading && (
            <ActivityIndicator
              size='large'
              color={COLORS.primaryBlue}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
              }}
            />
          )
        }
        {!loading && (

          <View>
            {
              proyek?.type === TypeProyek.Kkn ? (
                <FlatList
                  ListHeaderComponent={renderHeader}
                  data={optionalDataKkn}
                  keyExtractor={(item) => item!.id}
                  renderItem={renderKelompokItem}
                  ListFooterComponent={renderFooter}
                  contentContainerStyle={styles.container}
                />
              ) : (
                <FlatList
                  ListHeaderComponent={renderHeader}
                  data={optionalDataKKp}
                  keyExtractor={(item) => item!.id}
                  renderItem={
                    renderMahasiswaItem
                  }
                  ListFooterComponent={renderFooter}
                  contentContainerStyle={styles.container}
                />
              )}
          </View>
        )}

      </View>
    </View>
  )
};

export default YourProyekScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
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
