import { gql } from "@apollo/client";

interface Mahasiswa {
  id: string;
  nim: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
  proyekId: string;
}

export const getMahasiswas = gql`
  query {
    mahasiswas {
      id
      nim
      fullname
      semester
      prodi {
        name
      }
      konsentrasi {
        name
      }
      proyek{
        name
      }
      persyaratan {
        keteranganSehat
        keteranganPembayaran
        keteranganOrangTua
        keteranganKelakuanBaik
      }
      pendaftaran {
        tanggalPendaftaran
        buktiPembayaran
      }
  }
}
`; 
