import { gql } from "@apollo/client";

export const signUp = gql`
  mutation signUp ($signUpInput: SignUpInput!) {
    signUp(signUpInput: $signUpInput) {
      id
      username
      password
      email
      role
      profilePhoto
    }
  }
`
export const deleteUser = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
    }
  }
`
export const updateUser = gql`
  mutation updateUser($id: ID!, $data: UpdateUserInput!) {
    updateUser(id: $id, data: $data) {
      id
    }
  }
`