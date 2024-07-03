import { gql } from "@apollo/client";

export const updateBau = gql`
  mutation updateBau($updateBauId: ID!, $name: String!) {
    updateBau(id: $updateBauId, name: $name) {
      id
      name
    }
  }
`
export const createBau = gql`
  mutation createBau($name: String!) {
    createBau(name: $name) {
      id
      name
  }
  }
`
export const deleteBau = gql`
  mutation deleteBau($id: ID!) {
    deleteBau(id: $id) {
      id
      name
    }
  }
`