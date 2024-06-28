export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  profilePhoto: string;
}

type Role = 'ADMIN' | 'MAHASISWA' | 'DOSEN';
