import { gql } from "@apollo/client";

export const getDosen = gql`
  query {
    dosens {
      ...DosenFields
    }
  }
`
