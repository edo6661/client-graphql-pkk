import { Admin, Angkatan, Dosen, Fakultas, Kelas, Kelompok, Konsentrasi, Mahasiswa, MutationCreateFakultasArgs, MutationSignUpArgs, Pendaftaran, Persyaratan, ProgramStudi, Proyek, Role, User } from "../__generated__/graphql";
import { MutationFn } from "../types/mutation.type";
import { AdminFields } from "../types/admin.type";
import { ApolloError } from "@apollo/client";



interface ArgsAdminCreateFnBasedOnFields<T> {
  (
    data: T,
    createMutation: MutationFn<T>,
    createUser?: MutationFn<{
      data: {
        signUp: User
      }
    }>,
  ): Promise<{message: string}> 
  | {message: string} | void
}
export interface AdminCreateFnBasedOnFields<T> {
  Admin: ArgsAdminCreateFnBasedOnFields<Admin>,
  Dosen: ArgsAdminCreateFnBasedOnFields<Dosen>,
  Fakultas: ArgsAdminCreateFnBasedOnFields<MutationCreateFakultasArgs>,
  Konsentrasi: ArgsAdminCreateFnBasedOnFields< Konsentrasi & {
    prodiId: string
  }>,
  Mahasiswa: ArgsAdminCreateFnBasedOnFields<Mahasiswa & {
    prodiId: string,
    konsentrasiId: string,
    proyekId?: string
  
  }>,
  Pendaftaran: ArgsAdminCreateFnBasedOnFields<Pendaftaran>,
  Persyaratan: ArgsAdminCreateFnBasedOnFields<Persyaratan>,
  ProgramStudi: ArgsAdminCreateFnBasedOnFields<ProgramStudi & {
    fakultasId: string
  }>,
  Proyek: ArgsAdminCreateFnBasedOnFields<Proyek>,
  Kelas: ArgsAdminCreateFnBasedOnFields<Kelas>,
  Kelompok: ArgsAdminCreateFnBasedOnFields<Kelompok>,
  Angkatan: ArgsAdminCreateFnBasedOnFields<Angkatan>,
}



export const adminCreateFnBasedOnFields: AdminCreateFnBasedOnFields<AdminFields> = {
  Admin: async (data,createAdmin,createUser) => {
    try {
      const createdUser = await createUser?.({
        variables: {
          signUpInput: {
            username: data.fullname,
            role: Role.Admin,
            password: data.fullname,        
          },
          
          }
        })
        if(!createdUser?.data.signUp.id) throw new Error("UserId not found")
          await createAdmin({
          variables: {
            fullname: data.fullname,
            userId: createdUser?.data.signUp.id,
          },
          
        })
        return {
          message: `Admin ${data.fullname} berhasil dibuat`
        }
    } catch (err) {
      console.log(err)
      return {
        message: `Admin ${data.fullname} gagal dibuat hubungi adminx`
      }
    }
  },
  Dosen: async (data,createDosen,createUser) => {
    try {
      const createdUser = await createUser?.({
        variables: {
          signUpInput: {
            username: data.fullname,
            role: Role.Dosen,
            password: data.fullname,        
          }
        }
      });
  
  
      if (!createdUser?.data.signUp.id) {
        throw new Error("UserId not found");
      }
  
      const userId = createdUser?.data.signUp.id;
  
      console.log("DATA DOSEN", {
        data:{
          ...data,
          userId
        }
      });
  
      const createdDosen = await createDosen({
        variables: {
          fullname: data.fullname,
          nidn: data.nidn,
          userId: userId,
          ...(data.proyekId && {proyekId: data.proyekId})
        }
      });
  
  
      return {
        message: `Dosen ${data.fullname} berhasil dibuat`,
      };
    } catch (err) {
      console.error("Error occurred:", err);
      return {
        message: `Dosen ${data.fullname} gagal dibuat hubungi admin`,
      };
    }
  

  },
  Mahasiswa: async (data,createMahasiswa,createUser) => {
    try {
      const createdUser = await createUser?.
      ({
        variables: {
          signUpInput: {
            username: data.fullname,
            role: Role.Mahasiswa,
            password: data.fullname,
          }
        }
      })
      if(!createdUser?.data.signUp.id) throw new Error("UserId not found")
        const userId = createdUser?.data.signUp.id
      const result =await createMahasiswa({
          variables: {
            fullname: data.fullname,
            nim: data.nim,
            userId: userId,
            semester: +data.semester,
            prodiId: data.prodiId,
            konsentrasiId: data.konsentrasiId,
            ...(data.proyekId && {proyekId: data.proyekId})
          }
        })
        
        return {
          message: `Mahasiswa ${data.fullname} berhasil dibuat`
        }
    } catch (err) {
      console.log(err)
      return {
        message: `Mahasiswa ${data.fullname} gagal dibuat hubungi admin`}
    }
  },
  Fakultas: (data,createFakultas) => {
    createFakultas({
      variables: {
        name: data.name,
      },
    })
    return {
      message: "Fakultas berhasil dibuat"
    }
  },
  Konsentrasi: (data,createKonsentrasi) => {
    createKonsentrasi({
      variables: {
        name: data.name,
        programStudiId: data.prodiId
      },
      
    })
    return {
      message: "Konsentrasi berhasil dibuat"
    }
  },
  Pendaftaran: (data,error) => {},
  Persyaratan: (data,createPersyaratan) => {
    const checkedToBoolean = <T>(value:T ) => value === "Checked" ? true : false
    const convertedData = {
      ...data,
      keteranganKelakuanBaik: checkedToBoolean(data.keteranganKelakuanBaik),
      keteranganOrangTua: checkedToBoolean(data.keteranganOrangTua),
      keteranganPembayaran: checkedToBoolean(data.keteranganPembayaran),
      keteranganSehat: checkedToBoolean(data.keteranganSehat),
    }
    console.log("CONVERTED DATA",convertedData)
    createPersyaratan({
      variables: {
        ...convertedData
      }
    })
    return {
      message: "Persyaratan berhasil dibuat"
    }
  },
  ProgramStudi: (data,createKonsentrasi) => {
    createKonsentrasi({
      variables: {
        name: data.name,
        fakultasId: data.fakultasId
      },
      
    })
    return {
      message: "Program Studi berhasil dibuat"
    }
  },
  Proyek: (data,error) => {},
  Kelas: (data,createKelas) => {
    createKelas({
      variables:{
        name: data.name
      },
      optimisticResponse:{
        createKelas: {
            __typename: "Kelas",
            id: "temp-id",
            name: data.name,
            createdAt: new Date().toString(),
            updatedAt: new Date().toString(),
        }
      }
    })
    return {
      message: "Kelas berhasil dibuat"
    }
  },
  Kelompok: (data,error) => {},
  Angkatan: (data,createAngkatan) => {
    createAngkatan({
      variables:{
        tahun: +data.tahun
      },
      optimisticResponse:{
        createAngkatan: {
            __typename: "Angkatan",
            id: "temp-id",
            tahun: data.tahun,
            createdAt: new Date().toString(),
            updatedAt: new Date().toString(),
        }
      }
    })
    return {
      message: "Program Studi berhasil dibuat"
    }
  },

}
