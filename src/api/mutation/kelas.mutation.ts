import { gql } from "@apollo/client";

export const createKelas = gql`
  mutation createKelas($name: String!) {
    createKelas(name: $name) {
      id
      name
    }
  }
`
export const updateKelas = gql`
  mutation updateKelas($id: ID!, $name: String) {
    updateKelas(id: $id, name: $name) {
      id
      name
    }
  }
`
export const deleteKelas = gql`
  mutation DeleteKelas($id: ID!) {
    deleteKelas(id: $id) {
      id
      name
    }
  }
`;
