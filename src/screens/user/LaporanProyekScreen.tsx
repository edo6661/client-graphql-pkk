import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getLaporanByProyekId } from '../../api/query/laporan.query'
import { useAuthContext } from '../../contexts/AuthContext'
import { Laporan, MutationDeleteLaporanArgs, RoleMahasiswa } from '../../__generated__/graphql'
import { defaultImage } from '../../utils/image'
import { LaporanProyekScreenProps, MahasiswaProyekLaporanScreenProps } from '../../types/navigator.type'
import { deleteLaporan } from '../../api/mutation/laporan.mutation'
import ModalClose from '../../components/ModalClose'

const LaporanProyekScreen = (
  { navigation }: MahasiswaProyekLaporanScreenProps
) => {
  const { user } = useAuthContext()
  const proyekId = user?.mahasiswa?.proyekId ?? (user?.mahasiswa?.kelompok?.proyekId || user?.dosen?.proyekId)
  const { data, error, loading, refetch } = useQuery(getLaporanByProyekId, {
    variables: { proyekId }
  })




  const [remove] = useMutation<{
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

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error.message}</Text>

  const renderItem = ({ item }: {
    item: Laporan
  }) => (
    <TouchableOpacity style={styles.itemContainer}
      onPress={() =>
        navigation.navigate('DetailsLaporanProyek', { id: item.id })
      }
    >
      <Image source={{ uri: defaultImage(item.proyek.photo!) }} style={styles.image} />
      <Text style={styles.title}>{item.proyek.name}</Text>
      <Text style={styles.subtitle}>Dari: {item.mahasiswa.fullname}</Text>
      <Text style={styles.subtitle}>Feedback: {item.feedback ?? 'N/A'}</Text>
      {isKetua && (
        <ModalClose
          action={onRemove}
          item={item}
          trigger='Delete'
        />
      )}
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Laporan Proyek</Text>
      <FlatList
        data={data.getLaporanByProyekId}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {isKetua && (
        <Button
          title='Create Laporan'
          onPress={() => navigation.navigate('CreateLaporanProyek')}
        />
      )}
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
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#f9f9f9'
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
