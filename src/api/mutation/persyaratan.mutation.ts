import { gql } from "@apollo/client";

export const createPersyaratan = gql`
  mutation createPersyaratan(
    $keteranganKelakuanBaik: Boolean!,
    $keteranganOrangTua: Boolean!,
    $keteranganPembayaran: Boolean!,
    $keteranganSehat: Boolean!,
    $mahasiswaId: ID!
  ) {
    createPersyaratan(
      keteranganKelakuanBaik: $keteranganKelakuanBaik,
      keteranganOrangTua: $keteranganOrangTua,
      keteranganPembayaran: $keteranganPembayaran,
      keteranganSehat: $keteranganSehat,
      mahasiswaId: $mahasiswaId
    ) {
      id
      keteranganKelakuanBaik
      keteranganOrangTua
      keteranganPembayaran
      keteranganSehat
      mahasiswaId
    }
  }
`;

export const updatePersyaratan = gql`
  mutation updatePersyaratan(
    $id: ID!,
    $keteranganKelakuanBaik: Boolean,
    $keteranganOrangTua: Boolean,
    $keteranganPembayaran: Boolean,
    $keteranganSehat: Boolean,
    $mahasiswaId: ID
  ) {
    updatePersyaratan(
      id: $id,
      keteranganKelakuanBaik: $keteranganKelakuanBaik,
      keteranganOrangTua: $keteranganOrangTua,
      keteranganPembayaran: $keteranganPembayaran,
      keteranganSehat: $keteranganSehat,
      mahasiswaId: $mahasiswaId
    ) {
      id
      keteranganKelakuanBaik
      keteranganOrangTua
      keteranganPembayaran
      keteranganSehat
    }
  }
`;

export const deletePersyaratan = gql`
  mutation deletePersyaratan($id: ID!) {
    deletePersyaratan(id: $id) {
      id
    }
  }
`;
