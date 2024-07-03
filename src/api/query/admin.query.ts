import { gql } from "@apollo/client";

export const getAdmins = gql`
  query {
    admins {
      id
      fullname
    }
  }
`