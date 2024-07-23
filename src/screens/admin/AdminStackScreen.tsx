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
import FakultasNavigator from '../../navigators/FakultasNavigator'
import KonsentrasiNavigator from '../../navigators/KonsentrasiNavigator'
import ProgramStudiNavigator from '../../navigators/ProgramStudiNavigator'
import AngkatanScreen from './AngkatanScreen'
import KelasScreen from './KelasScreen'
import KelompokScreen from './KelompokScreen'
import AngkatanNavigator from '../../navigators/AngkatanNavigator'
import KelasNavigator from '../../navigators/KelasNavigator'
import PersyaratanNavigator from '../../navigators/PersyaratanNavigator'
import KelompokNavigator from '../../navigators/KelompokNavigator'



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
      <AdminStack.Screen name="Fakultas" component={FakultasNavigator} />
      <AdminStack.Screen name="Konsentrasi" component={KonsentrasiNavigator}
      />
      <AdminStack.Screen name="ProgramStudi" component={ProgramStudiNavigator} />
      <AdminStack.Screen name="Pendaftaran" component={PendaftaranScreen} />
      <AdminStack.Screen name='Persyaratan' component={PersyaratanNavigator} />
      <AdminStack.Screen name="Proyek" component={ProyekScreen} />
      <AdminStack.Screen name="Angkatan" component={AngkatanNavigator} />
      <AdminStack.Screen name="Kelas" component={KelasNavigator} />
      <AdminStack.Screen name="Kelompok" component={KelompokNavigator} />
    </AdminStack.Navigator>
  )
}

export default AdminStackScreen

const styles = StyleSheet.create({})