import { gql } from "@apollo/client";

export const signIn = gql`
  mutation SignIn($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
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
`;

export const signOut = gql`
  mutation SignOut {
    signOut {
      message
    }
  }
`;
