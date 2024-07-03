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