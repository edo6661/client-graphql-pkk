import { gql } from "@apollo/client";

export const getKonsentrasis = gql`
  query {
    konsentrasis {
      id
      name
      programStudiId
      # TODO:
      # programStudi {
      #   name
      # }
    }
  }
`