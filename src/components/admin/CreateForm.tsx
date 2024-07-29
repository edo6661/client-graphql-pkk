import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { baseStyles } from '../../styles'
import { gql, useMutation, useQuery } from '@apollo/client'
import { createAdmin } from '../../api/mutation/admin.mutation'
import DateTimePicker from 'react-native-ui-datepicker';

import { Angkatan, Fakultas, Kelas, Kelompok, Konsentrasi, Mahasiswa, MutationCreateAdminArgs, MutationCreateAngkatanArgs, MutationCreateDosenArgs, MutationCreateFakultasArgs, MutationCreateKelasArgs, MutationCreateKelompokArgs, MutationCreateKonsentrasiArgs, MutationCreateMahasiswaArgs, MutationCreatePersyaratanArgs, MutationCreateProgramStudiArgs, MutationCreateProyekArgs, MutationSignUpArgs, ProgramStudi, Proyek, RoleMahasiswa, SignUpInput, TypeProyek } from '../../__generated__/graphql'
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
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { getMahasiswas } from '../../api/query/mahasiswa.query'
import { createPersyaratan } from '../../api/mutation/persyaratan.mutation'
import { createKelompok } from '../../api/mutation/kelompok.mutation'
import dayjs from 'dayjs'
import { createProyek } from '../../api/mutation/proyek.mutation'
import { getKelass } from '../../api/query/kelas.query'
import { getAngkatans } from '../../api/query/angkatan.query'
import { getKelompoks } from '../../api/query/kelompok.query'
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
  const [selectedMahasiswa, setSelectedMahasiswa] = useState<string | null>();


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
  const { data: mahasiswa } = useQuery<{
    mahasiswas: Array<Mahasiswa>
  }>(getMahasiswas)
  const { data: kelas } = useQuery<{
    kelass: Array<Kelas>
  }>(getKelass);
  const { data: angkatan } = useQuery<{
    angkatans: Array<Angkatan>
  }>(getAngkatans)

  const { data: kelompok } = useQuery<{
    kelompoks: Array<Kelompok>
  }>(getKelompoks)


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
  // TODO: createKelompokMutation
  const [createKelompokMutation] = useMutation<any, MutationCreateKelompokArgs>(createKelompok, {
    update(cache, { data }) {
      if (!data?.createKelompok) return console.error('Data not found')
      cache.modify({
        fields: {
          kelompoks(existingKelompok = []) {
            const newKelompok = cache.writeFragment({
              data: data.createKelompok,
              fragment: gql`
                fragment NewKelompok on Kelompok {
                  id
                  name
                  proyekId
                  nilai
                  feedback
                }`
            })
            if (!newKelompok) return console.error('New Kelompok not found')
            return [...existingKelompok, newKelompok]
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
  const [createPersyaratanMutation] = useMutation<any, MutationCreatePersyaratanArgs>(createPersyaratan, {
    update(cache, { data }) {
      if (!data?.createPersyaratan) return console.error('Data not found')
      cache.modify({
        fields: {
          persyaratans(existingPersyaratan = []) {
            const newPersyaratan = cache.writeFragment({
              data: data.createPersyaratan,
              fragment: gql`
                fragment NewPersyaratan on Persyaratan {
                  id
                  keteranganKelakuanBaik
                  keteranganOrangTua
                  keteranganPembayaran
                  keteranganSehat
                  mahasiswaId
                }`
            })
            if (!newPersyaratan) return console.error('New Persyaratan not found')
            return [...existingPersyaratan, newPersyaratan]
          }
        }
      })
    }
  })
  const [createProgramStudiMutation] = useMutation<any, MutationCreateProgramStudiArgs>(createProgramStudi, {
    update(cache, { data }) {
      if (!data?.createProgramStudi) return console.error('Data not found')
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
  const [createProyekMutation] = useMutation<any, MutationCreateProyekArgs>(createProyek, {
    update(cache, { data }) {
      if (!data?.createProyek) return console.error('Data not found')
      cache.modify({
        fields: {
          proyeks(existingProyek = []) {
            const newProyek = cache.writeFragment({
              data: data.createProyek,
              fragment: gql`
                fragment NewProyek on Proyek {
                  ...ProyekFields
              }`
            })
            if (!newProyek) return console.error('New Proyek not found')
            return [...existingProyek, newProyek]
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
            const newMahasiswa = cache.writeFragment({
              data: data?.createMahasiswa,
              fragment: gql`
                fragment NewMahasiswa on Mahasiswa {
                  ...MahasiswaFields
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
      switch (acc[field]) {
        case 'bolehDimulai':
        case 'telahSelesai':
        case 'verified':
          acc[field] = 'Unchecked'
          break
        default:
          acc[field] = ''
          break
      }
      return acc
    }, {} as { [key: string]: string })
    setFormData(initialFormData)
  }, [selectedValue])

  const handleInputChange = (field: string, value: string) => {
    const formattedValue = field === 'tanggalMulai' || field === 'tanggalSelesai'
      ? dayjs(value).startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
      : value;

    setFormData(prevState => ({
      ...prevState,
      [field]: formattedValue,
    }));
  };




  const resetForm = () => {
    setFormData({})
    setSelectedProdi(null)
    setSelectedKonsentrasi(null)
    setSelectedProyek(null)
    setSelectedFakultas(null)
    setSelectedMahasiswa(null)
  }



  const createFieldBasedOnSelectedValue
    : Record<AdminFields, unknown>
    = {
      Admin: createAdminMutation,
      Dosen: createDosenMutation,
      Fakultas: createFakultasMutation,
      Konsentrasi: createKonsentrasiMutation,
      Mahasiswa: createMahasiswaMutation,

      Persyaratan: createPersyaratanMutation,
      ProgramStudi: createProgramStudiMutation,
      Proyek: createProyekMutation,
      Angkatan: createAngkatanMutation,
      Kelas: createKelasMutation,
      Kelompok: createKelompokMutation,
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
      ...(selectedMahasiswa && { mahasiswaId: selectedMahasiswa })
    }))

  }, [selectedKonsentrasi, selectedProdi, selectedProyek, selectedFakultas, selectedMahasiswa])



  return (
    <View
      style={baseStyles.container}
    >
      {adminItemFields[selectedValue].map((field) => (
        <Fragment key={field}>
          {(field !== 'userId' && field !== 'prodiId' && field !== "konsentrasiId" && field !== "proyekId" && field !== 'programStudiId' && field !== "fakultasId" && field !== 'mahasiswaId' && !field.includes('keterangan') && field !== 'verified' && field !== 'type' && !field.includes('tanggal') && field !== 'bolehDimulai' && field !== 'telahSelesai' && field !== 'angkatanId' && field !== 'kelasId' && field !== 'kelompokId' && field !== 'role') && (
            <TextInput
              placeholder={field}
              value={formData[field]}
              onChangeText={(text) => handleInputChange(field, text)}
              inputMode={
                (field === 'tahun' || field === 'batasOrang') && field ? 'numeric' : 'text'
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
          {(field === 'angkatanId' || field === 'kelasId' || field === 'kelompokId') && (
            <Picker
              selectedValue={formData[field]}
              onValueChange={(itemValue) =>
                handleInputChange(field, itemValue)
              }
            >
              <Picker.Item label={`Pilih ${field.slice(0, -2)}`} value="" />
              {field === 'angkatanId' && angkatan?.angkatans.map((angkatan) => (
                <Picker.Item key={angkatan.id} label={angkatan.tahun.toString()} value={angkatan.id} />
              ))}
              {field === 'kelasId' && kelas?.kelass.map((kelas) => (
                <Picker.Item key={kelas.id} label={kelas.name} value={kelas.id} />
              ))}
              {field === 'kelompokId' && kelompok?.kelompoks.map((kelompok) => (
                <Picker.Item key={kelompok.id} label={kelompok.name} value={kelompok.id} />
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
                <Picker.Item key={proyek.id} label={proyek.name!} value={proyek.id} />
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
          {field === 'mahasiswaId' && (
            <Picker selectedValue={selectedMahasiswa} onValueChange={(itemValue) => setSelectedMahasiswa(itemValue)}>
              <Picker.Item label='Pilih Mahasiswa' value={null} />
              {mahasiswa?.mahasiswas.map((mahasiswa) => {
                return !mahasiswa.persyaratan && (
                  <Picker.Item key={mahasiswa.id} label={mahasiswa.fullname} value={mahasiswa.id} />
                )
              })}
            </Picker>
          )}
          {field === 'type' && (
            <Picker selectedValue={formData.type} onValueChange={(itemValue) => handleInputChange(field, itemValue)}>
              <Picker.Item label="Pilih Type" value="" />
              <Picker.Item label={TypeProyek.Kkn} value={TypeProyek.Kkn} />
              <Picker.Item label={TypeProyek.Kkp} value={TypeProyek.Kkp} />
            </Picker>
          )}
          {(field.includes("keterangan") || field === 'verified' || field === 'bolehDimulai' || field === 'telahSelesai') && (
            <BouncyCheckbox
              size={25}
              fillColor="cyan"
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(checked) =>
                handleInputChange(field, checked ? "Checked" : "Unchecked")
              }
              text={field}

            />
          )}
          {field === 'role' && (
            <Picker selectedValue={formData.role} onValueChange={(itemValue) => handleInputChange(field, itemValue)}>
              <Picker.Item label="Pilih Role di kelompok" value="" />
              <Picker.Item label={RoleMahasiswa.Anggota} value={RoleMahasiswa.Anggota} />
              <Picker.Item label={RoleMahasiswa.Ketua} value={RoleMahasiswa.Ketua} />
            </Picker>
          )}
          {field.includes('tanggal') && (
            <>
              <Text>
                {field}
              </Text>
              <DateTimePicker
                minDate={new Date()}
                date={formData[field] ? dayjs(formData[field]) : dayjs()}
                onChange={(params) => {
                  handleInputChange(field, params.date as string)
                }}
                mode="single"
              />
            </>
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