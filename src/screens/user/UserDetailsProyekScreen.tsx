import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { DetailsProyekScreenProps } from '../../types/navigator.type';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { Kelompok, Mahasiswa, MutationUpdateKelompokArgs, MutationUpdateMahasiswaArgs, Proyek, RoleMahasiswa, TypeProyek } from '../../__generated__/graphql';
import { Picker } from '@react-native-picker/picker';
import { useAuthContext } from '../../contexts/AuthContext';
import dayjs from 'dayjs';
import { updateKelompok } from '../../api/mutation/kelompok.mutation';
import { updateMahasiswa } from '../../api/mutation/mahasiswa.mutation';
import { getProyeks } from '../../api/query/proyek.query';
import { parseDate } from '../../utils/date';
import Toast from 'react-native-toast-message';
import { baseStyles } from '../../styles';
import { wordFirstUpper } from '../../utils/wordFirstUpper';
import { COLORS } from '../../constants/colors';

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




  const [update, {
    loading: loadingUpdate
  }] = useMutation<
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

  const [updateMahasiswaMutation, {
    loading: loadingUpdateMahasiswa
  }] = useMutation<
    {
      updateMahasiswa: Partial<Mahasiswa> & {

      }
    },
    MutationUpdateMahasiswaArgs
  >(updateMahasiswa, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found')
      if (!data.updateMahasiswa) return console.error('Data updateMahasiswa not found')
      cache.modify({
        fields: {
          mahasiswas(existingMahasiswas = [], { readField }) {
            return existingMahasiswas.map((mahasiswaExist:
              Mahasiswa
            ) => {
              if (route.params?.id === undefined) return <Text>Id not found</Text>

              if (readField('id', mahasiswaExist) === route.params.id) {
                return {
                  ...mahasiswaExist,
                  ...data.updateMahasiswa,

                }
              } else {
                return mahasiswaExist
              }
            })
          }
        }
      })
    }
  })


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



  const onDaftar = async (kelompokId?: string) => {
    if (proyek.type === TypeProyek.Kkn) {
      try {
        if (isMahasiswaKetua) {
          await update({
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
          Toast.show({
            type: 'success',
            text1: 'Berhasil mendaftar ke proyek',
          })
        } else {
          await updateMahasiswaMutation({
            variables: {
              id: user?.mahasiswa?.id!,
              kelompokId
            },
            optimisticResponse: {
              updateMahasiswa: {
                __typename: 'Mahasiswa',
                ...user?.mahasiswa,
                proyekId: proyek.id,
                kelompokId
              }
            }
          })
          storeUser({
            ...user!,
            mahasiswa: {
              ...user?.mahasiswa!,
              proyekId: proyek.id,
              kelompokId
            }
          })
          Toast.show({
            type: 'success',
            text1: 'Berhasil mendaftar ke kelompok',
          })
        }
      } catch (err) {
        console.error(err)
      }
    }
    if (proyek.type === TypeProyek.Kkp) {

      updateMahasiswaMutation({
        variables: {
          id: user?.mahasiswa?.id!,
          proyekId: proyek.id!
        },
        optimisticResponse: {
          updateMahasiswa: {
            __typename: 'Mahasiswa',
            ...user?.mahasiswa,
            proyekId: proyek.id
          }
        }
      })
      storeUser({
        ...user!,
        mahasiswa: {
          ...user?.mahasiswa!,
          proyekId: proyek.id
        }
      })
      Toast.show({
        type: 'success',
        text1: 'Berhasil mendaftar ke proyek',
      })
    }
    refetch()
    navigation.navigate('UserProyek')


  }


  const titleDaftarBasedOnStatus = () => {
    if (!user) {
      return 'Login terlebih dahulu sebelum mendaftar'
    }
    if (proyek.bolehDimulai && !isDosen) {
      return 'Sudah Dimulai'
    }
    if (proyek.telahSelesai) {
      return 'Proyek Telah Selesai'
    }
    if (proyek.batasOrang === (proyek.kelompok?.length || proyek.mahasiswa?.length) && !isDosen) {
      return 'Proyek Penuh'
    }
    if (isMahasiswaHaveProyek === proyek.id) {
      return 'Sudah Terdaftar di Proyek ini'
    }
    if (isDosen && isDosenHaveProyek === proyek.id) {
      return 'Sudah Terdaftar di Proyek ini'
    }
    if (isDosen && isDosenHaveProyek == null) {
      return 'Tunggu didaftarkan oleh admin'
    }
    if (isMahasiswaHaveProyek) {
      return 'Sudah Terdaftar di Proyek Lain'
    }
    if (isProyekKkn && isMahasiswaHaveKelompok && !isMahasiswaKetua) {
      return 'Tunggu Ketua Kelompok untuk mendaftar'
    }
    if (isProyekKkn && !isMahasiswaHaveKelompok && !isMahasiswaKetua) {
      return 'Daftar'
    }
    if (!isProyekKkn && !isMahasiswaHaveProyek) {
      return 'Daftar'
    }
    if (isProyekKkn && isMahasiswaHaveKelompok) {
      return 'Daftar'
    } if (isDosen && isDosenHaveProyek !== proyek.id) {
      return 'Sudah Terdaftar di Proyek lain'
    }
    if (isMahasiswaKetua && !isMahasiswaHaveKelompok && isProyekKkn) {
      return 'Buatlah Kelompok terlebih dahulu'
    }
    if (isProyekKkn && !isMahasiswaHaveKelompok && isMahasiswaKetua) {
      return 'Buat Kelompok terlebih dahulu'
    }
    if (isMahasiswaKetua && !isProyekKkn && isMahasiswaHaveKelompok) {
      return 'Daftar'
    }
    if (!isMahasiswaKetua && !isProyekKkn && isMahasiswaHaveKelompok) {
      return 'Daftar'
    }
    if (isMahasiswaHaveProyek === proyek.id) {
      return 'Sudah Terdaftar di Proyek ini'
    }
    return 'Ga masuk kondisi'
  }
  const boolDaftarBasedOnStatus = () => {
    if (proyek.bolehDimulai) {
      return true
    }
    if (proyek.telahSelesai) {
      return true
    }
    if (proyek.batasOrang === (proyek.kelompok?.length || proyek.mahasiswa?.length)) {
      return true
    }
    if (isMahasiswaHaveProyek === proyek.id) {
      return true
    }
    if (isDosen && isDosenHaveProyek) {
      return true
    }
    if (isDosen && !isDosenHaveProyek) {
      return true
    }
    if (isMahasiswaHaveProyek) {
      return true
    }

    if (isProyekKkn && isMahasiswaHaveKelompok && !isMahasiswaKetua) {
      return true
    }
    if (!user) {
      return true
    }
    if (isDosen && isDosenHaveProyek !== proyek.id) {
      return true
    }
    if (isMahasiswaKetua && !isMahasiswaHaveKelompok && isProyekKkn) {
      return true
    }
    if (!isMahasiswaKetua && !isProyekKkn) {
      return
    }
    if (isProyekKkn && !isMahasiswaHaveKelompok && isMahasiswaKetua) {
      return true
    }
    if (isMahasiswaKetua && !isProyekKkn && isMahasiswaHaveKelompok) {
      return true
    }
    if (!isProyekKkn && !isMahasiswaHaveProyek) {
      return true
    }


    return false
  }


  const allLoading = loadingUpdate || loadingUpdateMahasiswa



  return (
    <ScrollView
      contentContainerStyle={
        baseStyles.centerContainer
      }
    >
      <View
        style={[
          baseStyles.innerCenterContainer, {
            paddingVertical: 20,
            flex: 1
          }
        ]}
      >
        {
          allLoading && (
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
              Batas Kelompok
            </Text>
            <Text style={styles.infoValue}>{
              proyek.kelompok?.length
            } / {proyek.batasOrang}   </Text>
          </View>
        )}
        {proyek.type === TypeProyek.Kkp && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>
              Batas Orang
            </Text>
            <Text style={styles.infoValue}>{
              proyek.mahasiswa?.length
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
          <Text style={styles.infoValue}>
            {
              parseDate(+proyek.tanggalMulai!)
            }
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Tanggal selesai</Text>
          <Text style={styles.infoValue}>
            {parseDate(+proyek.tanggalSelesai!)}</Text>
        </View>
        <View style={{
          ...styles.infoContainer,
          justifyContent: 'center',
        }}>
        </View>
        <View
          style={{
            gap: 8
          }}
        >
          {proyek?.kelompok?.length! > 0 && (
            <Text style={styles.infoLabel}>Kelompok :</Text>
          )}
          {proyek.type === TypeProyek.Kkn && (
            <View style={{
              marginBottom: 16
            }}>
              <View
                style={{
                  gap: 4,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                {proyek.kelompok!.length > 0 ? proyek?.kelompok!.map((k, index) => (
                  <View key={index}
                    style={{
                      gap: 4
                    }}
                  >
                    <Text

                    >
                      {k?.name ? wordFirstUpper(k?.name!) : ''}
                    </Text>
                    <Text style={styles.infoValue}>{k?.name}</Text>
                    {(!isMahasiswaKetua || isDosen) && (
                      <>

                        {titleDaftarBasedOnStatus() === 'Daftar'
                          && (
                            // <Button
                            //   title={
                            //     titleDaftarBasedOnStatus()
                            //   }
                            //   disabled={
                            //     boolDaftarBasedOnStatus()
                            //   }
                            //   onPress={() => onDaftar(k?.id)}
                            // />
                            <TouchableOpacity
                              style={
                                [
                                  baseStyles.primaryButton, {
                                    width: 90
                                  }
                                ]
                              }
                              onPress={() =>
                                onDaftar(k?.id)
                              }
                            >
                              <Text style={baseStyles.textButton}>
                                {titleDaftarBasedOnStatus()}
                              </Text>
                            </TouchableOpacity>
                          )}
                      </>
                    )}
                  </View>
                )) : (
                  <Text style={styles.infoValue}>
                    Belum ada kelompok
                  </Text>
                )}
              </View>
            </View>
          )}
        </View>



        {/* KKN */}
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

        {/* KKP */}
        {proyek.type === TypeProyek.Kkp && proyek.mahasiswa?.length! > 0 ? (
          <View style={{
            gap: 8,
            marginBottom: 12
          }}>
            <Text>
              Mahasiswa
            </Text>
            <View
              style={{
                gap: 4,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >

              {proyek.mahasiswa!.length > 0 ? proyek?.mahasiswa!.map((k, index) => (
                <Text key={
                  index
                } style={styles.infoValue}>{k?.fullname}</Text>
              )) : (
                <Text style={styles.infoValue}>
                  Belum ada Anggota
                </Text>
              )}
            </View>
          </View>
        ) : proyek.type === TypeProyek.Kkp && (
          <Text style={{
            marginBottom: 12
          }}>
            Belum ada yang mendaftar
          </Text>
        )}
        {/* {!isProyekKkn && (
          <Button
            title={titleDaftarBasedOnStatus()}
            onPress={() => onDaftar()}
            disabled={
              boolDaftarBasedOnStatus()
            }
          />
        )} */}
        {/* DOSEN */}
        {/*  */}
        {/* {isProyekKkn && isDosen && isDosenHaveProyek === proyek.id && (
          <Button
            title='Sudah Terdaftar di Proyek ini'
            disabled
          />
        )} */}
        {/* {isDosen && isDosenHaveProyek && isDosenHaveProyek !== proyek.id && (
          <Button
            title='Sudah Terdaftar di Proyek lain'
            disabled
          />
        )} */}
        {titleDaftarBasedOnStatus() && (
          <TouchableOpacity
            style={
              [
                baseStyles.primaryButton,
                boolDaftarBasedOnStatus() && {
                  backgroundColor: COLORS.grey
                }
              ]
            }
            onPress={() =>
              onDaftar()
            }
            disabled={
              boolDaftarBasedOnStatus()
            }
          >
            <Text style={baseStyles.textButton}>
              {titleDaftarBasedOnStatus()}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
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
