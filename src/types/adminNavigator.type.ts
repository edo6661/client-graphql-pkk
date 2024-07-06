import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RouteProp } from "@react-navigation/native";
import { AdminFields } from "./admin.type";

// ! AdminStack
export type AdminStackParamList = {
  AdminBottomTab: undefined;
  Admin: undefined;
  Dashboard: undefined;
  Dosen: undefined;
  Mahasiswa: undefined;
  Fakultas: undefined;
  Konsentrasi: undefined;
  ProgramStudi: undefined;
  Pendaftaran: undefined;
  Persyaratan: undefined;
  Proyek: undefined;
  Create: undefined;
}

export type AdminStackScreenProps<T extends keyof AdminStackParamList> = {
  navigation: NativeStackNavigationProp<AdminStackParamList, T>;
  route: RouteProp<AdminStackParamList, T>;
}
// ! AdminBottomTab

export type AdminBottomTabParamList = {
  Dashboard: undefined;
  Create: undefined;
}


// ! AdminNavigator
type EntityNavigatorParamList<Entity extends string> = {
  [E in Entity]: undefined; // ! Membuat key dengan nama entitas, misalnya 'Admins' atau 'Dosens'
} & {
  [K in `Details${Entity}`]: { // ! Membuat key dengan nama 'Details{Entity}', misalnya 'DetailsAdmins' atau 'DetailsDosens'
    id: string; // Properti 'id' untuk key 'Details{Entity}'
  };
}
export type AdminNavigatorParamList = EntityNavigatorParamList<"Admins">
export type UnionAdminNavigatorParamList = keyof AdminNavigatorParamList;

export type DosenNavigatorParamList = EntityNavigatorParamList<"Dosens">
export type UnionDosenNavigatorParamList = keyof DosenNavigatorParamList;


// ! AdminNavigatorScreenProps

// gampang nya begini:
// export type AdminNavigatorScreenProps<T extends keyof AdminNavigatorParamList> = {
//   navigation: NativeStackNavigationProp<AdminNavigatorParamList, T>;
//   route: RouteProp<AdminNavigatorParamList, T>;
// }


export type EntityNavigatorScreenProps<
  Entity extends string,
  ParamList extends EntityNavigatorParamList<Entity>
> = {
  
  navigation: NativeStackNavigationProp<ParamList, keyof ParamList>; // ! key of paramlist soalnya : Admins, DetailsAdmins yang isinya id, cuman boleh dua itu
  // ! key of paramlist soalnya : Admins, DetailsAdmins yang isinya id, cuman boleh dua itu
  route: RouteProp<ParamList, keyof ParamList>;
};
// ! nge extends UnionAdminNavigatorParamList biar gak salah masukin key dan dapet auto completion dari IDE
export type AdminNavigatorScreenProps<_T extends UnionAdminNavigatorParamList> = EntityNavigatorScreenProps<
  'Admins',
  AdminNavigatorParamList
>;



