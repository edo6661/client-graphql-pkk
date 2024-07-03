import { gql } from "@apollo/client";

export const getPendaftarans = gql`
  query {
    pendaftarans {
      tanggalPendaftaran
      buktiPembayaran
      mahasiswa {
        fullname
        nim
      }
    }
  }
`