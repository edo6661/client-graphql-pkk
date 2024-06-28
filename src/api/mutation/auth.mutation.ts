import { gql } from "@apollo/client";

export const signIn = gql`
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

export const signOut = gql`
  mutation SignOut {
    signOut {
      message
    }
  }
`;
