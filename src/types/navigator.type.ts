import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  BottomTab: undefined;
  AdminStack: undefined;
}
export type BottomTabParamList ={
  Home: undefined;
  Auth: undefined;
  Dashboard: undefined;
  UserProyekNavigator: undefined;
  YourProyekNavigator: undefined;
  UserKelompokNavigator: undefined;
  Profile: undefined;
}
export type HomeScreenProps ={
  navigation: NativeStackNavigationProp<BottomTabParamList, 'Home'>;
}
export type AuthScreenProps ={
  navigation: NativeStackNavigationProp<BottomTabParamList, 'Auth'>;
}

export type UserProyekNavigatorParamList ={
  UserProyek: undefined;
  UserDetailsProyek: {id: string};
}
export type MahasiswaProyekNavigatorParamList ={
  MahasiswaProyek: undefined;
  LaporanProyek: undefined;
  BiayaOperasionalProyek: undefined;
}
export type UserKelompokNavigatorParamList ={
  UserKelompok: undefined;
  DetailsUserKelompok: {id: string};
}
export type UserKelompokNavigatorProps ={
  navigation: NativeStackNavigationProp<UserKelompokNavigatorParamList, 'UserKelompok'>;
}
export type DetailsUserKelompokScreenProps ={
  navigation: NativeStackNavigationProp<UserKelompokNavigatorParamList, 'UserKelompok'>;
  route: RouteProp<UserKelompokNavigatorParamList, 'UserKelompok'>;
}

export type MahasiswaProyekNavigatorProps ={
  navigation: NativeStackNavigationProp<MahasiswaProyekNavigatorParamList, 'MahasiswaProyek'>;
}
export type MahasiswaDetailsProyekScreenProps ={
  navigation: NativeStackNavigationProp<MahasiswaProyekNavigatorParamList, 'MahasiswaProyek'>;
  route: RouteProp<MahasiswaProyekNavigatorParamList, 'MahasiswaProyek'>;
}
export type LaporanProyekScreenProps ={
  navigation: NativeStackNavigationProp<MahasiswaProyekNavigatorParamList, 'LaporanProyek'>;
}
export type BiayaOperasionalProyekScreenProps ={
  navigation: NativeStackNavigationProp<MahasiswaProyekNavigatorParamList, 'BiayaOperasionalProyek'>;
}
export type ProyeksScreenProps ={
  navigation?: NativeStackNavigationProp<UserProyekNavigatorParamList, 'UserProyek'>;
}
export type DetailsProyekScreenProps ={
  navigation: NativeStackNavigationProp<UserProyekNavigatorParamList, 'UserDetailsProyek'>;
  route: RouteProp<UserProyekNavigatorParamList, 'UserDetailsProyek'>;
}

