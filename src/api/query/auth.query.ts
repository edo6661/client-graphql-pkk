import { gql } from "@apollo/client";

export const getCurrentUser = gql`
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
    