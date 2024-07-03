import { gql } from "@apollo/client";

export const getDosen = gql`
  query {
    dosens {
      id
      fullname
      nidn
    }
  }
`
