/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateAdmin($userId: ID!, $fullname: String!) {\n    createAdmin(userId: $userId, fullname: $fullname) {\n      ...AdminFields\n    }\n  }\n": types.CreateAdminDocument,
    "\n  mutation UpdateAdmin($id: ID!, $fullname: String!) {\n    updateAdmin(id: $id, fullname: $fullname) {\n      fullname\n      id\n    }\n  }\n": types.UpdateAdminDocument,
    "\n  mutation DeleteAdmin($id: ID!) {\n    deleteAdmin(id: $id) {\n      id\n      fullname\n    }\n  }\n": types.DeleteAdminDocument,
    "\n  mutation createAngkatan($tahun: Int!) {\n    createAngkatan(tahun: $tahun) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateAngkatanDocument,
    "\n  mutation updateAngkatan($id: ID!, $tahun: Int) {\n    updateAngkatan(id: $id, tahun: $tahun) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateAngkatanDocument,
    "\n  mutation deleteAngkatan($id: ID!) {\n    deleteAngkatan(id: $id) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n": types.DeleteAngkatanDocument,
    "\n  mutation SignIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      id\n      username\n      email\n      role\n      profilePhoto\n    }\n  }\n": types.SignInDocument,
    "\n  mutation SignOut {\n    signOut {\n      message\n    }\n  }\n": types.SignOutDocument,
    "\n  mutation updateBau($updateBauId: ID!, $name: String!) {\n    updateBau(id: $updateBauId, name: $name) {\n      id\n      name\n    }\n  }\n": types.UpdateBauDocument,
    "\n  mutation createBau($name: String!) {\n    createBau(name: $name) {\n      id\n      name\n  }\n  }\n": types.CreateBauDocument,
    "\n  mutation deleteBau($id: ID!) {\n    deleteBau(id: $id) {\n      id\n      name\n    }\n  }\n": types.DeleteBauDocument,
    "\n  mutation createDosen($fullname: String!, $nidn: String!, $userId: ID!, $proyekId: ID) {\n    createDosen(fullname: $fullname, nidn: $nidn, userId: $userId, \n    proyekId: $proyekId\n    ) {\n      id\n      fullname\n      nidn\n      userId\n\n    }\n}\n": types.CreateDosenDocument,
    "\nmutation deleteDosen($id: ID!) {\n    deleteDosen(id: $id) {\n      id\n      fullname\n      nidn\n      userId\n    }\n  }\n": types.DeleteDosenDocument,
    "\n  mutation updateDosen($id: ID!, $fullname: String, $nidn: String, $userId: ID, $proyekId: ID) {\n    updateDosen(id: $id, fullname: $fullname, nidn: $nidn, userId: $userId, proyekId: $proyekId) {\n      id\n      fullname\n      nidn\n      userId\n    }\n  }\n": types.UpdateDosenDocument,
    "\n  mutation createFakultas($name: String!) {\n    createFakultas(name: $name) {\n      id\n      name\n    }\n  }\n": types.CreateFakultasDocument,
    "\n  mutation updateFakultas($id: ID!, $name: String!) {\n    updateFakultas(id: $id, name: $name) {\n      id\n      name\n    \n    }\n  }\n": types.UpdateFakultasDocument,
    "\n  mutation deleteFakultas($id: ID!) {\n    deleteFakultas(id: $id) {\n      id\n      name\n    }\n  }\n": types.DeleteFakultasDocument,
    "\n  mutation createKonsentrasi($name: String!, $programStudiId: ID) {\n    createKonsentrasi(name: $name, programStudiId: $programStudiId) {\n      id\n      name\n      programStudiId\n    }\n  }\n": types.CreateKonsentrasiDocument,
    "\n  mutation updateKonsentrasi(\n    $id: ID!\n    $name: String\n    $programStudiId: ID\n  ) {\n    updateKonsentrasi(id: $id, name: $name, programStudiId: $programStudiId) {\n      id\n      name\n      programStudiId\n    }\n  }\n": types.UpdateKonsentrasiDocument,
    "\n  mutation deleteKonsentrasi($id: ID!) {\n    deleteKonsentrasi(id: $id) {\n      id\n      name\n      \n    }\n  }\n": types.DeleteKonsentrasiDocument,
    "\n  mutation createMahasiswa(\n    $userId: ID!,\n    $nim: String!,\n    $fullname: String!,\n    $semester: Int!,\n    $prodiId: ID!,\n    $konsentrasiId: ID!,\n    $proyekId: ID\n  ) {\n    createMahasiswa(\n      userId: $userId,\n      nim: $nim,\n      fullname: $fullname,\n      semester: $semester,\n      prodiId: $prodiId,\n      konsentrasiId: $konsentrasiId,\n      proyekId: $proyekId\n    ) {\n      ...MahasiswaFields\n    }\n  }\n": types.CreateMahasiswaDocument,
    "\n  mutation updateMahasiswa(\n    $id: ID!,\n    $nim: String,\n    $fullname: String,\n    $semester: Int,\n    $prodiId: ID,\n    $konsentrasiId: ID,\n    $proyekId: ID\n  ) {\n    updateMahasiswa(\n      id: $id,\n      nim: $nim,\n      fullname: $fullname,\n      semester: $semester,\n      prodiId: $prodiId,\n      konsentrasiId: $konsentrasiId,\n      proyekId: $proyekId\n    ) {\n      ...MahasiswaFields\n    }\n  }\n": types.UpdateMahasiswaDocument,
    "\n  mutation deleteMahasiswa($id: ID!) {\n    deleteMahasiswa(id: $id) {\n      id\n      \n    }\n  }\n": types.DeleteMahasiswaDocument,
    "\n  mutation createProgramStudi($name: String!, $fakultasId: ID!) {\n    createProgramStudi(name: $name, fakultasId: $fakultasId) {\n      id\n      name\n    }\n  }\n": types.CreateProgramStudiDocument,
    "\n  mutation updateProgramStudi($id: ID!, $name: String, $fakultasId: ID) {\n    updateProgramStudi(id: $id, name: $name, fakultasId: $fakultasId) {\n      id\n      name\n      fakultasId\n    }\n  }\n": types.UpdateProgramStudiDocument,
    "\n  mutation deleteProgramStudi($id: ID!) {\n    deleteProgramStudi(id: $id) {\n      id\n      name\n    }\n  }\n": types.DeleteProgramStudiDocument,
    "\n  mutation signUp ($signUpInput: SignUpInput!) {\n    signUp(signUpInput: $signUpInput) {\n      id\n      username\n      password\n      email\n      role\n      profilePhoto\n    }\n  }\n": types.SignUpDocument,
    "\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      id\n      username\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation updateUser($id: ID!, $data: UpdateUserInput!) {\n    updateUser(id: $id, data: $data) {\n      id\n    }\n  }\n": types.UpdateUserDocument,
    "\n  query GetAuthUser {\n    authUser {\n      id\n      username\n      password\n      profilePhoto\n      role\n      email\n    }\n  }\n": types.GetAuthUserDocument,
    "\n                fragment NewFakultas on Fakultas {\n                  name\n                  id\n                }": types.NewFakultasFragmentDoc,
    "\n                fragment NewAngkatan on Angkatan {\n                  id\n                  tahun\n                }": types.NewAngkatanFragmentDoc,
    "\n                fragment NewProgramStudi on ProgramStudi {\n                  id\n                  name\n                  fakultasId\n                }": types.NewProgramStudiFragmentDoc,
    "\n                fragment NewKonsentrasi on Konsentrasi {\n                  name\n                  id\n                }": types.NewKonsentrasiFragmentDoc,
    "\n                fragment NewDosen on Dosen {\n                  id\n                  fullname\n                  nidn\n                  userId\n                }\n              ": types.NewDosenFragmentDoc,
    "\n                fragment NewMahasiswa on Mahasiswa {\n                  id\n                  fullname\n                  nim\n                  userId\n                }\n              ": types.NewMahasiswaFragmentDoc,
    "\n  fragment BauFields on Bau {\n    id\n    name\n  }\n": types.BauFieldsFragmentDoc,
    "\n  fragment AdminFields on Admin {\n    id\n    user {\n      id\n      username\n      email\n      profilePhoto\n      role\n      createdAt\n      updatedAt\n    }\n    userId\n    fullname\n    createdAt\n    updatedAt\n  }\n": types.AdminFieldsFragmentDoc,
    "\n  fragment UserFields on User {\n    id\n    username\n    email\n    profilePhoto\n    role \n    admin {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      nim\n      semester\n      createdAt\n      updatedAt\n    }\n    dosen {\n      id\n      fullname\n      nidn\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n": types.UserFieldsFragmentDoc,
    "\n  fragment DosenFields on Dosen {\n    id\n    user {\n      id\n      username\n      email\n      profilePhoto\n      role\n      createdAt\n      updatedAt\n    }\n    fullname\n    proyekId\n    nidn\n    userId\n    createdAt\n    updatedAt\n  }\n": types.DosenFieldsFragmentDoc,
    "\n  fragment MahasiswaFields on Mahasiswa {\n    id\n    nim\n    fullname\n    semester\n    role\n    userId\n    kelasId\n    angkatanId\n    proyekId\n    kelompokId\n    prodi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    konsentrasi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    proyek {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n    laporans {\n      id\n      photo\n      file\n      createdAt\n      updatedAt\n    }\n    biayaOperasionals {\n\n      id\n      biayaTransportasi\n      biayaProyek\n      biayaDll\n      tanggalBiaya\n      createdAt\n      updatedAt\n    }\n    persyaratan {\n      id\n      keteranganSehat\n      keteranganPembayaran\n      keteranganOrangTua\n      keteranganKelakuanBaik\n      createdAt\n      updatedAt\n    }\n    pendaftaran {\n      id\n      tanggalPendaftaran\n      buktiPembayaran\n      createdAt\n      updatedAt\n    }\n    \n    createdAt\n    updatedAt\n  }\n": types.MahasiswaFieldsFragmentDoc,
    "\n  fragment ProgramStudiFields on ProgramStudi {\n    id\n    name\n    fakultas {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    konsentrasi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n": types.ProgramStudiFieldsFragmentDoc,
    "\n  fragment KonsentrasiFields on Konsentrasi {\n    id\n    name\n    programStudi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n": types.KonsentrasiFieldsFragmentDoc,
    "\n  fragment ProyekFields on Proyek {\n    id\n    name\n    photo\n    batasOrang\n    verified\n    lokasi\n    tanggalMulai\n    tanggalSelesai\n    bolehDimulai\n    telahSelesai\n    pembimbing {\n      id\n      fullname\n      nidn\n      createdAt\n      updatedAt\n    }\n    description\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    laporans {\n      id\n      photo\n      file\n      createdAt\n      updatedAt\n    }\n    biayaOperasionals {\n      id\n      biayaTransportasi\n      biayaProyek\n      biayaDll\n      tanggalBiaya\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n": types.ProyekFieldsFragmentDoc,
    "\n  fragment LaporanFields on Laporan {\n    id\n    photo\n    file\n    proyek {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n": types.LaporanFieldsFragmentDoc,
    "\n  fragment PersyaratanFields on Persyaratan {\n    id\n    keteranganSehat\n    keteranganPembayaran\n    keteranganOrangTua\n    keteranganKelakuanBaik\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n": types.PersyaratanFieldsFragmentDoc,
    "\n  fragment PendaftaranFields on Pendaftaran {\n    id\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    tanggalPendaftaran\n    buktiPembayaran\n    createdAt\n    updatedAt\n  }\n": types.PendaftaranFieldsFragmentDoc,
    "\n  fragment BiayaOperasionalFields on BiayaOperasional {\n    id\n    proyek {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    biayaTransportasi\n    biayaProyek\n    biayaDll\n    tanggalBiaya\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n": types.BiayaOperasionalFieldsFragmentDoc,
    "\n  fragment FakultasFields on Fakultas {\n    id\n    name\n    programStudi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n": types.FakultasFieldsFragmentDoc,
    "\n      fragment BauDetail on Bau {\n        ...BauFields\n      }\n    ": types.BauDetailFragmentDoc,
    "\n                fragment NewBau on Bau {\n                  ...BauFields\n                }\n              ": types.NewBauFragmentDoc,
    "\n      fragment AdminDetails on Admin {\n        ...AdminFields\n      }\n    ": types.AdminDetailsFragmentDoc,
    "\n      fragment AngkatanDetails on Angkatan {\n        id\n        tahun\n        createdAt\n        updatedAt\n      }\n    ": types.AngkatanDetailsFragmentDoc,
    "\n      fragment DosenDetails on Dosen {\n        ...DosenFields\n      }\n    ": types.DosenDetailsFragmentDoc,
    "\n      fragment FakultasDetails on Fakultas {\n        id\n        name\n      }\n    ": types.FakultasDetailsFragmentDoc,
    "\n      fragment MahasiswaDetails on Mahasiswa {\n        ...MahasiswaFields\n      }\n    ": types.MahasiswaDetailsFragmentDoc,
    "\n      fragment ProgramStudiDetails on ProgramStudi {\n        id\n        name\n        fakultasId\n      }\n    ": types.ProgramStudiDetailsFragmentDoc,
    "\n      fragment KonsentrasiDetails on Konsentrasi {\n        id\n        name\n        programStudiId\n      }\n    ": types.KonsentrasiDetailsFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAdmin($userId: ID!, $fullname: String!) {\n    createAdmin(userId: $userId, fullname: $fullname) {\n      ...AdminFields\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAdmin($userId: ID!, $fullname: String!) {\n    createAdmin(userId: $userId, fullname: $fullname) {\n      ...AdminFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAdmin($id: ID!, $fullname: String!) {\n    updateAdmin(id: $id, fullname: $fullname) {\n      fullname\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAdmin($id: ID!, $fullname: String!) {\n    updateAdmin(id: $id, fullname: $fullname) {\n      fullname\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAdmin($id: ID!) {\n    deleteAdmin(id: $id) {\n      id\n      fullname\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAdmin($id: ID!) {\n    deleteAdmin(id: $id) {\n      id\n      fullname\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createAngkatan($tahun: Int!) {\n    createAngkatan(tahun: $tahun) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation createAngkatan($tahun: Int!) {\n    createAngkatan(tahun: $tahun) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateAngkatan($id: ID!, $tahun: Int) {\n    updateAngkatan(id: $id, tahun: $tahun) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation updateAngkatan($id: ID!, $tahun: Int) {\n    updateAngkatan(id: $id, tahun: $tahun) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteAngkatan($id: ID!) {\n    deleteAngkatan(id: $id) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation deleteAngkatan($id: ID!) {\n    deleteAngkatan(id: $id) {\n      id\n      tahun\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      id\n      username\n      email\n      role\n      profilePhoto\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($signInInput: SignInInput!) {\n    signIn(signInInput: $signInInput) {\n      id\n      username\n      email\n      role\n      profilePhoto\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignOut {\n    signOut {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation SignOut {\n    signOut {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateBau($updateBauId: ID!, $name: String!) {\n    updateBau(id: $updateBauId, name: $name) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation updateBau($updateBauId: ID!, $name: String!) {\n    updateBau(id: $updateBauId, name: $name) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createBau($name: String!) {\n    createBau(name: $name) {\n      id\n      name\n  }\n  }\n"): (typeof documents)["\n  mutation createBau($name: String!) {\n    createBau(name: $name) {\n      id\n      name\n  }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteBau($id: ID!) {\n    deleteBau(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation deleteBau($id: ID!) {\n    deleteBau(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createDosen($fullname: String!, $nidn: String!, $userId: ID!, $proyekId: ID) {\n    createDosen(fullname: $fullname, nidn: $nidn, userId: $userId, \n    proyekId: $proyekId\n    ) {\n      id\n      fullname\n      nidn\n      userId\n\n    }\n}\n"): (typeof documents)["\n  mutation createDosen($fullname: String!, $nidn: String!, $userId: ID!, $proyekId: ID) {\n    createDosen(fullname: $fullname, nidn: $nidn, userId: $userId, \n    proyekId: $proyekId\n    ) {\n      id\n      fullname\n      nidn\n      userId\n\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteDosen($id: ID!) {\n    deleteDosen(id: $id) {\n      id\n      fullname\n      nidn\n      userId\n    }\n  }\n"): (typeof documents)["\nmutation deleteDosen($id: ID!) {\n    deleteDosen(id: $id) {\n      id\n      fullname\n      nidn\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateDosen($id: ID!, $fullname: String, $nidn: String, $userId: ID, $proyekId: ID) {\n    updateDosen(id: $id, fullname: $fullname, nidn: $nidn, userId: $userId, proyekId: $proyekId) {\n      id\n      fullname\n      nidn\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation updateDosen($id: ID!, $fullname: String, $nidn: String, $userId: ID, $proyekId: ID) {\n    updateDosen(id: $id, fullname: $fullname, nidn: $nidn, userId: $userId, proyekId: $proyekId) {\n      id\n      fullname\n      nidn\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createFakultas($name: String!) {\n    createFakultas(name: $name) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createFakultas($name: String!) {\n    createFakultas(name: $name) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateFakultas($id: ID!, $name: String!) {\n    updateFakultas(id: $id, name: $name) {\n      id\n      name\n    \n    }\n  }\n"): (typeof documents)["\n  mutation updateFakultas($id: ID!, $name: String!) {\n    updateFakultas(id: $id, name: $name) {\n      id\n      name\n    \n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteFakultas($id: ID!) {\n    deleteFakultas(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation deleteFakultas($id: ID!) {\n    deleteFakultas(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createKonsentrasi($name: String!, $programStudiId: ID) {\n    createKonsentrasi(name: $name, programStudiId: $programStudiId) {\n      id\n      name\n      programStudiId\n    }\n  }\n"): (typeof documents)["\n  mutation createKonsentrasi($name: String!, $programStudiId: ID) {\n    createKonsentrasi(name: $name, programStudiId: $programStudiId) {\n      id\n      name\n      programStudiId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateKonsentrasi(\n    $id: ID!\n    $name: String\n    $programStudiId: ID\n  ) {\n    updateKonsentrasi(id: $id, name: $name, programStudiId: $programStudiId) {\n      id\n      name\n      programStudiId\n    }\n  }\n"): (typeof documents)["\n  mutation updateKonsentrasi(\n    $id: ID!\n    $name: String\n    $programStudiId: ID\n  ) {\n    updateKonsentrasi(id: $id, name: $name, programStudiId: $programStudiId) {\n      id\n      name\n      programStudiId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteKonsentrasi($id: ID!) {\n    deleteKonsentrasi(id: $id) {\n      id\n      name\n      \n    }\n  }\n"): (typeof documents)["\n  mutation deleteKonsentrasi($id: ID!) {\n    deleteKonsentrasi(id: $id) {\n      id\n      name\n      \n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createMahasiswa(\n    $userId: ID!,\n    $nim: String!,\n    $fullname: String!,\n    $semester: Int!,\n    $prodiId: ID!,\n    $konsentrasiId: ID!,\n    $proyekId: ID\n  ) {\n    createMahasiswa(\n      userId: $userId,\n      nim: $nim,\n      fullname: $fullname,\n      semester: $semester,\n      prodiId: $prodiId,\n      konsentrasiId: $konsentrasiId,\n      proyekId: $proyekId\n    ) {\n      ...MahasiswaFields\n    }\n  }\n"): (typeof documents)["\n  mutation createMahasiswa(\n    $userId: ID!,\n    $nim: String!,\n    $fullname: String!,\n    $semester: Int!,\n    $prodiId: ID!,\n    $konsentrasiId: ID!,\n    $proyekId: ID\n  ) {\n    createMahasiswa(\n      userId: $userId,\n      nim: $nim,\n      fullname: $fullname,\n      semester: $semester,\n      prodiId: $prodiId,\n      konsentrasiId: $konsentrasiId,\n      proyekId: $proyekId\n    ) {\n      ...MahasiswaFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateMahasiswa(\n    $id: ID!,\n    $nim: String,\n    $fullname: String,\n    $semester: Int,\n    $prodiId: ID,\n    $konsentrasiId: ID,\n    $proyekId: ID\n  ) {\n    updateMahasiswa(\n      id: $id,\n      nim: $nim,\n      fullname: $fullname,\n      semester: $semester,\n      prodiId: $prodiId,\n      konsentrasiId: $konsentrasiId,\n      proyekId: $proyekId\n    ) {\n      ...MahasiswaFields\n    }\n  }\n"): (typeof documents)["\n  mutation updateMahasiswa(\n    $id: ID!,\n    $nim: String,\n    $fullname: String,\n    $semester: Int,\n    $prodiId: ID,\n    $konsentrasiId: ID,\n    $proyekId: ID\n  ) {\n    updateMahasiswa(\n      id: $id,\n      nim: $nim,\n      fullname: $fullname,\n      semester: $semester,\n      prodiId: $prodiId,\n      konsentrasiId: $konsentrasiId,\n      proyekId: $proyekId\n    ) {\n      ...MahasiswaFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteMahasiswa($id: ID!) {\n    deleteMahasiswa(id: $id) {\n      id\n      \n    }\n  }\n"): (typeof documents)["\n  mutation deleteMahasiswa($id: ID!) {\n    deleteMahasiswa(id: $id) {\n      id\n      \n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createProgramStudi($name: String!, $fakultasId: ID!) {\n    createProgramStudi(name: $name, fakultasId: $fakultasId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createProgramStudi($name: String!, $fakultasId: ID!) {\n    createProgramStudi(name: $name, fakultasId: $fakultasId) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateProgramStudi($id: ID!, $name: String, $fakultasId: ID) {\n    updateProgramStudi(id: $id, name: $name, fakultasId: $fakultasId) {\n      id\n      name\n      fakultasId\n    }\n  }\n"): (typeof documents)["\n  mutation updateProgramStudi($id: ID!, $name: String, $fakultasId: ID) {\n    updateProgramStudi(id: $id, name: $name, fakultasId: $fakultasId) {\n      id\n      name\n      fakultasId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteProgramStudi($id: ID!) {\n    deleteProgramStudi(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation deleteProgramStudi($id: ID!) {\n    deleteProgramStudi(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation signUp ($signUpInput: SignUpInput!) {\n    signUp(signUpInput: $signUpInput) {\n      id\n      username\n      password\n      email\n      role\n      profilePhoto\n    }\n  }\n"): (typeof documents)["\n  mutation signUp ($signUpInput: SignUpInput!) {\n    signUp(signUpInput: $signUpInput) {\n      id\n      username\n      password\n      email\n      role\n      profilePhoto\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      id\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateUser($id: ID!, $data: UpdateUserInput!) {\n    updateUser(id: $id, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation updateUser($id: ID!, $data: UpdateUserInput!) {\n    updateUser(id: $id, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAuthUser {\n    authUser {\n      id\n      username\n      password\n      profilePhoto\n      role\n      email\n    }\n  }\n"): (typeof documents)["\n  query GetAuthUser {\n    authUser {\n      id\n      username\n      password\n      profilePhoto\n      role\n      email\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                fragment NewFakultas on Fakultas {\n                  name\n                  id\n                }"): (typeof documents)["\n                fragment NewFakultas on Fakultas {\n                  name\n                  id\n                }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                fragment NewAngkatan on Angkatan {\n                  id\n                  tahun\n                }"): (typeof documents)["\n                fragment NewAngkatan on Angkatan {\n                  id\n                  tahun\n                }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                fragment NewProgramStudi on ProgramStudi {\n                  id\n                  name\n                  fakultasId\n                }"): (typeof documents)["\n                fragment NewProgramStudi on ProgramStudi {\n                  id\n                  name\n                  fakultasId\n                }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                fragment NewKonsentrasi on Konsentrasi {\n                  name\n                  id\n                }"): (typeof documents)["\n                fragment NewKonsentrasi on Konsentrasi {\n                  name\n                  id\n                }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                fragment NewDosen on Dosen {\n                  id\n                  fullname\n                  nidn\n                  userId\n                }\n              "): (typeof documents)["\n                fragment NewDosen on Dosen {\n                  id\n                  fullname\n                  nidn\n                  userId\n                }\n              "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                fragment NewMahasiswa on Mahasiswa {\n                  id\n                  fullname\n                  nim\n                  userId\n                }\n              "): (typeof documents)["\n                fragment NewMahasiswa on Mahasiswa {\n                  id\n                  fullname\n                  nim\n                  userId\n                }\n              "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BauFields on Bau {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment BauFields on Bau {\n    id\n    name\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AdminFields on Admin {\n    id\n    user {\n      id\n      username\n      email\n      profilePhoto\n      role\n      createdAt\n      updatedAt\n    }\n    userId\n    fullname\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment AdminFields on Admin {\n    id\n    user {\n      id\n      username\n      email\n      profilePhoto\n      role\n      createdAt\n      updatedAt\n    }\n    userId\n    fullname\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserFields on User {\n    id\n    username\n    email\n    profilePhoto\n    role \n    admin {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      nim\n      semester\n      createdAt\n      updatedAt\n    }\n    dosen {\n      id\n      fullname\n      nidn\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment UserFields on User {\n    id\n    username\n    email\n    profilePhoto\n    role \n    admin {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      nim\n      semester\n      createdAt\n      updatedAt\n    }\n    dosen {\n      id\n      fullname\n      nidn\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment DosenFields on Dosen {\n    id\n    user {\n      id\n      username\n      email\n      profilePhoto\n      role\n      createdAt\n      updatedAt\n    }\n    fullname\n    proyekId\n    nidn\n    userId\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment DosenFields on Dosen {\n    id\n    user {\n      id\n      username\n      email\n      profilePhoto\n      role\n      createdAt\n      updatedAt\n    }\n    fullname\n    proyekId\n    nidn\n    userId\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MahasiswaFields on Mahasiswa {\n    id\n    nim\n    fullname\n    semester\n    role\n    userId\n    kelasId\n    angkatanId\n    proyekId\n    kelompokId\n    prodi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    konsentrasi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    proyek {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n    laporans {\n      id\n      photo\n      file\n      createdAt\n      updatedAt\n    }\n    biayaOperasionals {\n\n      id\n      biayaTransportasi\n      biayaProyek\n      biayaDll\n      tanggalBiaya\n      createdAt\n      updatedAt\n    }\n    persyaratan {\n      id\n      keteranganSehat\n      keteranganPembayaran\n      keteranganOrangTua\n      keteranganKelakuanBaik\n      createdAt\n      updatedAt\n    }\n    pendaftaran {\n      id\n      tanggalPendaftaran\n      buktiPembayaran\n      createdAt\n      updatedAt\n    }\n    \n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment MahasiswaFields on Mahasiswa {\n    id\n    nim\n    fullname\n    semester\n    role\n    userId\n    kelasId\n    angkatanId\n    proyekId\n    kelompokId\n    prodi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    konsentrasi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    proyek {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n    laporans {\n      id\n      photo\n      file\n      createdAt\n      updatedAt\n    }\n    biayaOperasionals {\n\n      id\n      biayaTransportasi\n      biayaProyek\n      biayaDll\n      tanggalBiaya\n      createdAt\n      updatedAt\n    }\n    persyaratan {\n      id\n      keteranganSehat\n      keteranganPembayaran\n      keteranganOrangTua\n      keteranganKelakuanBaik\n      createdAt\n      updatedAt\n    }\n    pendaftaran {\n      id\n      tanggalPendaftaran\n      buktiPembayaran\n      createdAt\n      updatedAt\n    }\n    \n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ProgramStudiFields on ProgramStudi {\n    id\n    name\n    fakultas {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    konsentrasi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment ProgramStudiFields on ProgramStudi {\n    id\n    name\n    fakultas {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    konsentrasi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment KonsentrasiFields on Konsentrasi {\n    id\n    name\n    programStudi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment KonsentrasiFields on Konsentrasi {\n    id\n    name\n    programStudi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ProyekFields on Proyek {\n    id\n    name\n    photo\n    batasOrang\n    verified\n    lokasi\n    tanggalMulai\n    tanggalSelesai\n    bolehDimulai\n    telahSelesai\n    pembimbing {\n      id\n      fullname\n      nidn\n      createdAt\n      updatedAt\n    }\n    description\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    laporans {\n      id\n      photo\n      file\n      createdAt\n      updatedAt\n    }\n    biayaOperasionals {\n      id\n      biayaTransportasi\n      biayaProyek\n      biayaDll\n      tanggalBiaya\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment ProyekFields on Proyek {\n    id\n    name\n    photo\n    batasOrang\n    verified\n    lokasi\n    tanggalMulai\n    tanggalSelesai\n    bolehDimulai\n    telahSelesai\n    pembimbing {\n      id\n      fullname\n      nidn\n      createdAt\n      updatedAt\n    }\n    description\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    laporans {\n      id\n      photo\n      file\n      createdAt\n      updatedAt\n    }\n    biayaOperasionals {\n      id\n      biayaTransportasi\n      biayaProyek\n      biayaDll\n      tanggalBiaya\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment LaporanFields on Laporan {\n    id\n    photo\n    file\n    proyek {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment LaporanFields on Laporan {\n    id\n    photo\n    file\n    proyek {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PersyaratanFields on Persyaratan {\n    id\n    keteranganSehat\n    keteranganPembayaran\n    keteranganOrangTua\n    keteranganKelakuanBaik\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment PersyaratanFields on Persyaratan {\n    id\n    keteranganSehat\n    keteranganPembayaran\n    keteranganOrangTua\n    keteranganKelakuanBaik\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PendaftaranFields on Pendaftaran {\n    id\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    tanggalPendaftaran\n    buktiPembayaran\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment PendaftaranFields on Pendaftaran {\n    id\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    tanggalPendaftaran\n    buktiPembayaran\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BiayaOperasionalFields on BiayaOperasional {\n    id\n    proyek {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    biayaTransportasi\n    biayaProyek\n    biayaDll\n    tanggalBiaya\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment BiayaOperasionalFields on BiayaOperasional {\n    id\n    proyek {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    biayaTransportasi\n    biayaProyek\n    biayaDll\n    tanggalBiaya\n    mahasiswa {\n      id\n      fullname\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FakultasFields on Fakultas {\n    id\n    name\n    programStudi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment FakultasFields on Fakultas {\n    id\n    name\n    programStudi {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      fragment BauDetail on Bau {\n        ...BauFields\n      }\n    "): (typeof documents)["\n      fragment BauDetail on Bau {\n        ...BauFields\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                fragment NewBau on Bau {\n                  ...BauFields\n                }\n              "): (typeof documents)["\n                fragment NewBau on Bau {\n                  ...BauFields\n                }\n              "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      fragment AdminDetails on Admin {\n        ...AdminFields\n      }\n    "): (typeof documents)["\n      fragment AdminDetails on Admin {\n        ...AdminFields\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      fragment AngkatanDetails on Angkatan {\n        id\n        tahun\n        createdAt\n        updatedAt\n      }\n    "): (typeof documents)["\n      fragment AngkatanDetails on Angkatan {\n        id\n        tahun\n        createdAt\n        updatedAt\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      fragment DosenDetails on Dosen {\n        ...DosenFields\n      }\n    "): (typeof documents)["\n      fragment DosenDetails on Dosen {\n        ...DosenFields\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      fragment FakultasDetails on Fakultas {\n        id\n        name\n      }\n    "): (typeof documents)["\n      fragment FakultasDetails on Fakultas {\n        id\n        name\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      fragment MahasiswaDetails on Mahasiswa {\n        ...MahasiswaFields\n      }\n    "): (typeof documents)["\n      fragment MahasiswaDetails on Mahasiswa {\n        ...MahasiswaFields\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      fragment ProgramStudiDetails on ProgramStudi {\n        id\n        name\n        fakultasId\n      }\n    "): (typeof documents)["\n      fragment ProgramStudiDetails on ProgramStudi {\n        id\n        name\n        fakultasId\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      fragment KonsentrasiDetails on Konsentrasi {\n        id\n        name\n        programStudiId\n      }\n    "): (typeof documents)["\n      fragment KonsentrasiDetails on Konsentrasi {\n        id\n        name\n        programStudiId\n      }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;