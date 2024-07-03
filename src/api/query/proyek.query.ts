import { gql } from "@apollo/client";

export const getProyeks = gql`
  query {
    proyeks {
      name
      description
      photo
      # pembimbing {
      #   fullname
      #   nidn
      # }
      # bolehDimulai
      # telahSelesai
      createdAt
    }
  }
`