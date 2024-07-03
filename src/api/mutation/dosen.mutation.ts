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
