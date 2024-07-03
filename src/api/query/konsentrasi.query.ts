import { gql } from "@apollo/client";

export const getKonsentrasis = gql`
  query {
    konsentrasis {
      name
      # TODO:
      # programStudi {
      #   name
      # }
    }
  }
`