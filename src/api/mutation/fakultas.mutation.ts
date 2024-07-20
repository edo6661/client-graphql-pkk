import { gql } from "@apollo/client";

export const createFakultas = gql`
  mutation createFakultas($name: String!) {
    createFakultas(name: $name) {
      id
      name
    }
  }
`
export const updateFakultas = gql`
  mutation updateFakultas($id: String!, $name: String!) {
    updateFakultas(id: $id, name: $name) {
      ...FakultasFields
    }
  }
`
export const deleteFakultas = gql`
  mutation deleteFakultas($id: ID!) {
    deleteFakultas(id: $id) {
      id
      name
    }
  }
`
