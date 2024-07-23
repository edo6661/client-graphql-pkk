import { gql } from "@apollo/client";

export const createKelompok = gql`
  mutation createKelompok($name: String!, $proyekId: ID) {
    createKelompok(name: $name, proyekId: $proyekId) {
      id
      name
      proyekId
    }
  }
`
export const updateKelompok = gql`
  mutation updateKelompok($id: ID!, $name: String, $proyekId: ID) {
    updateKelompok(
      id: $id,
      name: $name,
      proyekId: $proyekId
    ) {
      id
      name
      proyekId
    }
  }
`

export const deleteKelompok = gql`
  mutation deleteKelompok($id: ID!) {
    deleteKelompok(
      id: $id
    ) {
      id
      name
      proyekId
    }
  }
`