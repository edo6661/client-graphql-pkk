import { gql } from "@apollo/client";

export const createMahasiswa = gql`
  mutation createMahasiswa(
    $userId: ID!,
    $nim: String!,
    $fullname: String!,
    $semester: Int!,
    $prodiId: ID,
    $konsentrasiId: ID,
    $kelasId: ID,
    $kelompokId: ID,
    $proyekId: ID,
    $angkatanId: ID,
    $role: RoleMahasiswa
  ) {
    createMahasiswa(
      userId: $userId,
      nim: $nim,
      fullname: $fullname,
      semester: $semester,
      prodiId: $prodiId,
      konsentrasiId: $konsentrasiId,
      kelasId: $kelasId,
      kelompokId: $kelompokId,
      proyekId: $proyekId,
      angkatanId: $angkatanId,
      role: $role
    ) {
      ...MahasiswaFields
    }
  }
`
export const updateMahasiswa = gql`
  mutation updateMahasiswa(
    $id: ID!,
    $userId: ID,
    $nim: String,
    $fullname: String,
    $semester: Int,
    $prodiId: ID,
    $konsentrasiId: ID,
    $kelasId: ID,
    $kelompokId: ID,
    $proyekId: ID,
    $angkatanId: ID,
    $nilai: Int,
    $role: RoleMahasiswa
  ) {
    updateMahasiswa(
      id: $id,
      nim: $nim,
      fullname: $fullname,
      semester: $semester,
      prodiId: $prodiId,
      konsentrasiId: $konsentrasiId,
      proyekId: $proyekId,
      angkatanId: $angkatanId,
      kelasId: $kelasId,
      kelompokId: $kelompokId,
      role: $role,
      userId: $userId,
      nilai: $nilai
      
    ) {
      ...MahasiswaFields
    }
  }
`

export const deleteMahasiswa = gql`
  mutation deleteMahasiswa($id: ID!) {
    deleteMahasiswa(id: $id) {
      id
      
    }
  }
`