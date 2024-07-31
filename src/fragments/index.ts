import { gql } from "@apollo/client";

export const bauFragments = gql`
  fragment BauFields on Bau {
    id
    name
  }
`

// Fragment untuk Admin
export const adminFragments = gql`
  fragment AdminFields on Admin {
    id
    user {
      id
      username
      email
      profilePhoto
      role
      createdAt
      updatedAt
    }
    userId
    fullname
    createdAt
    updatedAt
  }
`;

// Fragment untuk User
export const userFragments = gql`
  fragment UserFields on User {
    id
    username
    email
    profilePhoto
    role 
    mahasiswa {
        ...MahasiswaFields
      }
    dosen {
      ...DosenFields
    }
    admin {
      ...AdminFields
    }    
    
    createdAt
    updatedAt
  }
`;

// Fragment untuk Dosen
export const dosenFragments = gql`
  fragment DosenFields on Dosen {
    id
    fullname
    proyekId
    nidn
    userId
    createdAt
    updatedAt
  }
`;

// Fragment untuk Mahasiswa
export const mahasiswaFragments = gql`
  fragment MahasiswaFields on Mahasiswa {
    id
    nim
    fullname
    semester
    role
    nilai
    userId
    kelasId
    angkatanId
    proyekId
    kelompokId
    konsentrasiId
    prodiId 
    kelas {
      id
      name
    }
    angkatan {
      id
      tahun
    }
    kelompok {
      id
      name
      nilai
      feedback
      proyekId
      mahasiswa {
        id
        fullname
        nim
      }
    }

    prodi {
      id
      name
      createdAt
      updatedAt
    }
    konsentrasi {
      id
      name
      createdAt
      updatedAt
    }
    proyek {
      id
      name
      description
      createdAt
      updatedAt
    }
    laporans {
      id
      photo
      file
      createdAt
      updatedAt
    }
    biayaOperasionals {

      id
      biayaTransportasi
      biayaProyek
      biayaDll
      tanggalBiaya
      createdAt
      updatedAt
    }
    persyaratan {
      id
      keteranganSehat
      keteranganPembayaran
      keteranganOrangTua
      keteranganKelakuanBaik
      createdAt
      updatedAt
    }
    pendaftaran {
      id
      tanggalPendaftaran
      buktiPembayaran
      createdAt
      updatedAt
    }
    
    createdAt
    updatedAt
  }
`;

// Fragment untuk ProgramStudi
export const programStudiFragments = gql`
  fragment ProgramStudiFields on ProgramStudi {
    id
    name
    fakultas {
      id
      name
      createdAt
      updatedAt
    }
    konsentrasi {
      id
      name
      createdAt
      updatedAt
    }
    mahasiswa {
      id
      fullname
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
`;

// Fragment untuk Konsentrasi
export const konsentrasiFragments = gql`
  fragment KonsentrasiFields on Konsentrasi {
    id
    name
    programStudi {
      id
      name
      createdAt
      updatedAt
    }
    mahasiswa {
      id
      fullname
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
`;

// Fragment untuk Proyek
export const proyekFragments = gql`
  fragment ProyekFields on Proyek {
    id
    name
    photo
    batasOrang
    description
    verified
    lokasi
    tanggalMulai
    tanggalSelesai
    type
    bolehDimulai
    telahSelesai
    pembimbing {
      id
      fullname
      nidn
      createdAt
      updatedAt
    }
    mahasiswa {
      id
      fullname
      createdAt
      updatedAt
      nilai
    }
    laporans {
      id
      photo
      file
      createdAt
      updatedAt
    }
    biayaOperasionals {
      id
      biayaTransportasi
      biayaProyek
      biayaDll
      tanggalBiaya
      createdAt
      updatedAt
    }
    kelompok {
      id
      name
      nilai
      feedback
      mahasiswa {
        ...MahasiswaFields
      }
    }
    createdAt
    updatedAt
  }
`;

// Fragment untuk Laporan
export const laporanFragments = gql`
  fragment LaporanFields on Laporan {
    id
    photo
    file
    proyekId
    feedback
    mahasiswa {
      fullname
    }
    proyek {
      name
    }
  }
`;

// Fragment untuk Persyaratan
export const persyaratanFragments = gql`
  fragment PersyaratanFields on Persyaratan {
    id
    keteranganSehat
    keteranganPembayaran
    keteranganOrangTua
    keteranganKelakuanBaik
    mahasiswa {
      id
      fullname
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
`;

// Fragment untuk Pendaftaran
export const pendaftaranFragments = gql`
  fragment PendaftaranFields on Pendaftaran {
    id
    mahasiswa {
      id
      fullname
      createdAt
      updatedAt
    }
    tanggalPendaftaran
    buktiPembayaran
    createdAt
    updatedAt
  }
`;

// Fragment untuk BiayaOperasional
export const biayaOperasionalFragments = gql`
  fragment BiayaOperasionalFields on BiayaOperasional {
    id
    proyek {
      id
      name
      createdAt
      updatedAt
    }
    biayaTransportasi
    biayaProyek
    biayaDll
    tanggalBiaya
    mahasiswa {
      id
      fullname
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
`;

export const fakultasFragments = gql`
  fragment FakultasFields on Fakultas {
    id
    name
    programStudi {
      id
      name
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
`;
