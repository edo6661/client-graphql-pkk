import { gql } from "@apollo/client";

export const getPersyaratans = gql`
  query {
    persyaratans {
      id
      keteranganSehat
      keteranganPembayaran
      keteranganOrangTua
      keteranganKelakuanBaik
      mahasiswaId
      mahasiswa {
        id
        fullname
        nim
      }
    }
  }
`