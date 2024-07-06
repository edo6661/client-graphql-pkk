import { Admin, Dosen, Fakultas, Konsentrasi, Mahasiswa, MutationSignUpArgs, Pendaftaran, Persyaratan, ProgramStudi, Proyek, Role, User } from "../__generated__/graphql";
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
  | void
}
export interface AdminCreateFnBasedOnFields<T> {
  Admin: ArgsAdminCreateFnBasedOnFields<Admin>,
  Dosen: ArgsAdminCreateFnBasedOnFields<Dosen>,
  Fakultas: ArgsAdminCreateFnBasedOnFields<Fakultas>,
  Konsentrasi: ArgsAdminCreateFnBasedOnFields<Konsentrasi>,
  Mahasiswa: ArgsAdminCreateFnBasedOnFields<Mahasiswa>,
  Pendaftaran: ArgsAdminCreateFnBasedOnFields<Pendaftaran>,
  Persyaratan: ArgsAdminCreateFnBasedOnFields<Persyaratan>,
  ProgramStudi: ArgsAdminCreateFnBasedOnFields<ProgramStudi>,
  Proyek: ArgsAdminCreateFnBasedOnFields<Proyek>
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
  
  
      const createdDosen = await createDosen({
        variables: {
          fullname: data.fullname,
          nidn: data.nidn,
          userId: userId,
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
  Fakultas: (data,error) => {},
  Konsentrasi: (data,error) => {},
  Mahasiswa: (data,error) => {
    
  },
  Pendaftaran: (data,error) => {},
  Persyaratan: (data,error) => {},
  ProgramStudi: (data,error) => {},
  Proyek: (data,error) => {}
}
