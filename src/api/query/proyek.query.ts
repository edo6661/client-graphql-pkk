import { gql } from "@apollo/client";

export const getProyeks = gql`
  query {
    proyeks {
      id
      name
      description
      photo
      telahSelesai
      bolehDimulai
    }
  }
`