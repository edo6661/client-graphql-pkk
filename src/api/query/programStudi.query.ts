import { gql } from "@apollo/client";

export const getProgramStudis = gql`
  query {
    programStudis {
      id
      name
      fakultasId
    }
    # TODO:
    # konsentrasi {
    #   name
    # }
    # fakultas{
    #   name
    # }

  }
`