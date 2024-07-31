import { gql } from "@apollo/client";

export const getMahasiswas = gql`
  query {
    mahasiswas {
      ...MahasiswaFields
    }
  }
`; 

export const getMahasiswa = gql`
  query($id: ID!) {
    mahasiswa(id: $id) {
      ...MahasiswaFields
    }
  }
`