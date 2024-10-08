import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export type RootStackParamList = {
  BottomTab: undefined;
  AdminStack: undefined;
  Profile: undefined;
}
export type BottomTabParamList ={
  Home: undefined;
  Auth: undefined;
  Dashboard: undefined;
  UserProyekNavigator: undefined;
  YourProyekNavigator: undefined;
  UserKelompokNavigator: undefined;
  Profile: undefined;
  Photo: undefined;
  Pdf: undefined;
  AuthNavigator: undefined;
}
export type AuthenticationNavigatorParamList = {
  Register: undefined;
  Login: undefined;
}

export type ProfileOptionsNavigatorParamList = {
  ProfileOptions: undefined;
  EditProfile: undefined;
}

export type ProfileOptionsScreenProps = {
  navigation: NativeStackNavigationProp<ProfileOptionsNavigatorParamList, 'ProfileOptions'>;
}

export type EditProfileScreenProps = {
  navigation: NativeStackNavigationProp<ProfileOptionsNavigatorParamList, 'EditProfile'>;
}

export type LoginScreenProps = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthenticationNavigatorParamList, 'Login'>,
    BottomTabNavigationProp<BottomTabParamList>
  >;
};
export type RegisterScreenProps = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthenticationNavigatorParamList, 'Register'>,
    BottomTabNavigationProp<BottomTabParamList>
  >;
};

export type HomeScreenProps ={
  navigation: NativeStackNavigationProp<BottomTabParamList, 'Home'>;
}
export type AuthScreenProps ={
  navigation: NativeStackNavigationProp<BottomTabParamList, 'Auth'>;
}
export type ProfileScreenProps ={
  navigation: NativeStackNavigationProp<BottomTabParamList, 'Profile'>;
}

export type UserProyekNavigatorParamList ={
  UserProyek: undefined;
  UserDetailsProyek: {id: string};
}
export type MahasiswaProyekNavigatorParamList ={
  MahasiswaProyek: undefined;
  LaporanProyekNavigator: undefined;
  BiayaOperasionalProyek: undefined;
  KelompokProyek: {
    id: string;
  }
  MahasiswaDetailsProyek: {
    id: string;
  }
  
}
export type MahasiswaProyekLaporanNavigatorParamList = {
  LaporanProyek: undefined;
  CreateLaporanProyek: undefined;
  DetailsLaporanProyek: {id: string};
}
export type UserKelompokNavigatorParamList ={
  UserKelompok: undefined;
  DetailsUserKelompok: {id: string};
}
export type MahasiswaProyekLaporanScreenProps = {
  navigation: NativeStackNavigationProp<MahasiswaProyekLaporanNavigatorParamList, 'LaporanProyek'>;
}

export type CreateLaporanProyekScreenProps = {
  navigation: NativeStackNavigationProp<MahasiswaProyekLaporanNavigatorParamList, 'CreateLaporanProyek'>;
}
export type DetailsLaporanProyekScreenProps = {
  navigation: NativeStackNavigationProp<MahasiswaProyekLaporanNavigatorParamList, 'DetailsLaporanProyek'>;
  route: RouteProp<MahasiswaProyekLaporanNavigatorParamList, 'DetailsLaporanProyek'>;
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
  route: RouteProp<MahasiswaProyekNavigatorParamList, 'MahasiswaDetailsProyek'>;
}
export type LaporanProyekScreenProps ={
  navigation: NativeStackNavigationProp<MahasiswaProyekNavigatorParamList, 'LaporanProyekNavigator'>;
}
export type BiayaOperasionalProyekScreenProps ={
  navigation: NativeStackNavigationProp<MahasiswaProyekNavigatorParamList, 'BiayaOperasionalProyek'>;
}

export type KelompokProyekScreenProps ={
  navigation: NativeStackNavigationProp<MahasiswaProyekNavigatorParamList, 'KelompokProyek'>;
  route: RouteProp<MahasiswaProyekNavigatorParamList, 'KelompokProyek'>;
}
export type MahasiswaProyekScreenProps ={
  navigation: NativeStackNavigationProp<MahasiswaProyekNavigatorParamList, 'KelompokProyek'>;
  route: RouteProp<MahasiswaProyekNavigatorParamList, 'MahasiswaDetailsProyek'>;
}
export type ProyeksScreenProps ={
  navigation?: NativeStackNavigationProp<UserProyekNavigatorParamList, 'UserProyek'>;
}
export type DetailsProyekScreenProps ={
  navigation: NativeStackNavigationProp<UserProyekNavigatorParamList, 'UserDetailsProyek'>;
  route: RouteProp<UserProyekNavigatorParamList, 'UserDetailsProyek'>;
}

