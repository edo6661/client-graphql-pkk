import { gql } from "@apollo/client";

export const getKelompoks = gql`
  query {
    kelompoks {
      id
      name
      proyekId
    }
  }
`
