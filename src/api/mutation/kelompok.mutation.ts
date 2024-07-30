import { gql } from "@apollo/client";

export const createKelompok = gql`
  mutation createKelompok($name: String!, $proyekId: ID, $nilai: Int, $feedback: String) {
    createKelompok
(name: $name, proyekId: $proyekId
    , nilai: $nilai, feedback: $feedback  
    ) {
      id
      name
      proyekId
      nilai
      feedback
    }
  }
`
export const updateKelompok = gql`
  mutation updateKelompok
  ($id: ID!, $name: String, $proyekId: ID,
    $nilai: Int, $feedback: String
  ) {
    updateKelompok(
      id: $id,
      name: $name,
      proyekId: $proyekId, 
      nilai: $nilai, 
      feedback: $feedback
    ) {
      id
      name
      proyekId
      nilai
      feedback
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