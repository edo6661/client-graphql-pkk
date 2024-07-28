import { gql } from "@apollo/client";

export const createProgramStudi = gql`
  mutation createProgramStudi($name: String!, $fakultasId: ID!) {
    createProgramStudi(name: $name, fakultasId: $fakultasId) {
      id
      name
      fakultasId
    }
  }
`
export const updateProgramStudi = gql`
  mutation updateProgramStudi($id: ID!, $name: String, $fakultasId: ID) {
    updateProgramStudi(id: $id, name: $name, fakultasId: $fakultasId) {
      id
      name
      fakultasId
    }
  }
`

export const deleteProgramStudi = gql`
  mutation deleteProgramStudi($id: ID!) {
    deleteProgramStudi(id: $id) {
      id
      name
    }
  }
`