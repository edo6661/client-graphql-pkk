import { gql } from "@apollo/client";

export const getCurrentUser = gql`
  query GetAuthUser {
    authUser {
      ...UserFields
    }
  }
`;
    