import { gql } from "@apollo/client";

export const bauFragments = gql`
  fragment BauFields on Bau {
    id
    name
  }
`