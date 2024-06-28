import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
      id
      username
      email
      role
      profilePhoto
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut {
      message
    }
  }
`;
