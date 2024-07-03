import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RouteProp } from "@react-navigation/native";

export type AdminStackParamList = {
  Dashboard: undefined;
  Dosen: undefined;
  Mahasiswa: undefined;
  Fakultas: undefined;
  Konsentrasi: undefined;
  ProgramStudi: undefined;
  Pendaftaran: undefined;
  Persyaratan: undefined;
  Admin: undefined;
  Proyek: undefined;
  AdminBottomTab: undefined;
  Create: undefined;
}

export type AdminStackScreenProps<T extends keyof AdminStackParamList> = {
  navigation: NativeStackNavigationProp<AdminStackParamList, T>;
  route: RouteProp<AdminStackParamList, T>;
}
export type AdminStackChildProps<T extends keyof AdminStackParamList> = {
  navigate: NativeStackNavigationProp<AdminStackParamList, T>;
  route: RouteProp<AdminStackParamList, T>;
  
}



export type AdminBottomTabParamList = {
  Dashboard: undefined;
  Create: undefined;
}


