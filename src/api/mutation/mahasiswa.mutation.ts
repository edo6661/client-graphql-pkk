import { gql } from "@apollo/client";

export const createMahasiswa = gql`
  mutation createMahasiswa(
    $userId: ID!,
    $nim: String!,
    $fullname: String!,
    $semester: Int!,
    $prodiId: ID!,
    $konsentrasiId: ID!,
    $proyekId: ID
  ) {
    createMahasiswa(
      userId: $userId,
      nim: $nim,
      fullname: $fullname,
      semester: $semester,
      prodiId: $prodiId,
      konsentrasiId: $konsentrasiId,
      proyekId: $proyekId
    ) {
      ...MahasiswaFields
    }
  }
`
export const updateMahasiswa = gql`
  mutation updateMahasiswa(
    $id: ID!,
    $nim: String,
    $fullname: String,
    $semester: Int,
    $prodiId: ID,
    $konsentrasiId: ID,
    $proyekId: ID
  ) {
    updateMahasiswa(
      id: $id,
      nim: $nim,
      fullname: $fullname,
      semester: $semester,
      prodiId: $prodiId,
      konsentrasiId: $konsentrasiId,
      proyekId: $proyekId
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