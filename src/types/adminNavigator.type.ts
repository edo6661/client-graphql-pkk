/* eslint-disable prettier/prettier */
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RouteProp} from '@react-navigation/native';

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
  Kelas: undefined;
  Kelompok: undefined;
  Angkatan: undefined;
};

export type AdminStackScreenProps<T extends keyof AdminStackParamList> = {
  navigation: NativeStackNavigationProp<AdminStackParamList, T>;
  route: RouteProp<AdminStackParamList, T>;
};
// ! AdminBottomTab

export type AdminBottomTabParamList = {
  Dashboard: undefined;
  Create: undefined;
};

// ! AdminNavigator
type EntityNavigatorParamList<Entity extends string> = {
  [E in Entity]: undefined; // ! Membuat key dengan nama entitas, misalnya 'Admins' atau 'Dosens'
} & {
  [K in `Details${Entity}`]: {
    // ! Membuat key dengan nama 'Details{Entity}', misalnya 'DetailsAdmins' atau 'DetailsDosens'
    id: string; // Properti 'id' untuk key 'Details{Entity}'
  };
};
export type AdminNavigatorParamList = EntityNavigatorParamList<'Admins'>;
export type UnionAdminNavigatorParamList = keyof AdminNavigatorParamList;

export type DosenNavigatorParamList = EntityNavigatorParamList<'Dosens'>;
export type UnionDosenNavigatorParamList = keyof DosenNavigatorParamList;

export type MahasiswaNavigatorParamList =
  EntityNavigatorParamList<'Mahasiswas'>;
export type UnionMahasiswaNavigatorParamList =
  keyof MahasiswaNavigatorParamList;

export type FakultasNavigatorParamList = EntityNavigatorParamList<'Fakultass'>;
export type UnionFakultasNavigatorParamList = keyof FakultasNavigatorParamList;
export type KonsentrasiNavigatorParamList = EntityNavigatorParamList<'Konsentrasis'>;
export type UnionKonsentrasiNavigatorParamList = keyof KonsentrasiNavigatorParamList;

export type ProgramStudiNavigatorParamList = EntityNavigatorParamList<'ProgramStudis'>;
export type UnionProgramStudiNavigatorParamList = keyof ProgramStudiNavigatorParamList;

export type KelasNavigatorParamList = EntityNavigatorParamList<'Kelass'>;
export type UnionKelasNavigatorParamList = keyof KelasNavigatorParamList;
export type AngkatanNavigatorParamList = EntityNavigatorParamList<'Angkatans'>;
export type UnionAngkatanNavigatorParamList = keyof AngkatanNavigatorParamList;
export type KelompokNavigatorParamList = EntityNavigatorParamList<'Kelompoks'>;
export type UnionKelompokNavigatorParamList = keyof KelompokNavigatorParamList;
export type ProyekNavigatorParamList = EntityNavigatorParamList<'Proyeks'>;
export type UnionProyekNavigatorParamList = keyof ProyekNavigatorParamList;

export type PersyaratanNavigatorParamList = EntityNavigatorParamList<'Persyaratans'>;
export type UnionPersyaratanNavigatorParamList = keyof PersyaratanNavigatorParamList;


// ! AdminNavigatorScreenProps

// ! gampang nya begini:
// export type AdminNavigatorScreenProps<T extends keyof AdminNavigatorParamList> = {
//   navigation: NativeStackNavigationProp<AdminNavigatorParamList, T>;
//   route: RouteProp<AdminNavigatorParamList, T>;
// }

export type AdminNavigator =
  | 'Admins'
  | 'Dosens'
  | 'Mahasiswas'
  | 'Fakultass'
  | 'Konsentrasis'
  | 'ProgramStudis'
  | 'Pendaftaran'
  | 'Persyaratans'
  | 'Proyeks'
  | 'Kelass'
  | 'Kelompoks'
  | 'Angkatans';

export type EntityAdminNavigatorScreenProps<
  Entity extends AdminNavigator,
  ParamList extends EntityNavigatorParamList<Entity>,
> = {
  navigation: NativeStackNavigationProp<ParamList, keyof ParamList>; // ! key of paramlist soalnya : Admins, DetailsAdmins yang isinya id, cuman boleh dua itu
  // ! key of paramlist soalnya : Admins, DetailsAdmins yang isinya id, cuman boleh dua itu
  route: RouteProp<ParamList, keyof ParamList>;
};
// ! nge extends UnionAdminNavigatorParamList biar gak salah masukin key dan dapet auto completion dari IDE
export type AdminNavigatorScreenProps<_T extends UnionAdminNavigatorParamList> =
  EntityAdminNavigatorScreenProps<'Admins', AdminNavigatorParamList>;

export type DosenNavigatorScreenProps<_T extends UnionDosenNavigatorParamList> =
  EntityAdminNavigatorScreenProps<'Dosens', DosenNavigatorParamList>;

export type MahasiswaNavigatorScreenProps<
  _T extends UnionMahasiswaNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'Mahasiswas', MahasiswaNavigatorParamList>;

export type FakultasNavigatorScreenProps<
  _T extends UnionFakultasNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'Fakultass', FakultasNavigatorParamList>;

export type KonsentrasiNavigatorScreenProps<
  _T extends UnionKonsentrasiNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'Konsentrasis', KonsentrasiNavigatorParamList>;

export type ProgramStudiNavigatorScreenProps<
  _T extends UnionProgramStudiNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'ProgramStudis', ProgramStudiNavigatorParamList>;
export type KelasNavigatorScreenProps<
  _T extends UnionKelasNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'Kelass', KelasNavigatorParamList>;
export type AngkatanNavigatorScreenProps<
  _T extends UnionAngkatanNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'Angkatans', AngkatanNavigatorParamList>;
export type KelompokNavigatorScreenProps<
  _T extends UnionKelompokNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'Kelompoks', KelompokNavigatorParamList>;

export type ProyekNavigatorScreenProps<
  _T extends UnionProyekNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'Proyeks', ProyekNavigatorParamList>;
export type PersyaratanNavigatorScreenProps<
  _T extends UnionPersyaratanNavigatorParamList,
> = EntityAdminNavigatorScreenProps<'Persyaratans', PersyaratanNavigatorParamList>;