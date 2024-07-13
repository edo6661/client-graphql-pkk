import { gql } from "@apollo/client";

export const getMahasiswas = gql`
  query {
    mahasiswas {
      ...MahasiswaFields
    }
  }
`; 
