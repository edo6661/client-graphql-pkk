import { gql } from "@apollo/client";

export const GET_AUTH_USER = gql`
  query GetAuthUser {
    authUser {
      id
      username
      password
      profilePhoto
      role
      email
    }
  }
`;
    