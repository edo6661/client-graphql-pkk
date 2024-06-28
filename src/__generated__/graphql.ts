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
  updatedAt: Scalars['String']['output'];
  user: User;
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
  proyekId: Scalars['ID']['input'];
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
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  laporan: Array<Laporan>;
  laporans?: Maybe<Array<Laporan>>;
  mahasiswa?: Maybe<Mahasiswa>;
  name: Scalars['String']['output'];
  pembimbing?: Maybe<Dosen>;
  photo?: Maybe<Scalars['String']['output']>;
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

export type GetAuthUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthUserQuery = { __typename?: 'Query', authUser?: { __typename?: 'User', id: string, username: string, password: string, profilePhoto: string, role: Role, email?: string | null } | null };


export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const UpdateBauDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBau"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateBauId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBau"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateBauId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateBauMutation, UpdateBauMutationVariables>;
export const GetAuthUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetAuthUserQuery, GetAuthUserQueryVariables>;