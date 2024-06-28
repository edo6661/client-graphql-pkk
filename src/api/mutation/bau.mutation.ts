import { gql } from "@apollo/client";

export const updateBau = gql`
  mutation updateBau($updateBauId: ID!, $name: String!) {
    updateBau(id: $updateBauId, name: $name) {
      id
      name
    }
  }
`