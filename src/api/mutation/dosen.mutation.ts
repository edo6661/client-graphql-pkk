import { gql } from "@apollo/client";
export const createDosen = gql`
  mutation createDosen($fullname: String!, $nidn: String!, $userId: ID!) {
    createDosen(fullname: $fullname, nidn: $nidn, userId: $userId) {
      id
      fullname
      nidn
    }
}
`
export const removeDosen = gql`
  mutation deleteDosen($id: ID!) {
    deleteDosen(id: $id) {
      id
      fullname
      nidn
      userId
    }
  }
`
export const updateDosen = gql`
  mutation updateDosen($id: ID!, $fullname: String, $nidn: String, $userId: ID) {
    updateDosen(id: $id, fullname: $fullname, nidn: $nidn, userId: $userId) {
      id
      fullname
      nidn
      userId
    }
  }
`