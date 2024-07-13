import { gql } from "@apollo/client";

export const getKonsentrasis = gql`
  query {
    konsentrasis {
      id
      name
      # TODO:
      # programStudi {
      #   name
      # }
    }
  }
`