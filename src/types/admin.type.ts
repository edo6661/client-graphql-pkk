/* eslint-disable prettier/prettier */
export const adminFields = [
  'Admin',
  'Dosen',
  'Fakultas',
  'Konsentrasi',
  'Mahasiswa',
  'Pendaftaran',
  'Persyaratan',
  'ProgramStudi',
  'Proyek',
] as const;

export type AdminFields = (typeof adminFields)[number];

export const adminItemFields = {
  Admin: ['fullname', 'userId'],
  Dosen: ['fullname', 'userId', 'nidn', 'proyekId'],
  Fakultas: ['name'],
  Konsentrasi: ['name', 'programStudiId'],
  Mahasiswa: [
    'fullname',
    'userId',
    'nim',
    'semester',
    'prodiId',
    'konsentrasiId',
    'proyekId',
  ],
  Pendaftaran: ['mahasiswaId', 'tanggalPendaftaran', 'buktiPembayaran'],
  Persyaratan: [
    'mahasiswaId',
    'keteranganSehat',
    'keteranganPembayaran',
    'keteranganOrangTua',
    'keteranganKelakuanBaik',
  ],
  ProgramStudi: ['name', 'fakultasId'],
  Proyek: [
    'name',
    'photo',
    'bolehDimulai',
    'telahSelesai',
    'description',
    'batasOrang',
    'pembimbing',
  ],
} as const;

type FieldTypes = {
  string: string;
  number: number;
  boolean: boolean;
};
// Menggunakan tipe FieldTypes untuk mendapatkan tipe value berdasarkan tipe key
type FieldValue<T> = T extends keyof FieldTypes ? FieldTypes[T] : never;

// Mendefinisikan tipe untuk initial value dari admin item fields
export type AdminItemFieldsInitialValue = {
  // Loop melalui setiap key di AdminFields
  [K in AdminFields]: {
    // Loop melalui setiap field di adminItemFields sesuai dengan key yang ada di AdminFields
    [F in (typeof adminItemFields)[K][number]]: FieldValue<
      // Jika tidak, gunakan 'string' atau 'boolean' // Jika field adalah 'semester' atau 'batasOrang', gunakan 'number' // Gunakan FieldValue untuk menentukan tipe dari value berdasarkan field
      F extends 'semester' | 'batasOrang' ? 'number' : 'string' | 'boolean'
    >;
  };
};
export const adminItemFieldsInitialValue: AdminItemFieldsInitialValue = {
  Admin: {
    fullname: '',
    userId: '',
  },
  Dosen: {
    fullname: '',
    userId: '',
    nidn: '',
    proyekId: '',
  },
  Fakultas: {
    name: '',
  },
  Konsentrasi: {
    name: '',
    programStudiId: '',
  },
  Mahasiswa: {
    fullname: '',
    userId: '',
    nim: '',
    semester: 0,
    prodiId: '',
    konsentrasiId: '',
    proyekId: '',
  },
  Pendaftaran: {
    mahasiswaId: '',
    tanggalPendaftaran: '',
    buktiPembayaran: '',
  },
  Persyaratan: {
    mahasiswaId: '',
    keteranganSehat: false,
    keteranganPembayaran: false,
    keteranganOrangTua: false,
    keteranganKelakuanBaik: false,
  },
  ProgramStudi: {
    name: '',
    fakultasId: '',
  },
  Proyek: {
    name: '',
    photo: '',
    bolehDimulai: false,
    telahSelesai: false,
    description: '',
    batasOrang: 0,
    pembimbing: '',
  },
} as const;
