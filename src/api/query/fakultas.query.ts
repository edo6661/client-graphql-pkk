import { gql } from "@apollo/client";

export const getFakultas = gql`
  query {
    fakultas {
      id
      name
    }
  }
`