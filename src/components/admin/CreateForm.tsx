import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { baseStyles } from '../../styles'
import { gql, useMutation, useQuery } from '@apollo/client'
import { createAdmin } from '../../api/mutation/admin.mutation'
import { Fakultas, Konsentrasi, MutationCreateAdminArgs, MutationCreateAngkatanArgs, MutationCreateDosenArgs, MutationCreateFakultasArgs, MutationCreateKelasArgs, MutationCreateKonsentrasiArgs, MutationCreateMahasiswaArgs, MutationCreateProgramStudiArgs, MutationSignUpArgs, ProgramStudi, Proyek, SignUpInput } from '../../__generated__/graphql'
import { signUp } from '../../api/mutation/user.mutation'
import { useNavigation } from '@react-navigation/native'
import { AdminStackParamList, AdminStackScreenProps } from '../../types/adminNavigator.type'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import Toast from 'react-native-toast-message'
import TemporaryLoading from '../state/TemporaryLoading'
import { AdminFields, adminItemFields } from '../../types/admin.type'
import { adminCreateFnBasedOnFields } from '../../constants/create'
import { createDosen } from '../../api/mutation/dosen.mutation'
import { adminFragments, dosenFragments } from '../../fragments'
import { MutationFn } from '../../types/mutation.type'
import { createMahasiswa } from '../../api/mutation/mahasiswa.mutation'
import { getFakultas } from '../../api/query/fakultas.query'
import { getProyeks } from '../../api/query/proyek.query'
import { getKonsentrasis } from '../../api/query/konsentrasi.query'
import { Picker } from '@react-native-picker/picker'
import { getProgramStudis } from '../../api/query/programStudi.query'
import { createFakultas } from '../../api/mutation/fakultas.mutation'
import { createKonsentrasi } from '../../api/mutation/konsentrasi.mutation'
import { createProgramStudi } from '../../api/mutation/programStudi.mutation'
import { createAngkatan } from '../../api/mutation/angkatan.mutation'
import { createKelas } from '../../api/mutation/kelas.mutation'
interface CreateFormProps {
  selectedValue: AdminFields
}
const CreateForm = (
  { selectedValue }: CreateFormProps
) => {
  const navigation = useNavigation<NativeStackNavigationProp<AdminStackParamList, 'Create'>>();
  const [formData, setFormData] = useState<{ [key: string]: string }>({})
  const [selectedKonsentrasi, setSelectedKonsentrasi] = useState<string | null>();
  const [selectedProdi, setSelectedProdi] = useState<string | null>();
  const [selectedProyek, setSelectedProyek] = useState<string | null>();
  const [selectedFakultas, setSelectedFakultas] = useState<string | null>();

  const { data: programStudi } = useQuery<{
    programStudis: Array<ProgramStudi>
  }>(getProgramStudis)
  const { data: proyeks } = useQuery<{
    proyeks: Array<Proyek>
  }>(getProyeks)
  const { data: konsentrasi } = useQuery<{
    konsentrasis: Array<Konsentrasi>
  }>(getKonsentrasis)
  const { data: fakultas } = useQuery<{
    fakultas: Array<Fakultas>
  }>(getFakultas)

  const [createAdminMutation] = useMutation<any, MutationCreateAdminArgs>(createAdmin, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          admins(existingAdmins = []) {
            const newAdmin = cache.writeFragment({
              data: data.createAdmin,
              fragment: gql`${adminFragments}`,
            })
            if (!newAdmin) return console.error('New Admin not found')
            return [...existingAdmins, newAdmin]
          }
        }
      })
    }
  })
  const [createFakultasMutation] = useMutation<any, MutationCreateFakultasArgs>(createFakultas, {
    update(cache, { data }) {
      if (!data?.createFakultas) return console.error('Data not found')
      cache.modify({
        fields: {
          fakultas(existingFakultas = []) {
            const newFakultas = cache.writeFragment({
              data: data.createFakultas,
              fragment: gql`
                fragment NewFakultas on Fakultas {
                  name
                  id
                }`
            })
            if (!newFakultas) return console.error('New Fakultas not found')
            return [...existingFakultas, newFakultas]
          }
        }
      })
    }
  })
  const [createAngkatanMutation] = useMutation<any, MutationCreateAngkatanArgs>(createAngkatan, {
    update(cache, { data }) {
      if (!data?.createAngkatan) return console.error('Data not found')
      cache.modify({
        fields: {
          angkatans(existingAngkatan = []) {
            const newAngkatan = cache.writeFragment({
              data: data.createAngkatan,
              fragment: gql`
                fragment NewAngkatan on Angkatan {
                  id
                  tahun
                }`
            })
            if (!newAngkatan) return console.error('New Angkatan not found')
            return [...existingAngkatan, newAngkatan]
          }
        }
      })
    }
  })
  const [createProgramStudiMutation] = useMutation<any, MutationCreateProgramStudiArgs>(createProgramStudi, {
    update(cache, { data }) {
      if (!data?.createProgramStudi) return console.error('Data not found')
      console.log(data)
      cache.modify({
        fields: {
          programStudis(existingProgramStudi = []) {
            const newProgramStudi = cache.writeFragment({
              data: data.createProgramStudi,
              fragment: gql`
                fragment NewProgramStudi on ProgramStudi {
                  id
                  name
                  fakultasId
                }`
            })
            if (!newProgramStudi) return console.error('New ProgramStudi not found')
            return [...existingProgramStudi, newProgramStudi]
          }
        }
      })
    }
  })
  const [createKonsentrasiMutation] = useMutation<any, MutationCreateKonsentrasiArgs>(createKonsentrasi, {
    update(cache, { data }) {
      if (!data?.createKonsentrasi) return console.error('Data not found')
      cache.modify({
        fields: {
          konsentrasis(existingKonsentrasi = []) {
            const newKonsentrasi = cache.writeFragment({
              data: data.createKonsentrasi,
              fragment: gql`
                fragment NewKonsentrasi on Konsentrasi {
                  name
                  id
                }`
            })
            if (!newKonsentrasi) return console.error('New Konsentrasi not found')
            return [...existingKonsentrasi, newKonsentrasi]
          }
        }
      })
    }
  })
  const [createKelasMutation] = useMutation<any, MutationCreateKelasArgs>(createKelas, {
    update(cache, { data }) {
      if (!data?.createKelas) return console.error('Data not found')
      cache.modify({
        fields: {
          kelass(existingKelas = []) {
            const newKelas = cache.writeFragment({
              data: data.createKelas,
              fragment: gql`
                fragment NewKelas on Kelas {
                  name
                  id
              }`
            })
            if (!newKelas) return console.error('New Kelas not found')
            return [...existingKelas, newKelas]
          }
        }
      })
    }
  })


  const [createDosenMutation] = useMutation<any, MutationCreateDosenArgs>(createDosen, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          dosens(existingDosen = []) {
            if (!data?.createDosen) return console.error('Data not found')
            if (existingDosen.length < 0) return console.error('Existing Dosen not found')
            const newDosen = cache.writeFragment({
              data: data?.createDosen,
              fragment: gql`
                fragment NewDosen on Dosen {
                  id
                  fullname
                  nidn
                  userId
                }
              `
            })
            if (!newDosen) return console.error('New Dosen not found')
            return [...existingDosen, newDosen]
          }
        }
      })
    }
  })
  const [createMahasiswaMutation, { error }] = useMutation<any, MutationCreateMahasiswaArgs>(createMahasiswa, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          mahasiswas(existingMahasiswa = []) {
            if (!data?.createMahasiswa) return console.error('Data not found')
            if (existingMahasiswa.length < 0) return console.error('Existing Mahasiswa not found')
            const newMahasiswa = cache.writeFragment({
              data: data?.createMahasiswa,
              fragment: gql`
                fragment NewMahasiswa on Mahasiswa {
                  id
                  fullname
                  nim
                  userId
                }
              `
            })
            if (!newMahasiswa) return console.error('New Mahasiswa not found')
            return [...existingMahasiswa, newMahasiswa]
          }
        }
      })
    }
  })

  const [createUser, { loading }] = useMutation<MutationSignUpArgs>(signUp)

  useEffect(() => {
    const initialFormData = adminItemFields[selectedValue].reduce((acc, field) => {
      acc[field] = '';
      return acc
    }, {} as { [key: string]: string })
    setFormData(initialFormData)
  }, [selectedValue])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }




  const resetForm = () => {
    setFormData({})
    setSelectedProdi(null)
    setSelectedKonsentrasi(null)
    setSelectedProyek(null)
    setSelectedFakultas(null)
  }



  const createFieldBasedOnSelectedValue
    : Record<AdminFields, unknown>
    = {
      Admin: createAdminMutation,
      Dosen: createDosenMutation,
      Fakultas: createFakultasMutation,
      Konsentrasi: createKonsentrasiMutation,
      Mahasiswa: createMahasiswaMutation,

      Persyaratan: () => {
        console.log("test")
      },
      ProgramStudi: createProgramStudiMutation,
      Proyek: () => {
        console.log("test")
      },
      Angkatan: createAngkatanMutation,
      Kelas: createKelasMutation,
      Kelompok: () => { },
      Pendaftaran: () => { }

    } as const
  const onSubmit = async () => {
    try {
      const mutationFn = createFieldBasedOnSelectedValue[selectedValue as keyof typeof createFieldBasedOnSelectedValue]
      const res = await adminCreateFnBasedOnFields[selectedValue](
        // @ts-ignore
        formData,
        mutationFn,
        createUser
      )
      if (typeof res === 'undefined') return Toast.show({
        type: "error",
        text1: "Laporkan ke admin",
        text2: "Terjadi kesalahan",
        swipeable: true
      })
      Toast.show({
        swipeable: true,
        type: 'success',
        text1: res.message,
        text2: 'Test text 2'
      })
      resetForm()
      navigation.navigate(selectedValue as any)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      ...(selectedKonsentrasi && { konsentrasiId: selectedKonsentrasi }),
      ...(selectedProdi && { prodiId: selectedProdi }),
      ...(selectedProyek && { proyekId: selectedProyek }),
      ...(selectedFakultas && { fakultasId: selectedFakultas }),
    }))
  }, [selectedKonsentrasi, selectedProdi, selectedProyek, selectedFakultas])


  return (
    <View
      style={baseStyles.container}
    >
      {adminItemFields[selectedValue].map((field) => (
        <Fragment key={field}>
          {(field !== 'userId' && field !== 'prodiId' && field !== "konsentrasiId" && field !== "proyekId" && field !== 'programStudiId' && field !== "fakultasId") && (
            <TextInput
              placeholder={field}
              value={formData[field]}
              onChangeText={(text) => handleInputChange(field, text)}
              inputMode={
                field === 'tahun' ? 'numeric' : 'text'
              }
            />
          )}
          {(field === 'prodiId' || field === 'programStudiId') && (
            <Picker
              selectedValue={selectedProdi}
              onValueChange={(itemValue) => setSelectedProdi(itemValue)}
            >
              <Picker.Item label="Pilih Prodi" value="" />
              {programStudi?.programStudis.map((prodi) => (
                <Picker.Item key={prodi.id} label={prodi.name} value={prodi.id} />
              ))}
            </Picker>
          )}

          {field === 'konsentrasiId' && (
            <Picker
              selectedValue={selectedKonsentrasi}
              onValueChange={(itemValue) => setSelectedKonsentrasi(itemValue)}
            >
              <Picker.Item label="Pilih Konsentrasi" value="" />
              {konsentrasi?.konsentrasis.map((konsentrasi) => (
                <Picker.Item key={konsentrasi.id} label={konsentrasi.name} value={konsentrasi.id} />
              ))}
            </Picker>
          )}

          {field === 'proyekId' && (
            <Picker
              selectedValue={selectedProyek}
              onValueChange={(itemValue) => setSelectedProyek(itemValue)}
            >
              <Picker.Item label="Pilih Proyek" value={null} />
              {proyeks?.proyeks.map((proyek) => (
                <Picker.Item key={proyek.id} label={proyek.name} value={proyek.id} />
              ))}
            </Picker>
          )}
          {field === 'fakultasId' && (
            <Picker
              selectedValue={selectedFakultas}
              onValueChange={(itemValue) => setSelectedFakultas(itemValue)}
            >
              <Picker.Item label="Pilih Fakultas" value={null} />
              {fakultas?.fakultas.map((proyek) => (
                <Picker.Item key={proyek.id} label={proyek.name} value={proyek.id} />
              ))}
            </Picker>
          )}

        </Fragment>
      ))}
      <Button
        title="Submit"
        onPress={onSubmit}
      />
      {loading && <TemporaryLoading />}
    </View>
  )
}

export default CreateForm

const styles = StyleSheet.create({
  container: {
  }
})