/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type Angkatan = {
  __typename?: 'Angkatan';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mahasiswa?: Maybe<Array<Maybe<Mahasiswa>>>;
  tahun: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Bau = {
  __typename?: 'Bau';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type BiayaOperasional = {
  __typename?: 'BiayaOperasional';
  biayaDll: Scalars['Int']['output'];
  biayaProyek: Scalars['Int']['output'];
  biayaTransportasi: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mahasiswa: Mahasiswa;
  proyek: Proyek;
  tanggalBiaya: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Dosen = {
  __typename?: 'Dosen';
  createdAt: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nidn: Scalars['String']['output'];
  proyek?: Maybe<Proyek>;
  proyekId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['String']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type Fakultas = {
  __typename?: 'Fakultas';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  programStudi: Array<ProgramStudi>;
  updatedAt: Scalars['String']['output'];
};

export type Kelas = {
  __typename?: 'Kelas';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mahasiswa: Array<Mahasiswa>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Kelompok = {
  __typename?: 'Kelompok';
  createdAt: Scalars['String']['output'];
  feedback?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mahasiswa?: Maybe<Array<Maybe<Mahasiswa>>>;
  name: Scalars['String']['output'];
  nilai?: Maybe<Scalars['Int']['output']>;
  proyek?: Maybe<Proyek>;
  proyekId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Konsentrasi = {
  __typename?: 'Konsentrasi';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mahasiswa: Array<Mahasiswa>;
  name: Scalars['String']['output'];
  programStudi: ProgramStudi;
  programStudiId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Laporan = {
  __typename?: 'Laporan';
  createdAt: Scalars['String']['output'];
  feedback?: Maybe<Scalars['String']['output']>;
  file: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mahasiswa: Mahasiswa;
  mahasiswaId: Scalars['ID']['output'];
  photo: Scalars['String']['output'];
  proyek: Proyek;
  proyekId: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String']['output'];
};

export type Mahasiswa = {
  __typename?: 'Mahasiswa';
  angkatan?: Maybe<Angkatan>;
  angkatanId?: Maybe<Scalars['ID']['output']>;
  biayaOperasionals?: Maybe<Array<BiayaOperasional>>;
  createdAt: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  kelas?: Maybe<Kelas>;
  kelasId?: Maybe<Scalars['ID']['output']>;
  kelompok?: Maybe<Kelompok>;
  kelompokId?: Maybe<Scalars['ID']['output']>;
  konsentrasi?: Maybe<Konsentrasi>;
  konsentrasiId?: Maybe<Scalars['ID']['output']>;
  laporans?: Maybe<Array<Laporan>>;
  nim: Scalars['String']['output'];
  pendaftaran?: Maybe<Pendaftaran>;
  persyaratan?: Maybe<Persyaratan>;
  prodi?: Maybe<ProgramStudi>;
  prodiId?: Maybe<Scalars['ID']['output']>;
  proyek?: Maybe<Proyek>;
  proyekId?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<RoleMahasiswa>;
  semester: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin?: Maybe<Admin>;
  createAngkatan?: Maybe<Angkatan>;
  createBau?: Maybe<Bau>;
  createBiayaOperasional?: Maybe<BiayaOperasional>;
  createDosen?: Maybe<Dosen>;
  createFakultas?: Maybe<Fakultas>;
  createKelas?: Maybe<Kelas>;
  createKelompok?: Maybe<Kelompok>;
  createKonsentrasi?: Maybe<Konsentrasi>;
  createLaporan?: Maybe<Laporan>;
  createMahasiswa?: Maybe<Mahasiswa>;
  createPendaftaran?: Maybe<Pendaftaran>;
  createPersyaratan?: Maybe<Persyaratan>;
  createProgramStudi?: Maybe<ProgramStudi>;
  createProyek?: Maybe<Proyek>;
  deleteAdmin?: Maybe<Admin>;
  deleteAngkatan?: Maybe<Angkatan>;
  deleteBau?: Maybe<Bau>;
  deleteBiayaOperasional?: Maybe<BiayaOperasional>;
  deleteDosen?: Maybe<Dosen>;
  deleteFakultas?: Maybe<Fakultas>;
  deleteKelas?: Maybe<Kelas>;
  deleteKelompok?: Maybe<Kelompok>;
  deleteKonsentrasi?: Maybe<Konsentrasi>;
  deleteLaporan?: Maybe<Laporan>;
  deleteMahasiswa?: Maybe<Mahasiswa>;
  deletePendaftaran?: Maybe<Pendaftaran>;
  deletePersyaratan?: Maybe<Persyaratan>;
  deleteProgramStudi?: Maybe<ProgramStudi>;
  deleteProyek?: Maybe<Proyek>;
  deleteUser?: Maybe<User>;
  signIn?: Maybe<User>;
  signOut?: Maybe<LogoutResponse>;
  signUp?: Maybe<User>;
  updateAdmin?: Maybe<Admin>;
  updateAngkatan?: Maybe<Angkatan>;
  updateBau?: Maybe<Bau>;
  updateBiayaOperasional?: Maybe<BiayaOperasional>;
  updateDosen?: Maybe<Dosen>;
  updateFakultas?: Maybe<Fakultas>;
  updateKelas?: Maybe<Kelas>;
  updateKelompok?: Maybe<Kelompok>;
  updateKonsentrasi?: Maybe<Konsentrasi>;
  updateLaporan?: Maybe<Laporan>;
  updateMahasiswa?: Maybe<Mahasiswa>;
  updatePendaftaran?: Maybe<Pendaftaran>;
  updatePersyaratan?: Maybe<Persyaratan>;
  updateProgramStudi?: Maybe<ProgramStudi>;
  updateProyek?: Maybe<Proyek>;
  updateUser?: Maybe<User>;
};


export type MutationCreateAdminArgs = {
  fullname: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateAngkatanArgs = {
  tahun: Scalars['Int']['input'];
};


export type MutationCreateBauArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateBiayaOperasionalArgs = {
  biayaDll: Scalars['Int']['input'];
  biayaProyek: Scalars['Int']['input'];
  biayaTransportasi: Scalars['Int']['input'];
  mahasiswaId: Scalars['ID']['input'];
  proyekId: Scalars['ID']['input'];
};


export type MutationCreateDosenArgs = {
  fullname: Scalars['String']['input'];
  nidn: Scalars['String']['input'];
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationCreateFakultasArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateKelasArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateKelompokArgs = {
  feedback?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nilai?: InputMaybe<Scalars['Int']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateKonsentrasiArgs = {
  name: Scalars['String']['input'];
  programStudiId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateLaporanArgs = {
  file?: InputMaybe<Scalars['String']['input']>;
  mahasiswaId: Scalars['ID']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  proyekId: Scalars['ID']['input'];
};


export type MutationCreateMahasiswaArgs = {
  angkatanId?: InputMaybe<Scalars['ID']['input']>;
  fullname: Scalars['String']['input'];
  kelasId?: InputMaybe<Scalars['ID']['input']>;
  kelompokId?: InputMaybe<Scalars['ID']['input']>;
  konsentrasiId?: InputMaybe<Scalars['ID']['input']>;
  nim: Scalars['String']['input'];
  prodiId?: InputMaybe<Scalars['ID']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<RoleMahasiswa>;
  semester: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreatePendaftaranArgs = {
  buktiPembayaran?: InputMaybe<Scalars['String']['input']>;
  mahasiswaId: Scalars['ID']['input'];
};


export type MutationCreatePersyaratanArgs = {
  keteranganKelakuanBaik: Scalars['Boolean']['input'];
  keteranganOrangTua: Scalars['Boolean']['input'];
  keteranganPembayaran: Scalars['Boolean']['input'];
  keteranganSehat: Scalars['Boolean']['input'];
  mahasiswaId: Scalars['ID']['input'];
};


export type MutationCreateProgramStudiArgs = {
  fakultasId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateProyekArgs = {
  batasOrang: Scalars['Int']['input'];
  bolehDimulai?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  lokasi?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  tanggalMulai?: InputMaybe<Scalars['String']['input']>;
  tanggalSelesai?: InputMaybe<Scalars['String']['input']>;
  telahSelesai?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<TypeProyek>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAngkatanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBauArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBiayaOperasionalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDosenArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFakultasArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteKelasArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteKelompokArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteKonsentrasiArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLaporanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMahasiswaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePendaftaranArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePersyaratanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProgramStudiArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProyekArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateAdminArgs = {
  fullname: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateAngkatanArgs = {
  id: Scalars['ID']['input'];
  tahun?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateBauArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateBiayaOperasionalArgs = {
  biayaDll?: InputMaybe<Scalars['Int']['input']>;
  biayaProyek?: InputMaybe<Scalars['Int']['input']>;
  biayaTransportasi?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  mahasiswaId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateDosenArgs = {
  fullname?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  nidn?: InputMaybe<Scalars['String']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateFakultasArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateKelasArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateKelompokArgs = {
  feedback?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  nilai?: InputMaybe<Scalars['Int']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateKonsentrasiArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  programStudiId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateLaporanArgs = {
  feedback?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mahasiswaId?: InputMaybe<Scalars['ID']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMahasiswaArgs = {
  angkatanId?: InputMaybe<Scalars['ID']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  kelasId?: InputMaybe<Scalars['ID']['input']>;
  kelompokId?: InputMaybe<Scalars['ID']['input']>;
  konsentrasiId?: InputMaybe<Scalars['ID']['input']>;
  nim?: InputMaybe<Scalars['String']['input']>;
  prodiId?: InputMaybe<Scalars['ID']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<RoleMahasiswa>;
  semester?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdatePendaftaranArgs = {
  buktiPembayaran?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePersyaratanArgs = {
  id: Scalars['ID']['input'];
  keteranganKelakuanBaik?: InputMaybe<Scalars['Boolean']['input']>;
  keteranganOrangTua?: InputMaybe<Scalars['Boolean']['input']>;
  keteranganPembayaran?: InputMaybe<Scalars['Boolean']['input']>;
  keteranganSehat?: InputMaybe<Scalars['Boolean']['input']>;
  mahasiswaId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateProgramStudiArgs = {
  fakultasId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProyekArgs = {
  batasOrang?: InputMaybe<Scalars['Int']['input']>;
  bolehDimulai?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lokasi?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  tanggalMulai?: InputMaybe<Scalars['String']['input']>;
  tanggalSelesai?: InputMaybe<Scalars['String']['input']>;
  telahSelesai?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<TypeProyek>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
  id: Scalars['ID']['input'];
};

export type Pendaftaran = {
  __typename?: 'Pendaftaran';
  buktiPembayaran: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mahasiswa: Mahasiswa;
  tanggalPendaftaran: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Persyaratan = {
  __typename?: 'Persyaratan';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  keteranganKelakuanBaik: Scalars['Boolean']['output'];
  keteranganOrangTua: Scalars['Boolean']['output'];
  keteranganPembayaran: Scalars['Boolean']['output'];
  keteranganSehat: Scalars['Boolean']['output'];
  mahasiswa: Mahasiswa;
  mahasiswaId: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ProgramStudi = {
  __typename?: 'ProgramStudi';
  createdAt: Scalars['String']['output'];
  fakultas: Fakultas;
  fakultasId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  konsentrasi: Array<Konsentrasi>;
  mahasiswa: Array<Mahasiswa>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Proyek = {
  __typename?: 'Proyek';
  batasOrang?: Maybe<Scalars['Int']['output']>;
  biayaOperasionals?: Maybe<Array<Maybe<BiayaOperasional>>>;
  bolehDimulai?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kelompok?: Maybe<Array<Maybe<Kelompok>>>;
  laporans?: Maybe<Array<Maybe<Laporan>>>;
  lokasi?: Maybe<Scalars['String']['output']>;
  mahasiswa?: Maybe<Array<Maybe<Mahasiswa>>>;
  name?: Maybe<Scalars['String']['output']>;
  pembimbing?: Maybe<Array<Maybe<Dosen>>>;
  photo?: Maybe<Scalars['String']['output']>;
  tanggalMulai?: Maybe<Scalars['String']['output']>;
  tanggalSelesai?: Maybe<Scalars['String']['output']>;
  telahSelesai?: Maybe<Scalars['Boolean']['output']>;
  type: TypeProyek;
  updatedAt: Scalars['String']['output'];
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<Admin>;
  admins: Array<Admin>;
  angkatan?: Maybe<Angkatan>;
  angkatans: Array<Angkatan>;
  authUser?: Maybe<User>;
  bau?: Maybe<Bau>;
  baus?: Maybe<Array<Bau>>;
  biayaOperasionals: Array<BiayaOperasional>;
  dosens: Array<Dosen>;
  fakultas: Array<Fakultas>;
  getBiayaOperasional?: Maybe<BiayaOperasional>;
  getDosen?: Maybe<Dosen>;
  getFakultas?: Maybe<Fakultas>;
  getKonsentrasi?: Maybe<Konsentrasi>;
  getLaporan?: Maybe<Laporan>;
  getLaporanByProyekId: Array<Laporan>;
  getPendaftaran?: Maybe<Pendaftaran>;
  getPersyaratan?: Maybe<Persyaratan>;
  getProyek?: Maybe<Proyek>;
  kelas?: Maybe<Kelas>;
  kelass: Array<Kelas>;
  kelompok?: Maybe<Kelompok>;
  kelompoks: Array<Kelompok>;
  konsentrasis: Array<Konsentrasi>;
  laporans: Array<Laporan>;
  mahasiswa?: Maybe<Mahasiswa>;
  mahasiswas: Array<Mahasiswa>;
  pendaftarans: Array<Pendaftaran>;
  persyaratans: Array<Persyaratan>;
  programStudi?: Maybe<ProgramStudi>;
  programStudis: Array<ProgramStudi>;
  proyeks: Array<Proyek>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAngkatanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBauArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetBiayaOperasionalArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDosenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFakultasArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetKonsentrasiArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLaporanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLaporanByProyekIdArgs = {
  proyekId: Scalars['ID']['input'];
};


export type QueryGetPendaftaranArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPersyaratanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProyekArgs = {
  id: Scalars['ID']['input'];
};


export type QueryKelasArgs = {
  id: Scalars['ID']['input'];
};


export type QueryKelompokArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMahasiswaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProgramStudiArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  Dosen = 'DOSEN',
  Mahasiswa = 'MAHASISWA'
}

export enum RoleMahasiswa {
  Anggota = 'ANGGOTA',
  Ketua = 'KETUA'
}

export type SignInInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type SignUpInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  username: Scalars['String']['input'];
};

export enum TypeProyek {
  Kkn = 'KKN',
  Kkp = 'KKP'
}

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  admin?: Maybe<Admin>;
  createdAt: Scalars['String']['output'];
  dosen?: Maybe<Dosen>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mahasiswa?: Maybe<Mahasiswa>;
  password: Scalars['String']['output'];
  profilePhoto: Scalars['String']['output'];
  role: Role;
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CreateAdminMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  fullname: Scalars['String']['input'];
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createAdmin?: (
    { __typename?: 'Admin' }
    & { ' $fragmentRefs'?: { 'AdminFieldsFragment': AdminFieldsFragment } }
  ) | null };

export type UpdateAdminMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  fullname: Scalars['String']['input'];
}>;


export type UpdateAdminMutation = { __typename?: 'Mutation', updateAdmin?: { __typename?: 'Admin', fullname: string, id: string } | null };

export type DeleteAdminMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAdminMutation = { __typename?: 'Mutation', deleteAdmin?: { __typename?: 'Admin', id: string, fullname: string } | null };

export type CreateAngkatanMutationVariables = Exact<{
  tahun: Scalars['Int']['input'];
}>;


export type CreateAngkatanMutation = { __typename?: 'Mutation', createAngkatan?: { __typename?: 'Angkatan', id: string, tahun: number, createdAt: string, updatedAt: string } | null };

export type UpdateAngkatanMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  tahun?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateAngkatanMutation = { __typename?: 'Mutation', updateAngkatan?: { __typename?: 'Angkatan', id: string, tahun: number, createdAt: string, updatedAt: string } | null };

export type DeleteAngkatanMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAngkatanMutation = { __typename?: 'Mutation', deleteAngkatan?: { __typename?: 'Angkatan', id: string, tahun: number, createdAt: string, updatedAt: string } | null };

export type SignInMutationVariables = Exact<{
  signInInput: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', id: string, username: string, password: string, profilePhoto: string, role: Role, email?: string | null, mahasiswa?: (
      { __typename?: 'Mahasiswa' }
      & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
    ) | null, dosen?: (
      { __typename?: 'Dosen' }
      & { ' $fragmentRefs'?: { 'DosenFieldsFragment': DosenFieldsFragment } }
    ) | null, admin?: { __typename?: 'Admin', id: string, fullname: string } | null } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut?: { __typename?: 'LogoutResponse', message: string } | null };

export type UpdateBauMutationVariables = Exact<{
  updateBauId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateBauMutation = { __typename?: 'Mutation', updateBau?: { __typename?: 'Bau', id: string, name: string } | null };

export type CreateBauMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateBauMutation = { __typename?: 'Mutation', createBau?: { __typename?: 'Bau', id: string, name: string } | null };

export type DeleteBauMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteBauMutation = { __typename?: 'Mutation', deleteBau?: { __typename?: 'Bau', id: string, name: string } | null };

export type CreateDosenMutationVariables = Exact<{
  fullname: Scalars['String']['input'];
  nidn: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  proyekId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateDosenMutation = { __typename?: 'Mutation', createDosen?: { __typename?: 'Dosen', id: string, fullname: string, nidn: string, userId: string } | null };

export type DeleteDosenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteDosenMutation = { __typename?: 'Mutation', deleteDosen?: { __typename?: 'Dosen', id: string, fullname: string, nidn: string, userId: string } | null };

export type UpdateDosenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  fullname?: InputMaybe<Scalars['String']['input']>;
  nidn?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateDosenMutation = { __typename?: 'Mutation', updateDosen?: { __typename?: 'Dosen', id: string, fullname: string, nidn: string, userId: string } | null };

export type CreateFakultasMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateFakultasMutation = { __typename?: 'Mutation', createFakultas?: { __typename?: 'Fakultas', id: string, name: string } | null };

export type UpdateFakultasMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateFakultasMutation = { __typename?: 'Mutation', updateFakultas?: { __typename?: 'Fakultas', id: string, name: string } | null };

export type DeleteFakultasMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFakultasMutation = { __typename?: 'Mutation', deleteFakultas?: { __typename?: 'Fakultas', id: string, name: string } | null };

export type CreateKelasMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateKelasMutation = { __typename?: 'Mutation', createKelas?: { __typename?: 'Kelas', id: string, name: string } | null };

export type UpdateKelasMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateKelasMutation = { __typename?: 'Mutation', updateKelas?: { __typename?: 'Kelas', id: string, name: string } | null };

export type DeleteKelasMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteKelasMutation = { __typename?: 'Mutation', deleteKelas?: { __typename?: 'Kelas', id: string, name: string } | null };

export type CreateKelompokMutationVariables = Exact<{
  name: Scalars['String']['input'];
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  nilai?: InputMaybe<Scalars['Int']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateKelompokMutation = { __typename?: 'Mutation', createKelompok?: { __typename?: 'Kelompok', id: string, name: string, proyekId?: string | null, nilai?: number | null, feedback?: string | null } | null };

export type UpdateKelompokMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  nilai?: InputMaybe<Scalars['Int']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateKelompokMutation = { __typename?: 'Mutation', updateKelompok?: { __typename?: 'Kelompok', id: string, name: string, proyekId?: string | null, nilai?: number | null, feedback?: string | null } | null };

export type DeleteKelompokMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteKelompokMutation = { __typename?: 'Mutation', deleteKelompok?: { __typename?: 'Kelompok', id: string, name: string, proyekId?: string | null } | null };

export type CreateKonsentrasiMutationVariables = Exact<{
  name: Scalars['String']['input'];
  programStudiId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateKonsentrasiMutation = { __typename?: 'Mutation', createKonsentrasi?: { __typename?: 'Konsentrasi', id: string, name: string, programStudiId?: string | null } | null };

export type UpdateKonsentrasiMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  programStudiId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateKonsentrasiMutation = { __typename?: 'Mutation', updateKonsentrasi?: { __typename?: 'Konsentrasi', id: string, name: string, programStudiId?: string | null } | null };

export type DeleteKonsentrasiMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteKonsentrasiMutation = { __typename?: 'Mutation', deleteKonsentrasi?: { __typename?: 'Konsentrasi', id: string, name: string } | null };

export type CreateLaporanMutationVariables = Exact<{
  photo?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['String']['input']>;
  proyekId: Scalars['ID']['input'];
  mahasiswaId: Scalars['ID']['input'];
}>;


export type CreateLaporanMutation = { __typename?: 'Mutation', createLaporan?: (
    { __typename?: 'Laporan' }
    & { ' $fragmentRefs'?: { 'LaporanFieldsFragment': LaporanFieldsFragment } }
  ) | null };

export type UpdateLaporanMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['String']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  mahasiswaId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateLaporanMutation = { __typename?: 'Mutation', updateLaporan?: (
    { __typename?: 'Laporan' }
    & { ' $fragmentRefs'?: { 'LaporanFieldsFragment': LaporanFieldsFragment } }
  ) | null };

export type DeleteLaporanMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteLaporanMutation = { __typename?: 'Mutation', deleteLaporan?: (
    { __typename?: 'Laporan' }
    & { ' $fragmentRefs'?: { 'LaporanFieldsFragment': LaporanFieldsFragment } }
  ) | null };

export type CreateMahasiswaMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  nim: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  semester: Scalars['Int']['input'];
  prodiId?: InputMaybe<Scalars['ID']['input']>;
  konsentrasiId?: InputMaybe<Scalars['ID']['input']>;
  kelasId?: InputMaybe<Scalars['ID']['input']>;
  kelompokId?: InputMaybe<Scalars['ID']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  angkatanId?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<RoleMahasiswa>;
}>;


export type CreateMahasiswaMutation = { __typename?: 'Mutation', createMahasiswa?: (
    { __typename?: 'Mahasiswa' }
    & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
  ) | null };

export type UpdateMahasiswaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  nim?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  semester?: InputMaybe<Scalars['Int']['input']>;
  prodiId?: InputMaybe<Scalars['ID']['input']>;
  konsentrasiId?: InputMaybe<Scalars['ID']['input']>;
  kelasId?: InputMaybe<Scalars['ID']['input']>;
  kelompokId?: InputMaybe<Scalars['ID']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  angkatanId?: InputMaybe<Scalars['ID']['input']>;
  role?: InputMaybe<RoleMahasiswa>;
}>;


export type UpdateMahasiswaMutation = { __typename?: 'Mutation', updateMahasiswa?: (
    { __typename?: 'Mahasiswa' }
    & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
  ) | null };

export type DeleteMahasiswaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMahasiswaMutation = { __typename?: 'Mutation', deleteMahasiswa?: { __typename?: 'Mahasiswa', id: string } | null };

export type CreatePersyaratanMutationVariables = Exact<{
  keteranganKelakuanBaik: Scalars['Boolean']['input'];
  keteranganOrangTua: Scalars['Boolean']['input'];
  keteranganPembayaran: Scalars['Boolean']['input'];
  keteranganSehat: Scalars['Boolean']['input'];
  mahasiswaId: Scalars['ID']['input'];
}>;


export type CreatePersyaratanMutation = { __typename?: 'Mutation', createPersyaratan?: { __typename?: 'Persyaratan', id: string, keteranganKelakuanBaik: boolean, keteranganOrangTua: boolean, keteranganPembayaran: boolean, keteranganSehat: boolean, mahasiswaId: string } | null };

export type UpdatePersyaratanMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  keteranganKelakuanBaik?: InputMaybe<Scalars['Boolean']['input']>;
  keteranganOrangTua?: InputMaybe<Scalars['Boolean']['input']>;
  keteranganPembayaran?: InputMaybe<Scalars['Boolean']['input']>;
  keteranganSehat?: InputMaybe<Scalars['Boolean']['input']>;
  mahasiswaId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdatePersyaratanMutation = { __typename?: 'Mutation', updatePersyaratan?: { __typename?: 'Persyaratan', id: string, keteranganKelakuanBaik: boolean, keteranganOrangTua: boolean, keteranganPembayaran: boolean, keteranganSehat: boolean } | null };

export type DeletePersyaratanMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePersyaratanMutation = { __typename?: 'Mutation', deletePersyaratan?: { __typename?: 'Persyaratan', id: string } | null };

export type CreateProgramStudiMutationVariables = Exact<{
  name: Scalars['String']['input'];
  fakultasId: Scalars['ID']['input'];
}>;


export type CreateProgramStudiMutation = { __typename?: 'Mutation', createProgramStudi?: { __typename?: 'ProgramStudi', id: string, name: string, fakultasId: string } | null };

export type UpdateProgramStudiMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  fakultasId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateProgramStudiMutation = { __typename?: 'Mutation', updateProgramStudi?: { __typename?: 'ProgramStudi', id: string, name: string, fakultasId: string } | null };

export type DeleteProgramStudiMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteProgramStudiMutation = { __typename?: 'Mutation', deleteProgramStudi?: { __typename?: 'ProgramStudi', id: string, name: string } | null };

export type CreateProyekMutationVariables = Exact<{
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  batasOrang: Scalars['Int']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  bolehDimulai?: InputMaybe<Scalars['Boolean']['input']>;
  telahSelesai?: InputMaybe<Scalars['Boolean']['input']>;
  lokasi?: InputMaybe<Scalars['String']['input']>;
  tanggalMulai?: InputMaybe<Scalars['String']['input']>;
  tanggalSelesai?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeProyek>;
}>;


export type CreateProyekMutation = { __typename?: 'Mutation', createProyek?: (
    { __typename?: 'Proyek' }
    & { ' $fragmentRefs'?: { 'ProyekFieldsFragment': ProyekFieldsFragment } }
  ) | null };

export type UpdateProyekMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  batasOrang?: InputMaybe<Scalars['Int']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  bolehDimulai?: InputMaybe<Scalars['Boolean']['input']>;
  telahSelesai?: InputMaybe<Scalars['Boolean']['input']>;
  lokasi?: InputMaybe<Scalars['String']['input']>;
  tanggalMulai?: InputMaybe<Scalars['String']['input']>;
  tanggalSelesai?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeProyek>;
}>;


export type UpdateProyekMutation = { __typename?: 'Mutation', updateProyek?: (
    { __typename?: 'Proyek' }
    & { ' $fragmentRefs'?: { 'ProyekFieldsFragment': ProyekFieldsFragment } }
  ) | null };

export type DeleteProyekMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteProyekMutation = { __typename?: 'Mutation', deleteProyek?: { __typename?: 'Proyek', id?: string | null } | null };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'User', id: string, username: string, password: string, email?: string | null, role: Role, profilePhoto: string } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id: string, username: string } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string } | null };

export type GetAuthUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthUserQuery = { __typename?: 'Query', authUser?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
  ) | null };

export type GetKelompokQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetKelompokQuery = { __typename?: 'Query', kelompok?: { __typename?: 'Kelompok', id: string, name: string, proyekId?: string | null, nilai?: number | null, feedback?: string | null, mahasiswa?: Array<{ __typename?: 'Mahasiswa', id: string, fullname: string } | null> | null } | null };

export type GetLaporanByProyekIdQueryVariables = Exact<{
  proyekId: Scalars['ID']['input'];
}>;


export type GetLaporanByProyekIdQuery = { __typename?: 'Query', getLaporanByProyekId: Array<(
    { __typename?: 'Laporan' }
    & { ' $fragmentRefs'?: { 'LaporanFieldsFragment': LaporanFieldsFragment } }
  )> };

export type GetProyekQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProyekQuery = { __typename?: 'Query', getProyek?: (
    { __typename?: 'Proyek' }
    & { ' $fragmentRefs'?: { 'ProyekFieldsFragment': ProyekFieldsFragment } }
  ) | null };

export type NewFakultasFragment = { __typename?: 'Fakultas', name: string, id: string } & { ' $fragmentName'?: 'NewFakultasFragment' };

export type NewKelompokFragment = { __typename?: 'Kelompok', id: string, name: string, proyekId?: string | null, nilai?: number | null, feedback?: string | null } & { ' $fragmentName'?: 'NewKelompokFragment' };

export type NewAngkatanFragment = { __typename?: 'Angkatan', id: string, tahun: number } & { ' $fragmentName'?: 'NewAngkatanFragment' };

export type NewPersyaratanFragment = { __typename?: 'Persyaratan', id: string, keteranganKelakuanBaik: boolean, keteranganOrangTua: boolean, keteranganPembayaran: boolean, keteranganSehat: boolean, mahasiswaId: string } & { ' $fragmentName'?: 'NewPersyaratanFragment' };

export type NewProgramStudiFragment = { __typename?: 'ProgramStudi', id: string, name: string, fakultasId: string } & { ' $fragmentName'?: 'NewProgramStudiFragment' };

export type NewKonsentrasiFragment = { __typename?: 'Konsentrasi', name: string, id: string } & { ' $fragmentName'?: 'NewKonsentrasiFragment' };

export type NewKelasFragment = { __typename?: 'Kelas', name: string, id: string } & { ' $fragmentName'?: 'NewKelasFragment' };

export type NewProyekFragment = (
  { __typename?: 'Proyek' }
  & { ' $fragmentRefs'?: { 'ProyekFieldsFragment': ProyekFieldsFragment } }
) & { ' $fragmentName'?: 'NewProyekFragment' };

export type NewDosenFragment = { __typename?: 'Dosen', id: string, fullname: string, nidn: string, userId: string } & { ' $fragmentName'?: 'NewDosenFragment' };

export type NewMahasiswaFragment = (
  { __typename?: 'Mahasiswa' }
  & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
) & { ' $fragmentName'?: 'NewMahasiswaFragment' };

export type BauFieldsFragment = { __typename?: 'Bau', id: string, name: string } & { ' $fragmentName'?: 'BauFieldsFragment' };

export type AdminFieldsFragment = { __typename?: 'Admin', id: string, userId: string, fullname: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id: string, username: string, email?: string | null, profilePhoto: string, role: Role, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'AdminFieldsFragment' };

export type UserFieldsFragment = { __typename?: 'User', id: string, username: string, email?: string | null, profilePhoto: string, role: Role, createdAt: string, updatedAt: string, mahasiswa?: (
    { __typename?: 'Mahasiswa' }
    & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
  ) | null, dosen?: (
    { __typename?: 'Dosen' }
    & { ' $fragmentRefs'?: { 'DosenFieldsFragment': DosenFieldsFragment } }
  ) | null, admin?: (
    { __typename?: 'Admin' }
    & { ' $fragmentRefs'?: { 'AdminFieldsFragment': AdminFieldsFragment } }
  ) | null } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type DosenFieldsFragment = { __typename?: 'Dosen', id: string, fullname: string, proyekId?: string | null, nidn: string, userId: string, createdAt: string, updatedAt: string } & { ' $fragmentName'?: 'DosenFieldsFragment' };

export type MahasiswaFieldsFragment = { __typename?: 'Mahasiswa', id: string, nim: string, fullname: string, semester: number, role?: RoleMahasiswa | null, userId: string, kelasId?: string | null, angkatanId?: string | null, proyekId?: string | null, kelompokId?: string | null, konsentrasiId?: string | null, prodiId?: string | null, createdAt: string, updatedAt: string, kelas?: { __typename?: 'Kelas', id: string, name: string } | null, angkatan?: { __typename?: 'Angkatan', id: string, tahun: number } | null, kelompok?: { __typename?: 'Kelompok', id: string, name: string, nilai?: number | null, feedback?: string | null, proyekId?: string | null, mahasiswa?: Array<{ __typename?: 'Mahasiswa', id: string, fullname: string, nim: string } | null> | null } | null, prodi?: { __typename?: 'ProgramStudi', id: string, name: string, createdAt: string, updatedAt: string } | null, konsentrasi?: { __typename?: 'Konsentrasi', id: string, name: string, createdAt: string, updatedAt: string } | null, proyek?: { __typename?: 'Proyek', id?: string | null, name?: string | null, description?: string | null, createdAt: string, updatedAt: string } | null, laporans?: Array<{ __typename?: 'Laporan', id: string, photo: string, file: string, createdAt: string, updatedAt: string }> | null, biayaOperasionals?: Array<{ __typename?: 'BiayaOperasional', id: string, biayaTransportasi: number, biayaProyek: number, biayaDll: number, tanggalBiaya: string, createdAt: string, updatedAt: string }> | null, persyaratan?: { __typename?: 'Persyaratan', id: string, keteranganSehat: boolean, keteranganPembayaran: boolean, keteranganOrangTua: boolean, keteranganKelakuanBaik: boolean, createdAt: string, updatedAt: string } | null, pendaftaran?: { __typename?: 'Pendaftaran', id: string, tanggalPendaftaran: string, buktiPembayaran: string, createdAt: string, updatedAt: string } | null } & { ' $fragmentName'?: 'MahasiswaFieldsFragment' };

export type ProgramStudiFieldsFragment = { __typename?: 'ProgramStudi', id: string, name: string, createdAt: string, updatedAt: string, fakultas: { __typename?: 'Fakultas', id: string, name: string, createdAt: string, updatedAt: string }, konsentrasi: Array<{ __typename?: 'Konsentrasi', id: string, name: string, createdAt: string, updatedAt: string }>, mahasiswa: Array<{ __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string }> } & { ' $fragmentName'?: 'ProgramStudiFieldsFragment' };

export type KonsentrasiFieldsFragment = { __typename?: 'Konsentrasi', id: string, name: string, createdAt: string, updatedAt: string, programStudi: { __typename?: 'ProgramStudi', id: string, name: string, createdAt: string, updatedAt: string }, mahasiswa: Array<{ __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string }> } & { ' $fragmentName'?: 'KonsentrasiFieldsFragment' };

export type ProyekFieldsFragment = { __typename?: 'Proyek', id?: string | null, name?: string | null, photo?: string | null, batasOrang?: number | null, description?: string | null, verified?: boolean | null, lokasi?: string | null, tanggalMulai?: string | null, tanggalSelesai?: string | null, type: TypeProyek, bolehDimulai?: boolean | null, telahSelesai?: boolean | null, createdAt: string, updatedAt: string, pembimbing?: Array<{ __typename?: 'Dosen', id: string, fullname: string, nidn: string, createdAt: string, updatedAt: string } | null> | null, mahasiswa?: Array<{ __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } | null> | null, laporans?: Array<{ __typename?: 'Laporan', id: string, photo: string, file: string, createdAt: string, updatedAt: string } | null> | null, biayaOperasionals?: Array<{ __typename?: 'BiayaOperasional', id: string, biayaTransportasi: number, biayaProyek: number, biayaDll: number, tanggalBiaya: string, createdAt: string, updatedAt: string } | null> | null, kelompok?: Array<{ __typename?: 'Kelompok', id: string, name: string, nilai?: number | null, feedback?: string | null, mahasiswa?: Array<(
      { __typename?: 'Mahasiswa' }
      & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
    ) | null> | null } | null> | null } & { ' $fragmentName'?: 'ProyekFieldsFragment' };

export type LaporanFieldsFragment = { __typename?: 'Laporan', id: string, photo: string, file: string, proyekId: string, mahasiswa: { __typename?: 'Mahasiswa', fullname: string }, proyek: { __typename?: 'Proyek', name?: string | null } } & { ' $fragmentName'?: 'LaporanFieldsFragment' };

export type PersyaratanFieldsFragment = { __typename?: 'Persyaratan', id: string, keteranganSehat: boolean, keteranganPembayaran: boolean, keteranganOrangTua: boolean, keteranganKelakuanBaik: boolean, createdAt: string, updatedAt: string, mahasiswa: { __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'PersyaratanFieldsFragment' };

export type PendaftaranFieldsFragment = { __typename?: 'Pendaftaran', id: string, tanggalPendaftaran: string, buktiPembayaran: string, createdAt: string, updatedAt: string, mahasiswa: { __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'PendaftaranFieldsFragment' };

export type BiayaOperasionalFieldsFragment = { __typename?: 'BiayaOperasional', id: string, biayaTransportasi: number, biayaProyek: number, biayaDll: number, tanggalBiaya: string, createdAt: string, updatedAt: string, proyek: { __typename?: 'Proyek', id?: string | null, name?: string | null, createdAt: string, updatedAt: string }, mahasiswa: { __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'BiayaOperasionalFieldsFragment' };

export type FakultasFieldsFragment = { __typename?: 'Fakultas', id: string, name: string, createdAt: string, updatedAt: string, programStudi: Array<{ __typename?: 'ProgramStudi', id: string, name: string, createdAt: string, updatedAt: string }> } & { ' $fragmentName'?: 'FakultasFieldsFragment' };

export type BauDetailFragment = (
  { __typename?: 'Bau' }
  & { ' $fragmentRefs'?: { 'BauFieldsFragment': BauFieldsFragment } }
) & { ' $fragmentName'?: 'BauDetailFragment' };

export type NewBauFragment = (
  { __typename?: 'Bau' }
  & { ' $fragmentRefs'?: { 'BauFieldsFragment': BauFieldsFragment } }
) & { ' $fragmentName'?: 'NewBauFragment' };

export type AdminDetailsFragment = (
  { __typename?: 'Admin' }
  & { ' $fragmentRefs'?: { 'AdminFieldsFragment': AdminFieldsFragment } }
) & { ' $fragmentName'?: 'AdminDetailsFragment' };

export type AngkatanDetailsFragment = { __typename?: 'Angkatan', id: string, tahun: number, createdAt: string, updatedAt: string } & { ' $fragmentName'?: 'AngkatanDetailsFragment' };

export type DosenDetailsFragment = (
  { __typename?: 'Dosen' }
  & { ' $fragmentRefs'?: { 'DosenFieldsFragment': DosenFieldsFragment } }
) & { ' $fragmentName'?: 'DosenDetailsFragment' };

export type FakultasDetailsFragment = { __typename?: 'Fakultas', id: string, name: string } & { ' $fragmentName'?: 'FakultasDetailsFragment' };

export type KelasDetailsFragment = { __typename?: 'Kelas', id: string, name: string } & { ' $fragmentName'?: 'KelasDetailsFragment' };

export type KelompokDetailsFragment = { __typename?: 'Kelompok', id: string, name: string, proyekId?: string | null, nilai?: number | null, feedback?: string | null } & { ' $fragmentName'?: 'KelompokDetailsFragment' };

export type MahasiswaDetailsFragment = (
  { __typename?: 'Mahasiswa' }
  & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
) & { ' $fragmentName'?: 'MahasiswaDetailsFragment' };

export type PersyaratanDetailsFragment = { __typename?: 'Persyaratan', id: string, keteranganKelakuanBaik: boolean, keteranganOrangTua: boolean, keteranganPembayaran: boolean, keteranganSehat: boolean, mahasiswaId: string, mahasiswa: { __typename?: 'Mahasiswa', id: string, fullname: string, nim: string } } & { ' $fragmentName'?: 'PersyaratanDetailsFragment' };

export type ProgramStudiDetailsFragment = { __typename?: 'ProgramStudi', id: string, name: string, fakultasId: string } & { ' $fragmentName'?: 'ProgramStudiDetailsFragment' };

export type ProyekDetailsFragment = (
  { __typename?: 'Proyek' }
  & { ' $fragmentRefs'?: { 'ProyekFieldsFragment': ProyekFieldsFragment } }
) & { ' $fragmentName'?: 'ProyekDetailsFragment' };

export type KonsentrasiDetailsFragment = { __typename?: 'Konsentrasi', id: string, name: string, programStudiId?: string | null } & { ' $fragmentName'?: 'KonsentrasiDetailsFragment' };

export type NewKelompokMahasiswaFragment = { __typename?: 'Kelompok', name: string, id: string } & { ' $fragmentName'?: 'NewKelompokMahasiswaFragment' };

export type NewLaporanFragment = (
  { __typename?: 'Laporan' }
  & { ' $fragmentRefs'?: { 'LaporanFieldsFragment': LaporanFieldsFragment } }
) & { ' $fragmentName'?: 'NewLaporanFragment' };

export const NewFakultasFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewFakultas"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fakultas"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NewFakultasFragment, unknown>;
export const NewKelompokFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewKelompok"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Kelompok"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}}]}}]} as unknown as DocumentNode<NewKelompokFragment, unknown>;
export const NewAngkatanFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewAngkatan"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Angkatan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}}]} as unknown as DocumentNode<NewAngkatanFragment, unknown>;
export const NewPersyaratanFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewPersyaratan"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Persyaratan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswaId"}}]}}]} as unknown as DocumentNode<NewPersyaratanFragment, unknown>;
export const NewProgramStudiFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewProgramStudi"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProgramStudi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fakultasId"}}]}}]} as unknown as DocumentNode<NewProgramStudiFragment, unknown>;
export const NewKonsentrasiFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewKonsentrasi"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Konsentrasi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NewKonsentrasiFragment, unknown>;
export const NewKelasFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewKelas"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Kelas"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NewKelasFragment, unknown>;
export const MahasiswaFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MahasiswaFieldsFragment, unknown>;
export const ProyekFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProyekFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"batasOrang"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lokasi"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalMulai"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bolehDimulai"}},{"kind":"Field","name":{"kind":"Name","value":"telahSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"pembimbing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ProyekFieldsFragment, unknown>;
export const NewProyekFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewProyek"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProyekFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProyekFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"batasOrang"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lokasi"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalMulai"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bolehDimulai"}},{"kind":"Field","name":{"kind":"Name","value":"telahSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"pembimbing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<NewProyekFragment, unknown>;
export const NewDosenFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewDosen"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<NewDosenFragment, unknown>;
export const NewMahasiswaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewMahasiswa"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<NewMahasiswaFragment, unknown>;
export const DosenFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<DosenFieldsFragment, unknown>;
export const AdminFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AdminFieldsFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dosen"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DosenFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const ProgramStudiFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProgramStudiFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProgramStudi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fakultas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ProgramStudiFieldsFragment, unknown>;
export const KonsentrasiFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KonsentrasiFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Konsentrasi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"programStudi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<KonsentrasiFieldsFragment, unknown>;
export const PersyaratanFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersyaratanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Persyaratan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PersyaratanFieldsFragment, unknown>;
export const PendaftaranFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PendaftaranFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pendaftaran"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PendaftaranFieldsFragment, unknown>;
export const BiayaOperasionalFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BiayaOperasionalFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BiayaOperasional"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<BiayaOperasionalFieldsFragment, unknown>;
export const FakultasFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FakultasFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fakultas"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"programStudi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<FakultasFieldsFragment, unknown>;
export const BauFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BauFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<BauFieldsFragment, unknown>;
export const BauDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BauDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BauFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BauFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<BauDetailFragment, unknown>;
export const NewBauFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewBau"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BauFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BauFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<NewBauFragment, unknown>;
export const AdminDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AdminDetailsFragment, unknown>;
export const AngkatanDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AngkatanDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Angkatan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AngkatanDetailsFragment, unknown>;
export const DosenDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DosenFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<DosenDetailsFragment, unknown>;
export const FakultasDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FakultasDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fakultas"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<FakultasDetailsFragment, unknown>;
export const KelasDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KelasDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Kelas"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<KelasDetailsFragment, unknown>;
export const KelompokDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KelompokDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Kelompok"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}}]}}]} as unknown as DocumentNode<KelompokDetailsFragment, unknown>;
export const MahasiswaDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MahasiswaDetailsFragment, unknown>;
export const PersyaratanDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersyaratanDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Persyaratan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswaId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}}]} as unknown as DocumentNode<PersyaratanDetailsFragment, unknown>;
export const ProgramStudiDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProgramStudiDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProgramStudi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fakultasId"}}]}}]} as unknown as DocumentNode<ProgramStudiDetailsFragment, unknown>;
export const ProyekDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProyekDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProyekFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProyekFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"batasOrang"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lokasi"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalMulai"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bolehDimulai"}},{"kind":"Field","name":{"kind":"Name","value":"telahSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"pembimbing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ProyekDetailsFragment, unknown>;
export const KonsentrasiDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KonsentrasiDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Konsentrasi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"programStudiId"}}]}}]} as unknown as DocumentNode<KonsentrasiDetailsFragment, unknown>;
export const NewKelompokMahasiswaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewKelompokMahasiswa"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Kelompok"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NewKelompokMahasiswaFragment, unknown>;
export const LaporanFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaporanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Laporan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<LaporanFieldsFragment, unknown>;
export const NewLaporanFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewLaporan"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Laporan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaporanFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaporanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Laporan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<NewLaporanFragment, unknown>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const UpdateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateAdminMutation, UpdateAdminMutationVariables>;
export const DeleteAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]} as unknown as DocumentNode<DeleteAdminMutation, DeleteAdminMutationVariables>;
export const CreateAngkatanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAngkatan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tahun"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAngkatan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tahun"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tahun"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateAngkatanMutation, CreateAngkatanMutationVariables>;
export const UpdateAngkatanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAngkatan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tahun"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAngkatan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"tahun"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tahun"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateAngkatanMutation, UpdateAngkatanMutationVariables>;
export const DeleteAngkatanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAngkatan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAngkatan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<DeleteAngkatanMutation, DeleteAngkatanMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dosen"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DosenFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const UpdateBauDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBau"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateBauId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBau"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateBauId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateBauMutation, UpdateBauMutationVariables>;
export const CreateBauDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBau"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBau"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateBauMutation, CreateBauMutationVariables>;
export const DeleteBauDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteBau"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBau"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteBauMutation, DeleteBauMutationVariables>;
export const CreateDosenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDosen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nidn"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDosen"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"Argument","name":{"kind":"Name","value":"nidn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nidn"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<CreateDosenMutation, CreateDosenMutationVariables>;
export const DeleteDosenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDosen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDosen"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<DeleteDosenMutation, DeleteDosenMutationVariables>;
export const UpdateDosenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDosen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nidn"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDosen"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"Argument","name":{"kind":"Name","value":"nidn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nidn"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<UpdateDosenMutation, UpdateDosenMutationVariables>;
export const CreateFakultasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createFakultas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFakultas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateFakultasMutation, CreateFakultasMutationVariables>;
export const UpdateFakultasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateFakultas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFakultas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateFakultasMutation, UpdateFakultasMutationVariables>;
export const DeleteFakultasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFakultas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFakultas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteFakultasMutation, DeleteFakultasMutationVariables>;
export const CreateKelasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createKelas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createKelas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateKelasMutation, CreateKelasMutationVariables>;
export const UpdateKelasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateKelas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateKelas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateKelasMutation, UpdateKelasMutationVariables>;
export const DeleteKelasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteKelas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteKelas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteKelasMutation, DeleteKelasMutationVariables>;
export const CreateKelompokDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createKelompok"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nilai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"feedback"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createKelompok"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}},{"kind":"Argument","name":{"kind":"Name","value":"nilai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nilai"}}},{"kind":"Argument","name":{"kind":"Name","value":"feedback"},"value":{"kind":"Variable","name":{"kind":"Name","value":"feedback"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}}]}}]}}]} as unknown as DocumentNode<CreateKelompokMutation, CreateKelompokMutationVariables>;
export const UpdateKelompokDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateKelompok"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nilai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"feedback"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateKelompok"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}},{"kind":"Argument","name":{"kind":"Name","value":"nilai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nilai"}}},{"kind":"Argument","name":{"kind":"Name","value":"feedback"},"value":{"kind":"Variable","name":{"kind":"Name","value":"feedback"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}}]}}]}}]} as unknown as DocumentNode<UpdateKelompokMutation, UpdateKelompokMutationVariables>;
export const DeleteKelompokDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteKelompok"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteKelompok"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}}]}}]}}]} as unknown as DocumentNode<DeleteKelompokMutation, DeleteKelompokMutationVariables>;
export const CreateKonsentrasiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createKonsentrasi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"programStudiId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createKonsentrasi"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"programStudiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"programStudiId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"programStudiId"}}]}}]}}]} as unknown as DocumentNode<CreateKonsentrasiMutation, CreateKonsentrasiMutationVariables>;
export const UpdateKonsentrasiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateKonsentrasi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"programStudiId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateKonsentrasi"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"programStudiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"programStudiId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"programStudiId"}}]}}]}}]} as unknown as DocumentNode<UpdateKonsentrasiMutation, UpdateKonsentrasiMutationVariables>;
export const DeleteKonsentrasiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteKonsentrasi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteKonsentrasi"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteKonsentrasiMutation, DeleteKonsentrasiMutationVariables>;
export const CreateLaporanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLaporan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mahasiswaId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLaporan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"photo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photo"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}},{"kind":"Argument","name":{"kind":"Name","value":"mahasiswaId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mahasiswaId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaporanFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaporanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Laporan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateLaporanMutation, CreateLaporanMutationVariables>;
export const UpdateLaporanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLaporan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mahasiswaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLaporan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"photo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photo"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}},{"kind":"Argument","name":{"kind":"Name","value":"mahasiswaId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mahasiswaId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaporanFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaporanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Laporan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateLaporanMutation, UpdateLaporanMutationVariables>;
export const DeleteLaporanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLaporan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLaporan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaporanFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaporanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Laporan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteLaporanMutation, DeleteLaporanMutationVariables>;
export const CreateMahasiswaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createMahasiswa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nim"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"semester"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prodiId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"konsentrasiId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kelasId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kelompokId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"angkatanId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleMahasiswa"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMahasiswa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"nim"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nim"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"Argument","name":{"kind":"Name","value":"semester"},"value":{"kind":"Variable","name":{"kind":"Name","value":"semester"}}},{"kind":"Argument","name":{"kind":"Name","value":"prodiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prodiId"}}},{"kind":"Argument","name":{"kind":"Name","value":"konsentrasiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"konsentrasiId"}}},{"kind":"Argument","name":{"kind":"Name","value":"kelasId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kelasId"}}},{"kind":"Argument","name":{"kind":"Name","value":"kelompokId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kelompokId"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}},{"kind":"Argument","name":{"kind":"Name","value":"angkatanId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"angkatanId"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateMahasiswaMutation, CreateMahasiswaMutationVariables>;
export const UpdateMahasiswaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMahasiswa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nim"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"semester"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prodiId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"konsentrasiId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kelasId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kelompokId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"angkatanId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleMahasiswa"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMahasiswa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"nim"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nim"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"Argument","name":{"kind":"Name","value":"semester"},"value":{"kind":"Variable","name":{"kind":"Name","value":"semester"}}},{"kind":"Argument","name":{"kind":"Name","value":"prodiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prodiId"}}},{"kind":"Argument","name":{"kind":"Name","value":"konsentrasiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"konsentrasiId"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}},{"kind":"Argument","name":{"kind":"Name","value":"angkatanId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"angkatanId"}}},{"kind":"Argument","name":{"kind":"Name","value":"kelasId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kelasId"}}},{"kind":"Argument","name":{"kind":"Name","value":"kelompokId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kelompokId"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpdateMahasiswaMutation, UpdateMahasiswaMutationVariables>;
export const DeleteMahasiswaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteMahasiswa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMahasiswa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteMahasiswaMutation, DeleteMahasiswaMutationVariables>;
export const CreatePersyaratanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPersyaratan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keteranganOrangTua"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keteranganPembayaran"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keteranganSehat"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mahasiswaId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersyaratan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keteranganKelakuanBaik"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keteranganKelakuanBaik"}}},{"kind":"Argument","name":{"kind":"Name","value":"keteranganOrangTua"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keteranganOrangTua"}}},{"kind":"Argument","name":{"kind":"Name","value":"keteranganPembayaran"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keteranganPembayaran"}}},{"kind":"Argument","name":{"kind":"Name","value":"keteranganSehat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keteranganSehat"}}},{"kind":"Argument","name":{"kind":"Name","value":"mahasiswaId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mahasiswaId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswaId"}}]}}]}}]} as unknown as DocumentNode<CreatePersyaratanMutation, CreatePersyaratanMutationVariables>;
export const UpdatePersyaratanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePersyaratan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keteranganOrangTua"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keteranganPembayaran"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keteranganSehat"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mahasiswaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersyaratan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"keteranganKelakuanBaik"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keteranganKelakuanBaik"}}},{"kind":"Argument","name":{"kind":"Name","value":"keteranganOrangTua"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keteranganOrangTua"}}},{"kind":"Argument","name":{"kind":"Name","value":"keteranganPembayaran"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keteranganPembayaran"}}},{"kind":"Argument","name":{"kind":"Name","value":"keteranganSehat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keteranganSehat"}}},{"kind":"Argument","name":{"kind":"Name","value":"mahasiswaId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mahasiswaId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}}]}}]}}]} as unknown as DocumentNode<UpdatePersyaratanMutation, UpdatePersyaratanMutationVariables>;
export const DeletePersyaratanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePersyaratan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersyaratan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePersyaratanMutation, DeletePersyaratanMutationVariables>;
export const CreateProgramStudiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProgramStudi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fakultasId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProgramStudi"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"fakultasId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fakultasId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fakultasId"}}]}}]}}]} as unknown as DocumentNode<CreateProgramStudiMutation, CreateProgramStudiMutationVariables>;
export const UpdateProgramStudiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProgramStudi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fakultasId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProgramStudi"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"fakultasId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fakultasId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fakultasId"}}]}}]}}]} as unknown as DocumentNode<UpdateProgramStudiMutation, UpdateProgramStudiMutationVariables>;
export const DeleteProgramStudiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProgramStudi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProgramStudi"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteProgramStudiMutation, DeleteProgramStudiMutationVariables>;
export const CreateProyekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProyek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"batasOrang"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verified"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bolehDimulai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"telahSelesai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lokasi"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tanggalMulai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tanggalSelesai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeProyek"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProyek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"photo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photo"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"batasOrang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"batasOrang"}}},{"kind":"Argument","name":{"kind":"Name","value":"verified"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verified"}}},{"kind":"Argument","name":{"kind":"Name","value":"bolehDimulai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bolehDimulai"}}},{"kind":"Argument","name":{"kind":"Name","value":"telahSelesai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"telahSelesai"}}},{"kind":"Argument","name":{"kind":"Name","value":"lokasi"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lokasi"}}},{"kind":"Argument","name":{"kind":"Name","value":"tanggalMulai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tanggalMulai"}}},{"kind":"Argument","name":{"kind":"Name","value":"tanggalSelesai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tanggalSelesai"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProyekFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProyekFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"batasOrang"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lokasi"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalMulai"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bolehDimulai"}},{"kind":"Field","name":{"kind":"Name","value":"telahSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"pembimbing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateProyekMutation, CreateProyekMutationVariables>;
export const UpdateProyekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProyek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"batasOrang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verified"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bolehDimulai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"telahSelesai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lokasi"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tanggalMulai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tanggalSelesai"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeProyek"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProyek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"photo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photo"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"batasOrang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"batasOrang"}}},{"kind":"Argument","name":{"kind":"Name","value":"verified"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verified"}}},{"kind":"Argument","name":{"kind":"Name","value":"bolehDimulai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bolehDimulai"}}},{"kind":"Argument","name":{"kind":"Name","value":"telahSelesai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"telahSelesai"}}},{"kind":"Argument","name":{"kind":"Name","value":"lokasi"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lokasi"}}},{"kind":"Argument","name":{"kind":"Name","value":"tanggalMulai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tanggalMulai"}}},{"kind":"Argument","name":{"kind":"Name","value":"tanggalSelesai"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tanggalSelesai"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProyekFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProyekFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"batasOrang"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lokasi"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalMulai"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bolehDimulai"}},{"kind":"Field","name":{"kind":"Name","value":"telahSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"pembimbing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpdateProyekMutation, UpdateProyekMutationVariables>;
export const DeleteProyekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProyek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProyek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteProyekMutation, DeleteProyekMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAuthUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dosen"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DosenFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetAuthUserQuery, GetAuthUserQueryVariables>;
export const GetKelompokDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getKelompok"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]}}]} as unknown as DocumentNode<GetKelompokQuery, GetKelompokQueryVariables>;
export const GetLaporanByProyekIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLaporanByProyekId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLaporanByProyekId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaporanFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaporanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Laporan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetLaporanByProyekIdQuery, GetLaporanByProyekIdQueryVariables>;
export const GetProyekDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProyek"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProyek"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProyekFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kelasId"}},{"kind":"Field","name":{"kind":"Name","value":"angkatanId"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"kelompokId"}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasiId"}},{"kind":"Field","name":{"kind":"Name","value":"prodiId"}},{"kind":"Field","name":{"kind":"Name","value":"kelas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"angkatan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tahun"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProyekFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"batasOrang"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"lokasi"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalMulai"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bolehDimulai"}},{"kind":"Field","name":{"kind":"Name","value":"telahSelesai"}},{"kind":"Field","name":{"kind":"Name","value":"pembimbing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kelompok"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nilai"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetProyekQuery, GetProyekQueryVariables>;