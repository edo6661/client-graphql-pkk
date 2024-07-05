export const adminFields = [
  "Admin",
  "Dosen",
  "Fakultas",
  "Konsentrasi",
  "Mahasiswa",
  "Pendaftaran",
  "Persyaratan",
  "ProgramStudi",
  "Proyek"
] as const;

export type AdminFields = typeof adminFields[number];

export const adminFieldsMap = {
  Admin: "Admin",
  Dosen: "Dosen",
  Fakultas: "Fakultas",
  Konsentrasi: "Konsentrasi",
  Mahasiswa: "Mahasiswa",
  Pendaftaran: "Pendaftaran",
  Persyaratan: "Persyaratan",
  ProgramStudi: "Program Studi",
  Proyek: "Proyek"
} as const;

export type AdminFieldsMap = typeof adminFieldsMap;

export const adminItemFields = {
  Admin: ["fullname", "userId"],
  Dosen: ["fullname", "userId", "nidn", "proyekId"],
  Fakultas: ["name"],
  Konsentrasi: ["name", "programStudiId"],
  Mahasiswa: ["fullname", "userId", "nim", "semester", "prodiId", "konsentrasiId", "proyekId"],
Pendaftaran: ["mahasiswaId", "tanggalPendaftaran", "buktiPembayaran"],
  Persyaratan: ["mahasiswaId", "keteranganSehat", "keteranganPembayaran", "keteranganOrangTua", "keteranganKelakuanBaik"],
  ProgramStudi: ["name", "fakultasId"],
  Proyek: ["name", "photo", "bolehDimulai", "telahSelesai", "description", "batasOrang", "pembimbing"]
} as const;
