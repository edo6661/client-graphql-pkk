import { gql } from "@apollo/client";
export const createDosen = gql`
  mutation createDosen($fullname: String!, $nidn: String!, $userId: ID!, $proyekId: ID) {
    createDosen(fullname: $fullname, nidn: $nidn, userId: $userId, 
    proyekId: $proyekId
    ) {
      id
      fullname
      nidn
      userId

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
  mutation updateDosen($id: ID!, $fullname: String, $nidn: String, $userId: ID, $proyekId: ID) {
    updateDosen(id: $id, fullname: $fullname, nidn: $nidn, userId: $userId, proyekId: $proyekId) {
      id
      fullname
      nidn
      userId
    }
  }
`