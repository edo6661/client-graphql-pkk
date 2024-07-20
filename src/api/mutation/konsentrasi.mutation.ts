import { gql } from "@apollo/client";

export const createKonsentrasi = gql`
  mutation createKonsentrasi($name: String!, $programStudiId: ID) {
    createKonsentrasi(name: $name, programStudiId: $programStudiId) {
      id
      name
      programStudiId
    }
  }
`;

export const updateKonsentrasi = gql`
  mutation updateKonsentrasi(
    $id: ID!
    $name: String
    $programStudiId: ID
  ) {
    updateKonsentrasi(id: $id, name: $name, programStudiId: $programStudiId) {
      id
      name
      programStudiId
    }
  }
`;

export const deleteKonsentrasi = gql`
  mutation deleteKonsentrasi($id: ID!) {
    deleteKonsentrasi(id: $id) {
      id
      name
      
    }
  }
`
