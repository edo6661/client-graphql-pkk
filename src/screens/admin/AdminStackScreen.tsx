import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DosenScreen from './DosenScreen'
import MahasiswaScreen from './MahasiswaScreen'
import FakultasScreen from './FakultasScreen'
import KonsentrasiScreen from './KonsentrasiScreen'
import ProgramStudiScreen from './ProgramStudiScreen'
import PendaftaranScreen from './PendaftaranScreen'
import PersyaratanScreen from './PersyaratanScreen'
import AdminScreen from './AdminScreen'
import ProyekScreen from './ProyekScreen'
import AdminBottomTabs from '../../tabs/AdminBottomTabs'
import { AdminStackParamList } from '../../types/adminNavigator.type'
import AdminNavigator from '../../navigators/AdminNavigator'
import DosenNavigator from '../../navigators/DosenNavigator'
import MahasiswaNavigator from '../../navigators/MahasiswaNavigator'



const AdminStack = createStackNavigator<AdminStackParamList>()

const AdminStackScreen = () => {
  return (
    <AdminStack.Navigator
      initialRouteName="AdminBottomTab"
      screenOptions={{
        headerShown: false
      }}
    >
      <AdminStack.Screen name="AdminBottomTab" component={AdminBottomTabs}
      />
      <AdminStack.Screen name="Mahasiswa" component={MahasiswaNavigator} />
      <AdminStack.Screen name="Admin" component={AdminNavigator} />
      <AdminStack.Screen name="Dosen" component={DosenNavigator} />
      <AdminStack.Screen name="Fakultas" component={FakultasScreen} />
      <AdminStack.Screen name="Konsentrasi" component={KonsentrasiScreen} />
      <AdminStack.Screen name="ProgramStudi" component={ProgramStudiScreen} />
      <AdminStack.Screen name="Pendaftaran" component={PendaftaranScreen} />
      <AdminStack.Screen name="Persyaratan" component={PersyaratanScreen} />
      <AdminStack.Screen name="Proyek" component={ProyekScreen} />
    </AdminStack.Navigator>
  )
}

export default AdminStackScreen

const styles = StyleSheet.create({})