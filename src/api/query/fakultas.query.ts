import { gql } from "@apollo/client";

export const getFakultas = gql`
  query {
    fakultas {
      name
      # TODO: 
      # programStudi {
      #   name
      # }
    }
  }
`