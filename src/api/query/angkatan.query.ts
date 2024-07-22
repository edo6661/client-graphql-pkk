import { gql } from "@apollo/client";

export const getAngkatans = gql`
  query {
    angkatans {
      id
      tahun
      createdAt
      updatedAt
    }
  }
`