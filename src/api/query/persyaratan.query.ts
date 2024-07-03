import { gql } from "@apollo/client";

export const getPersyaratans = gql`
  query {
    persyaratans {
      keteranganSehat
      keteranganPembayaran
      keteranganOrangTua
      keteranganKelakuanBaik
      mahasiswa {
        fullname
        nim
      }
    }
  }
`