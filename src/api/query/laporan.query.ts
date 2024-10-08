import { gql } from "@apollo/client";

export const getLaporanByProyekId = gql`
  query getLaporanByProyekId($proyekId: ID!) {
    getLaporanByProyekId(proyekId: $proyekId) {
      ...LaporanFields
    }
  }
`;

export const getLaporan = gql`
  query getLaporan($id: ID!) {
    getLaporan(id: $id) {
      ...LaporanFields
    }
  }
`
