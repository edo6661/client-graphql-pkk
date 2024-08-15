import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getLaporanByProyekId } from '../../api/query/laporan.query'
import { useAuthContext } from '../../contexts/AuthContext'
import { Laporan, MutationDeleteLaporanArgs, Proyek, RoleMahasiswa, TypeProyek } from '../../__generated__/graphql'
import { defaultImage } from '../../utils/image'
import { LaporanProyekScreenProps, MahasiswaProyekLaporanScreenProps } from '../../types/navigator.type'
import { deleteLaporan } from '../../api/mutation/laporan.mutation'
import ModalClose from '../../components/ModalClose'
import { getProyek } from '../../api/query/proyek.query'
import { COLORS } from '../../constants/colors'
import { baseStyles } from '../../styles'

const LaporanProyekScreen = (
  { navigation }: MahasiswaProyekLaporanScreenProps
) => {
  const { user } = useAuthContext()
  const proyekId = user?.mahasiswa?.proyekId ?? (user?.mahasiswa?.kelompok?.proyekId || user?.dosen?.proyekId)
  const { data, error, loading, refetch } = useQuery(getLaporanByProyekId, {
    variables: { proyekId },
    skip: !proyekId
  })

  const { data: proyek,
    loading: loadingProyek
  } = useQuery<{
    getProyek: Proyek
  }>(getProyek, {
    variables: {
      id: proyekId
    }
  })




  const [remove, {
    loading: loadingRemove
  }] = useMutation<{
    deleteLaporan: Laporan
  }, MutationDeleteLaporanArgs>(deleteLaporan, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found')
      if (!data.deleteLaporan) return console.error('Data deleteLaporan not found')
      cache.modify({
        fields: {
          getLaporanByProyekId(existingLaporans = [], { readField }) {
            return existingLaporans.filter((laporan: Laporan) =>
              readField('id', laporan) !== data.deleteLaporan.id
            )
          }
        }
      })
    }
  })
  const onRemove = async (item: Laporan) => {
    try {
      const res = await remove({
        variables: {
          id: item.id
        },
        optimisticResponse: {
          deleteLaporan: {
            ...item,
            __typename: 'Laporan'
          }
        }
      })
    } catch (err) {
      console.error(err)
    }
  }


  const isKetua = user?.mahasiswa?.role === RoleMahasiswa.Ketua

  if (error) return <Text>Error: {error.message}</Text>


  const renderItem = ({ item }: {
    item: Laporan
  }) => (
    <TouchableOpacity style={styles.itemContainer}
      onPress={() =>
        navigation.navigate('DetailsLaporanProyek', { id: item.id })
      }
    >
      <View style={{
        gap: 4
      }}>
        <Image source={{ uri: defaultImage(item.photo!) }} style={styles.image} />
        <Text style={styles.title}>{item.proyek.name}</Text>
        <Text style={styles.subtitle}>Dari: {item.mahasiswa.fullname}</Text>
        <Text style={styles.subtitle}>Feedback: {item.feedback ?? 'N/A'}</Text>

      </View>
      {isKetua && (
        <View

        >
          <ModalClose
            action={onRemove}
            item={item}
            trigger='Delete'
          />

        </View>)}
    </TouchableOpacity>
  )

  const allLoading = loading || loadingProyek || loadingRemove

  return (
    <View style={styles.container}>
      <View style={[
        baseStyles.innerCenterContainer, {
          paddingVertical: 20,
          gap: 16,
          flex: 1
        }
      ]}>
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
        {!allLoading && (
          <FlatList
            data={data.getLaporanByProyekId}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text>Belum ada laporan</Text>}
          />
        )}
        {!allLoading && user?.mahasiswa && (isKetua || proyek?.getProyek.type === TypeProyek.Kkp) && (

          <TouchableOpacity style={baseStyles.primaryButton}
            onPress={() => navigation.navigate('CreateLaporanProyek')}
          >
            <Text style={baseStyles.textButton}>Create Laporan</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default LaporanProyekScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  itemContainer: {
    marginBottom: 16,
    borderRadius: 8,
    gap: 8
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  subtitle: {
    fontSize: 16,
    color: '#555'
  }
})
