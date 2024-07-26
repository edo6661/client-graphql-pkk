import { gql } from "@apollo/client";

export const getProyeks = gql`
  query {
    proyeks {
      ...ProyekFields     
    }   
  }   
`