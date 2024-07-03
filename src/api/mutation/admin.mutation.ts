import { gql } from "@apollo/client";

export const createAdmin = gql`
  mutation CreateAdmin($userId: ID!, $fullname: String!) {
    createAdmin(userId: $userId, fullname: $fullname) {
      id
      fullname
    }
  }
`;
