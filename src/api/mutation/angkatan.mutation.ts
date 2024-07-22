import { gql } from "@apollo/client";

export const createAngkatan = gql`
  mutation createAngkatan($tahun: Int!) {
    createAngkatan(tahun: $tahun) {
      id
      tahun
      createdAt
      updatedAt
    }
  }
`
export const updateAngkatan = gql`
  mutation updateAngkatan($id: ID!, $tahun: Int) {
    updateAngkatan(id: $id, tahun: $tahun) {
      id
      tahun
      createdAt
      updatedAt
    }
  }
`

export const deleteAngkatan = gql`
  mutation deleteAngkatan($id: ID!) {
    deleteAngkatan(id: $id) {
      id
      tahun
      createdAt
      updatedAt
    }
  }
`