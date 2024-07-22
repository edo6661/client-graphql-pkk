import { gql } from "@apollo/client";

export const getKelass = gql`
  query {
    kelass {
      id
      name
      createdAt
      updatedAt
    }
  }
`
