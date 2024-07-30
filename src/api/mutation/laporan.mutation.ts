import { gql } from "@apollo/client";

export const createLaporan = gql`
  mutation createLaporan(
    $photo: String,
    $file: String,
    $proyekId: ID!,
    $mahasiswaId: ID!,
  ) {
    createLaporan(
      photo: $photo,
      file: $file,
      proyekId: $proyekId,
      mahasiswaId: $mahasiswaId,
    ) {
      ...LaporanFields
    }
  }
`

export const updateLaporan = gql`
  mutation updateLaporan(
    $id: ID!,
    $photo: String,
    $file: String,
    $proyekId: ID,
    $mahasiswaId: ID
  ) {
    updateLaporan(
      id: $id,
      photo: $photo,
      file: $file,
      proyekId: $proyekId,
      mahasiswaId: $mahasiswaId
    ) {
      ...LaporanFields
    }
  }
`

export const deleteLaporan = gql`
  mutation deleteLaporan($id: ID!) {
    deleteLaporan(id: $id) {
      ...LaporanFields
    }
  }
`