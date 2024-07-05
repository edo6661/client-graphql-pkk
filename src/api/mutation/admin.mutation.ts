import { gql } from "@apollo/client";

export const createAdmin = gql`
  mutation CreateAdmin($userId: ID!, $fullname: String!) {
    createAdmin(userId: $userId, fullname: $fullname) {
      ...AdminFields
    }
  }
`;
export const updateAdmin = gql`
  mutation UpdateAdmin($id: ID!, $fullname: String!) {
    updateAdmin(id: $id, fullname: $fullname) {
      fullname
      id
    }
  }
`;

export const deleteAdmin = gql`
  mutation DeleteAdmin($id: ID!) {
    deleteAdmin(id: $id) {
      id
      fullname
    }
  }
`;
