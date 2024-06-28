import { gql } from "@apollo/client";

export const getBaus = gql`
  query {
    baus {
      id
      name
      isLiked @client
    }
  }
`
export const getBau = gql`
  query($bauId: ID!) {
    bau(id: $bauId) {
      name
    }
  }
  
`