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



const AdminStack = createStackNavigator<AdminStackParamList>()

const AdminStackScreen = () => {
  return (
    <AdminStack.Navigator
      initialRouteName="AdminBottomTab"
    >
      <AdminStack.Screen name="AdminBottomTab" component={AdminBottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <AdminStack.Screen name="Dosen" component={DosenScreen} />
      <AdminStack.Screen name="Mahasiswa" component={MahasiswaScreen} />
      <AdminStack.Screen name="Fakultas" component={FakultasScreen} />
      <AdminStack.Screen name="Konsentrasi" component={KonsentrasiScreen} />
      <AdminStack.Screen name="ProgramStudi" component={ProgramStudiScreen} />
      <AdminStack.Screen name="Pendaftaran" component={PendaftaranScreen} />
      <AdminStack.Screen name="Persyaratan" component={PersyaratanScreen} />
      <AdminStack.Screen name="Admin" component={AdminScreen} />
      <AdminStack.Screen name="Proyek" component={ProyekScreen} />
    </AdminStack.Navigator>
  )
}

export default AdminStackScreen

const styles = StyleSheet.create({})