import { gql } from "@apollo/client";

export const getKelompoks = gql`
  query {
    kelompoks {
      id
      name
      proyekId
      nilai
      feedback
      mahasiswa {
        id
        fullname
        nim
        kelompokId
        proyekId
        role
      }
    }
  }
`

export const getKelompok = gql`
  query getKelompok($id: ID!) {
    kelompok(id: $id) {
      id
      name
      proyekId
      nilai
      feedback
      mahasiswa {
        id
        fullname
      }
    }
  }
`;
