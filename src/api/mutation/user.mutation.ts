import { gql } from "@apollo/client";

export const signUp = gql`
  mutation signUp ($signUpInput: SignUpInput!) {
    signUp(signUpInput: $signUpInput) {
      id
      username
      password
      profilePhoto
      role
      email
      mahasiswa {
        ...MahasiswaFields
      }
      dosen {
        ...DosenFields
      }
      admin {
        id
        fullname
      }
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