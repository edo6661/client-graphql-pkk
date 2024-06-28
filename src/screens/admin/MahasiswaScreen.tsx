import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client'
import { getMahasiswas } from '../../api/query/mahasiswa.query'
import { baseStyles } from '../../styles'
import TemporaryLoading from '../../components/state/TemporaryLoading'
import TemporaryError from '../../components/state/TemporaryError'

const MahasiswaScreen = () => {
  const { data, loading, error, } = useQuery(getMahasiswas)
  console.log(error)
  return (
    <View
      style={
        baseStyles.container
      }
    >
      <Text>MahasiswaScreen</Text>
      {loading && <TemporaryLoading />}
      {error && <TemporaryError err={error} />}
      <FlatList
        data={data?.mahasiswas}
        renderItem={({ item }) => (
          <Text>{item.fullname}</Text>
        )}
        keyExtractor={(item) => item.id} />
    </View>
  )
}

export default MahasiswaScreen

const styles = StyleSheet.create({})