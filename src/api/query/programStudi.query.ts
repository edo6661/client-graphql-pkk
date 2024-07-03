import { gql } from "@apollo/client";

export const getProgramStudis = gql`
  query {
    programStudis {
      name
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