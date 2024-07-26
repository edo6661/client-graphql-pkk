import { gql } from "@apollo/client";

export const createProyek = gql`
  mutation createProyek (
    $name: String!,
    $photo: String,
    $description: String,
    $batasOrang: Int!,
    $verified: Boolean,
    $bolehDimulai: Boolean,
    $telahSelesai: Boolean,
    $lokasi: String,
    $tanggalMulai: String,
    $tanggalSelesai: String,
    $type: TypeProyek
  ) {
    createProyek(
      name: $name,
      photo: $photo,
      description: $description,
      batasOrang: $batasOrang,
      verified: $verified,
      bolehDimulai: $bolehDimulai,
      telahSelesai: $telahSelesai,
      lokasi: $lokasi,
      tanggalMulai: $tanggalMulai,
      tanggalSelesai: $tanggalSelesai,
      type: $type
    ) {
     ...ProyekFields
    }
  }
`

export const updateProyek = gql`
  mutation updateProyek(
    $id: ID!,
    $name: String,
    $photo: String,
    $description: String,
    $batasOrang: Int,
    $verified: Boolean,
    $bolehDimulai: Boolean,
    $telahSelesai: Boolean,
    $lokasi: String,
    $tanggalMulai: String,
    $tanggalSelesai: String,
    $type: TypeProyek
  ) {
    updateProyek(
      id: $id,
      name: $name,
      photo: $photo,
      description: $description,
      batasOrang: $batasOrang,
      verified: $verified,
      bolehDimulai: $bolehDimulai,
      telahSelesai: $telahSelesai,
      lokasi: $lokasi,
      tanggalMulai: $tanggalMulai,
      tanggalSelesai: $tanggalSelesai,
      type: $type
    ) {
      ...ProyekFields
    }
  }
  
`

export const deleteProyek = gql`
  mutation deleteProyek ($id: ID!) {
    deleteProyek(id: $id) {
      id
    }
  }
`