import { gql } from "@apollo/client";


export const getBaus = gql`
  query {
    baus {
      ...BauFields
    }
  }
`
export const getBau = gql`
  query($bauId: ID!) {
    bau(id: $bauId) {
      ...BauFields
    }
  }
  
`
