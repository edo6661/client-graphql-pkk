import { gql } from "@apollo/client";

export const getProyeks = gql`
  query {
    proyeks {
      ...ProyekFields
    }   
  }   
`
export const getProyek = gql`
  query getProyek($id: ID!) {
    getProyek(id: $id) {
      ...ProyekFields
    }
  }
`