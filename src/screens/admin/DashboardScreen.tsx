import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { baseStyles } from '../../styles'
import { listRouteDashboard } from '../../constants/dashboard'
import { AdminStackParamList, AdminStackScreenProps } from '../../types/adminNavigator.type'
import { useQuery } from '@apollo/client'
import { getCurrentUser } from '../../api/query/auth.query'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const DashboardScreen = (
  { navigation }: AdminStackScreenProps<'Dashboard'>
) => {

  const { logout, user } = useAuthContext()
  const { data, error } = useQuery(getCurrentUser)
  console.log(data)
  console.log(error)
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(item as any);
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );


  return (
    <View
      style={baseStyles.container}
    >
      <Text>DashboardScreen</Text>


      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <FlatList
        data={listRouteDashboard}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={{
          gap: 4
        }}
      />

    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})