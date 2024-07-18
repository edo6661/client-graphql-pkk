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
  proyek: Proyek;
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

export type Konsentrasi = {
  __typename?: 'Konsentrasi';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mahasiswa: Array<Mahasiswa>;
  name: Scalars['String']['output'];
  programStudi: ProgramStudi;
  updatedAt: Scalars['String']['output'];
};

export type Laporan = {
  __typename?: 'Laporan';
  createdAt: Scalars['String']['output'];
  file: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mahasiswa: Mahasiswa;
  photo: Scalars['String']['output'];
  proyek: Proyek;
  updatedAt: Scalars['String']['output'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String']['output'];
};

export type Mahasiswa = {
  __typename?: 'Mahasiswa';
  biayaOperasionals: Array<BiayaOperasional>;
  createdAt: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  konsentrasi: Konsentrasi;
  laporans: Array<Laporan>;
  nim: Scalars['String']['output'];
  pendaftaran?: Maybe<Pendaftaran>;
  persyaratan?: Maybe<Persyaratan>;
  prodi: ProgramStudi;
  proyek?: Maybe<Proyek>;
  semester: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin?: Maybe<Admin>;
  createBau?: Maybe<Bau>;
  createBiayaOperasional?: Maybe<BiayaOperasional>;
  createDosen?: Maybe<Dosen>;
  createFakultas?: Maybe<Fakultas>;
  createKonsentrasi?: Maybe<Konsentrasi>;
  createLaporan?: Maybe<Laporan>;
  createMahasiswa?: Maybe<Mahasiswa>;
  createPendaftaran?: Maybe<Pendaftaran>;
  createPersyaratan?: Maybe<Persyaratan>;
  createProgramStudi?: Maybe<ProgramStudi>;
  createProyek?: Maybe<Proyek>;
  deleteAdmin?: Maybe<Admin>;
  deleteBau?: Maybe<Bau>;
  deleteBiayaOperasional?: Maybe<BiayaOperasional>;
  deleteDosen?: Maybe<Dosen>;
  deleteFakultas?: Maybe<Fakultas>;
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
  updateBau?: Maybe<Bau>;
  updateBiayaOperasional?: Maybe<BiayaOperasional>;
  updateDosen?: Maybe<Dosen>;
  updateFakultas?: Maybe<Fakultas>;
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
  userId: Scalars['ID']['input'];
};


export type MutationCreateFakultasArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateKonsentrasiArgs = {
  name: Scalars['String']['input'];
  programStudiId: Scalars['ID']['input'];
};


export type MutationCreateLaporanArgs = {
  file?: InputMaybe<Scalars['String']['input']>;
  mahasiswaId: Scalars['ID']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  proyekId: Scalars['ID']['input'];
};


export type MutationCreateMahasiswaArgs = {
  fullname: Scalars['String']['input'];
  konsentrasiId: Scalars['ID']['input'];
  nim: Scalars['String']['input'];
  prodiId: Scalars['ID']['input'];
  proyekId?: InputMaybe<Scalars['ID']['input']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteAdminArgs = {
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


export type MutationUpdateKonsentrasiArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  programStudiId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateLaporanArgs = {
  file?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mahasiswaId?: InputMaybe<Scalars['ID']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMahasiswaArgs = {
  fullname?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  konsentrasiId?: InputMaybe<Scalars['ID']['input']>;
  nim?: InputMaybe<Scalars['String']['input']>;
  prodiId?: InputMaybe<Scalars['ID']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
  semester?: InputMaybe<Scalars['Int']['input']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
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
  updatedAt: Scalars['String']['output'];
};

export type ProgramStudi = {
  __typename?: 'ProgramStudi';
  createdAt: Scalars['String']['output'];
  fakultas: Fakultas;
  id: Scalars['ID']['output'];
  konsentrasi: Array<Konsentrasi>;
  mahasiswa: Array<Mahasiswa>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Proyek = {
  __typename?: 'Proyek';
  biayaOperasional: Array<BiayaOperasional>;
  bolehDimulai: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  laporan: Array<Laporan>;
  laporans?: Maybe<Array<Laporan>>;
  mahasiswa?: Maybe<Mahasiswa>;
  name: Scalars['String']['output'];
  pembimbing?: Maybe<Dosen>;
  photo?: Maybe<Scalars['String']['output']>;
  telahSelesai: Scalars['Boolean']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<Admin>;
  admins: Array<Admin>;
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
  getPendaftaran?: Maybe<Pendaftaran>;
  getPersyaratan?: Maybe<Persyaratan>;
  getProyek?: Maybe<Proyek>;
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


export type QueryGetPendaftaranArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPersyaratanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProyekArgs = {
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

export type SignInMutationVariables = Exact<{
  signInInput: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', id: string, username: string, email?: string | null, role: Role, profilePhoto: string } | null };

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
}>;


export type CreateDosenMutation = { __typename?: 'Mutation', createDosen?: { __typename?: 'Dosen', id: string, fullname: string, nidn: string } | null };

export type DeleteDosenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteDosenMutation = { __typename?: 'Mutation', deleteDosen?: { __typename?: 'Dosen', id: string, fullname: string, nidn: string, userId: string } | null };

export type UpdateDosenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  fullname?: InputMaybe<Scalars['String']['input']>;
  nidn?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateDosenMutation = { __typename?: 'Mutation', updateDosen?: { __typename?: 'Dosen', id: string, fullname: string, nidn: string, userId: string } | null };

export type CreateMahasiswaMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  nim: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  semester: Scalars['Int']['input'];
  prodiId: Scalars['ID']['input'];
  konsentrasiId: Scalars['ID']['input'];
  proyekId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateMahasiswaMutation = { __typename?: 'Mutation', createMahasiswa?: (
    { __typename?: 'Mahasiswa' }
    & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
  ) | null };

export type UpdateMahasiswaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  nim?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  semester?: InputMaybe<Scalars['Int']['input']>;
  prodiId?: InputMaybe<Scalars['ID']['input']>;
  konsentrasiId?: InputMaybe<Scalars['ID']['input']>;
  proyekId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UpdateMahasiswaMutation = { __typename?: 'Mutation', updateMahasiswa?: (
    { __typename?: 'Mahasiswa' }
    & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
  ) | null };

export type DeleteMahasiswaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMahasiswaMutation = { __typename?: 'Mutation', deleteMahasiswa?: { __typename?: 'Mahasiswa', id: string } | null };

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


export type GetAuthUserQuery = { __typename?: 'Query', authUser?: { __typename?: 'User', id: string, username: string, password: string, profilePhoto: string, role: Role, email?: string | null } | null };

export type NewDosenFragment = { __typename?: 'Dosen', id: string, fullname: string, nidn: string } & { ' $fragmentName'?: 'NewDosenFragment' };

export type NewMahasiswaFragment = { __typename?: 'Mahasiswa', id: string, fullname: string, nim: string, userId: string } & { ' $fragmentName'?: 'NewMahasiswaFragment' };

export type BauFieldsFragment = { __typename?: 'Bau', id: string, name: string } & { ' $fragmentName'?: 'BauFieldsFragment' };

export type AdminFieldsFragment = { __typename?: 'Admin', id: string, userId: string, fullname: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id: string, username: string, email?: string | null, profilePhoto: string, role: Role, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'AdminFieldsFragment' };

export type UserFieldsFragment = { __typename?: 'User', id: string, username: string, email?: string | null, profilePhoto: string, role: Role, createdAt: string, updatedAt: string, admin?: { __typename?: 'Admin', id: string, fullname: string, createdAt: string, updatedAt: string } | null, mahasiswa?: { __typename?: 'Mahasiswa', id: string, fullname: string, nim: string, semester: number, createdAt: string, updatedAt: string } | null, dosen?: { __typename?: 'Dosen', id: string, fullname: string, nidn: string, createdAt: string, updatedAt: string } | null } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type DosenFieldsFragment = { __typename?: 'Dosen', id: string, fullname: string, proyekId?: string | null, nidn: string, userId: string, createdAt: string, updatedAt: string, user: { __typename?: 'User', id: string, username: string, email?: string | null, profilePhoto: string, role: Role, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'DosenFieldsFragment' };

export type MahasiswaFieldsFragment = { __typename?: 'Mahasiswa', id: string, userId: string, nim: string, fullname: string, semester: number, createdAt: string, updatedAt: string, prodi: { __typename?: 'ProgramStudi', id: string, name: string, createdAt: string, updatedAt: string }, konsentrasi: { __typename?: 'Konsentrasi', id: string, name: string, createdAt: string, updatedAt: string }, proyek?: { __typename?: 'Proyek', id: string, name: string, description: string, createdAt: string, updatedAt: string } | null, laporans: Array<{ __typename?: 'Laporan', id: string, photo: string, file: string, createdAt: string, updatedAt: string }>, biayaOperasionals: Array<{ __typename?: 'BiayaOperasional', id: string, biayaTransportasi: number, biayaProyek: number, biayaDll: number, tanggalBiaya: string, createdAt: string, updatedAt: string }>, persyaratan?: { __typename?: 'Persyaratan', id: string, keteranganSehat: boolean, keteranganPembayaran: boolean, keteranganOrangTua: boolean, keteranganKelakuanBaik: boolean, createdAt: string, updatedAt: string } | null, pendaftaran?: { __typename?: 'Pendaftaran', id: string, tanggalPendaftaran: string, buktiPembayaran: string, createdAt: string, updatedAt: string } | null } & { ' $fragmentName'?: 'MahasiswaFieldsFragment' };

export type ProgramStudiFieldsFragment = { __typename?: 'ProgramStudi', id: string, name: string, createdAt: string, updatedAt: string, fakultas: { __typename?: 'Fakultas', id: string, name: string, createdAt: string, updatedAt: string }, konsentrasi: Array<{ __typename?: 'Konsentrasi', id: string, name: string, createdAt: string, updatedAt: string }>, mahasiswa: Array<{ __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string }> } & { ' $fragmentName'?: 'ProgramStudiFieldsFragment' };

export type KonsentrasiFieldsFragment = { __typename?: 'Konsentrasi', id: string, name: string, createdAt: string, updatedAt: string, programStudi: { __typename?: 'ProgramStudi', id: string, name: string, createdAt: string, updatedAt: string }, mahasiswa: Array<{ __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string }> } & { ' $fragmentName'?: 'KonsentrasiFieldsFragment' };

export type ProyekFieldsFragment = { __typename?: 'Proyek', id: string, name: string, photo?: string | null, description: string, createdAt: string, updatedAt: string, pembimbing?: { __typename?: 'Dosen', id: string, fullname: string, createdAt: string, updatedAt: string } | null, mahasiswa?: { __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } | null, laporans?: Array<{ __typename?: 'Laporan', id: string, photo: string, file: string, createdAt: string, updatedAt: string }> | null, biayaOperasional: Array<{ __typename?: 'BiayaOperasional', id: string, biayaTransportasi: number, biayaProyek: number, biayaDll: number, tanggalBiaya: string, createdAt: string, updatedAt: string }> } & { ' $fragmentName'?: 'ProyekFieldsFragment' };

export type LaporanFieldsFragment = { __typename?: 'Laporan', id: string, photo: string, file: string, createdAt: string, updatedAt: string, proyek: { __typename?: 'Proyek', id: string, name: string, createdAt: string, updatedAt: string }, mahasiswa: { __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'LaporanFieldsFragment' };

export type PersyaratanFieldsFragment = { __typename?: 'Persyaratan', id: string, keteranganSehat: boolean, keteranganPembayaran: boolean, keteranganOrangTua: boolean, keteranganKelakuanBaik: boolean, createdAt: string, updatedAt: string, mahasiswa: { __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'PersyaratanFieldsFragment' };

export type PendaftaranFieldsFragment = { __typename?: 'Pendaftaran', id: string, tanggalPendaftaran: string, buktiPembayaran: string, createdAt: string, updatedAt: string, mahasiswa: { __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'PendaftaranFieldsFragment' };

export type BiayaOperasionalFieldsFragment = { __typename?: 'BiayaOperasional', id: string, biayaTransportasi: number, biayaProyek: number, biayaDll: number, tanggalBiaya: string, createdAt: string, updatedAt: string, proyek: { __typename?: 'Proyek', id: string, name: string, createdAt: string, updatedAt: string }, mahasiswa: { __typename?: 'Mahasiswa', id: string, fullname: string, createdAt: string, updatedAt: string } } & { ' $fragmentName'?: 'BiayaOperasionalFieldsFragment' };

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

export type DosenDetailsFragment = (
  { __typename?: 'Dosen' }
  & { ' $fragmentRefs'?: { 'DosenFieldsFragment': DosenFieldsFragment } }
) & { ' $fragmentName'?: 'DosenDetailsFragment' };

export type MahasiswaDetailsFragment = (
  { __typename?: 'Mahasiswa' }
  & { ' $fragmentRefs'?: { 'MahasiswaFieldsFragment': MahasiswaFieldsFragment } }
) & { ' $fragmentName'?: 'MahasiswaDetailsFragment' };

export const NewDosenFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewDosen"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}}]}}]} as unknown as DocumentNode<NewDosenFragment, unknown>;
export const NewMahasiswaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewMahasiswa"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<NewMahasiswaFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dosen"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const ProgramStudiFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProgramStudiFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProgramStudi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fakultas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ProgramStudiFieldsFragment, unknown>;
export const KonsentrasiFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KonsentrasiFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Konsentrasi"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"programStudi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<KonsentrasiFieldsFragment, unknown>;
export const ProyekFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProyekFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proyek"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"pembimbing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasional"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ProyekFieldsFragment, unknown>;
export const LaporanFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaporanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Laporan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<LaporanFieldsFragment, unknown>;
export const PersyaratanFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersyaratanFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Persyaratan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PersyaratanFieldsFragment, unknown>;
export const PendaftaranFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PendaftaranFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pendaftaran"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PendaftaranFieldsFragment, unknown>;
export const BiayaOperasionalFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BiayaOperasionalFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BiayaOperasional"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"mahasiswa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<BiayaOperasionalFieldsFragment, unknown>;
export const FakultasFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FakultasFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Fakultas"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"programStudi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<FakultasFieldsFragment, unknown>;
export const BauFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BauFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<BauFieldsFragment, unknown>;
export const BauDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BauDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BauFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BauFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<BauDetailFragment, unknown>;
export const NewBauFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewBau"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BauFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BauFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bau"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<NewBauFragment, unknown>;
export const AdminFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AdminFieldsFragment, unknown>;
export const AdminDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<AdminDetailsFragment, unknown>;
export const DosenFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<DosenFieldsFragment, unknown>;
export const DosenDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DosenFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DosenFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dosen"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"proyekId"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<DosenDetailsFragment, unknown>;
export const MahasiswaFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MahasiswaFieldsFragment, unknown>;
export const MahasiswaDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MahasiswaDetailsFragment, unknown>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const UpdateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateAdminMutation, UpdateAdminMutationVariables>;
export const DeleteAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]} as unknown as DocumentNode<DeleteAdminMutation, DeleteAdminMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const UpdateBauDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBau"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateBauId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBau"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateBauId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateBauMutation, UpdateBauMutationVariables>;
export const CreateBauDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBau"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBau"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateBauMutation, CreateBauMutationVariables>;
export const DeleteBauDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteBau"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBau"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteBauMutation, DeleteBauMutationVariables>;
export const CreateDosenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDosen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nidn"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDosen"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"Argument","name":{"kind":"Name","value":"nidn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nidn"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}}]}}]}}]} as unknown as DocumentNode<CreateDosenMutation, CreateDosenMutationVariables>;
export const DeleteDosenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDosen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDosen"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<DeleteDosenMutation, DeleteDosenMutationVariables>;
export const UpdateDosenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDosen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nidn"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDosen"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"Argument","name":{"kind":"Name","value":"nidn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nidn"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"nidn"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<UpdateDosenMutation, UpdateDosenMutationVariables>;
export const CreateMahasiswaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createMahasiswa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nim"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"semester"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prodiId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"konsentrasiId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMahasiswa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"nim"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nim"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"Argument","name":{"kind":"Name","value":"semester"},"value":{"kind":"Variable","name":{"kind":"Name","value":"semester"}}},{"kind":"Argument","name":{"kind":"Name","value":"prodiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prodiId"}}},{"kind":"Argument","name":{"kind":"Name","value":"konsentrasiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"konsentrasiId"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateMahasiswaMutation, CreateMahasiswaMutationVariables>;
export const UpdateMahasiswaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMahasiswa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nim"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"semester"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prodiId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"konsentrasiId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMahasiswa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"nim"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nim"}}},{"kind":"Argument","name":{"kind":"Name","value":"fullname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullname"}}},{"kind":"Argument","name":{"kind":"Name","value":"semester"},"value":{"kind":"Variable","name":{"kind":"Name","value":"semester"}}},{"kind":"Argument","name":{"kind":"Name","value":"prodiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prodiId"}}},{"kind":"Argument","name":{"kind":"Name","value":"konsentrasiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"konsentrasiId"}}},{"kind":"Argument","name":{"kind":"Name","value":"proyekId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proyekId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MahasiswaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MahasiswaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mahasiswa"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"nim"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"prodi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"konsentrasi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proyek"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"laporans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"biayaOperasionals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"biayaTransportasi"}},{"kind":"Field","name":{"kind":"Name","value":"biayaProyek"}},{"kind":"Field","name":{"kind":"Name","value":"biayaDll"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalBiaya"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"persyaratan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganSehat"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganOrangTua"}},{"kind":"Field","name":{"kind":"Name","value":"keteranganKelakuanBaik"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pendaftaran"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tanggalPendaftaran"}},{"kind":"Field","name":{"kind":"Name","value":"buktiPembayaran"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpdateMahasiswaMutation, UpdateMahasiswaMutationVariables>;
export const DeleteMahasiswaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteMahasiswa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMahasiswa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteMahasiswaMutation, DeleteMahasiswaMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAuthUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetAuthUserQuery, GetAuthUserQueryVariables>;