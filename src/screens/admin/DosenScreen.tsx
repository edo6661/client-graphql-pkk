import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { AdminStackScreenProps } from '../../types/adminNavigator.type'
import { useQuery } from '@apollo/client'
import { getDosen } from '../../api/query/dosen.query'
import { Dosen } from '../../__generated__/graphql'
import ModalClose from '../../components/ModalClose'

const DosenScreen = (
  { navigation }: AdminStackScreenProps<'Dosen'>
) => {

  const { data, loading } = useQuery<{
    dosens: Array<Dosen>
  }>(getDosen)

  const deleteDosen = (item: Dosen) => {
    try {
      console.log("Delte Dosen")
      console.log("ITEM", item)

    } catch (err) {
      console.error(err)
    }
  }
  return (
    <View>
      <Text>DosenScreen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={data?.dosens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.fullname}</Text>
            </View>
            <ModalClose
              item={item}
              action={deleteDosen}
              trigger='Delete'
            />
          </View>
        )}
      />
    </View>
  )
}

export default DosenScreen

const styles = StyleSheet.create({})