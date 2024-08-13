import { ActivityIndicator, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { Angkatan, Fakultas, Kelas, Konsentrasi, MutationCreateDosenArgs, MutationCreateMahasiswaArgs, ProgramStudi, Role, RoleMahasiswa } from '../__generated__/graphql'
import { Picker } from '@react-native-picker/picker'
import { adminItemFields } from '../types/admin.type'
import { useAuthContext } from '../contexts/AuthContext'
import { gql, useMutation, useQuery } from '@apollo/client'
import { createDosen } from '../api/mutation/dosen.mutation'
import { createMahasiswa } from '../api/mutation/mahasiswa.mutation'
import { signUp } from '../api/mutation/user.mutation'
import { getProgramStudis } from '../api/query/programStudi.query'
import { getKonsentrasis } from '../api/query/konsentrasi.query'
import { getFakultas } from '../api/query/fakultas.query'
import { getKelass } from '../api/query/kelas.query'
import { getAngkatans } from '../api/query/angkatan.query'
import { createAngkatan } from '../api/mutation/angkatan.mutation'
import Toast from 'react-native-toast-message'
import { signIn } from '../api/mutation/auth.mutation'
import { RegisterScreenProps } from '../types/navigator.type'
import { baseStyles } from '../styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Separator from '../components/Separator'
import { COLORS } from '../constants/colors'
import { wordFirstUpper } from '../utils/wordFirstUpper'

const RegisterScreen = (
  { navigation }: RegisterScreenProps
) => {
  const { storeUser } = useAuthContext()
  const [createUser, {
    error: errUser,
    loading: loadingUser
  }] = useMutation(signUp)
  const [loginMutation, { loading: loadingLog, error: errLog }] = useMutation(signIn)


  const [createDosenMutation, {
    error: errDosen,
    loading: loadingDosen
  }] = useMutation<any, MutationCreateDosenArgs>(createDosen, {
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
  const [createMahasiswaMutation, { error: errMhs, loading: loadingMhs }] = useMutation(createMahasiswa, {
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
  const { data: programStudi } = useQuery<{
    programStudis: Array<ProgramStudi>
  }>(getProgramStudis)
  const { data: konsentrasi } = useQuery<{
    konsentrasis: Array<Konsentrasi>
  }>(getKonsentrasis)
  // const { data: fakultas } = useQuery<{
  //   fakultas: Array<Fakultas>
  // }>(getFakultas)
  const { data: kelas } = useQuery<{
    kelass: Array<Kelas>
  }>(getKelass);
  const { data: angkatan } = useQuery<{
    angkatans: Array<Angkatan>
  }>(getAngkatans)
  const registerAsArr = ['Mahasiswa', 'Dosen']

  const [registerAs, setRegisterAs] = useState<
    keyof typeof adminItemFields
  >('Mahasiswa')


  const registerAsObj = {
    Mahasiswa: adminItemFields['Mahasiswa'],
    Dosen: adminItemFields['Dosen']
  } as const
  const [form, setForm] = useState<
    { [key: string]: string }
  >
    ({})
  const onChange = (key: string
    , value: string) => {
    setForm({
      ...form,
      [key]: value
    })
  }
  const resetForm = () => {
    setForm({})
  }

  const onSubmit = async () => {
    try {
      switch (registerAs) {
        case 'Mahasiswa':
          const createdUser = await createUser?.
            ({
              variables: {
                signUpInput: {
                  username: form.fullname,
                  role: Role.Mahasiswa,
                  password: form.password,
                }
              }
            })
          if (!createdUser?.data.signUp.id) throw new Error("UserId not found")
          const mhsUserId = createdUser?.data.signUp.id
          const sendedData = {
            ...form,
            semester: +form.semester,
            userId: mhsUserId,
            ...(form.proyekId ? { proyekId: form.proyekId } : {
              proyekId: null
            }),
            ...(form.kelompokId ? { kelompokId: form.kelompokId } : {
              kelompokId: null
            }),
            ...(form.kelasId ? { kelasId: form.kelasId } : {
              kelasId: null
            }),
            ...(form.konsentrasiId ? { konsentrasiId: form.konsentrasiId } : {
              konsentrasiId: null
            }),
            ...(form.angkatanId ? { angkatanId: form.angkatanId } : {
              angkatanId: null
            }),
            ...(form.prodiId ? { prodiId: form.prodiId } : {
              prodiId: null
            }),
            ...(form.role ? { role: form.role } : { role: RoleMahasiswa.Anggota }),

          }

          const result = await createMahasiswaMutation({
            variables: {
              ...sendedData,
            }
          })
          const res = await loginMutation({
            variables: {
              signInInput: {
                username: form.fullname,
                password: form.password
              }
            }
          })

          storeUser(res.data.signIn)
          resetForm()

          Toast.show({
            type: 'success',
            text1: `Mahasiswa ${form.fullname} berhasil Daftar`,
          })
          break;

        case 'Dosen':
          const dosenCreatedUser = await createUser?.({
            variables: {
              signUpInput: {
                username: form.fullname,
                role: Role.Dosen,
                password: form.password,
              }
            }
          });


          if (!dosenCreatedUser?.data.signUp.id) {
            throw new Error("UserId not found");
          }

          const dosenUserId = dosenCreatedUser?.data.signUp.id;


          const createdDosen = await createDosenMutation({
            variables: {
              fullname: form.fullname,
              nidn: form.nidn,
              userId: dosenUserId,
              ...(form.proyekId && { proyekId: form.proyekId })
            }
          });
          const resDosen = await loginMutation({
            variables: {
              signInInput: {
                username: form.fullname,
                password: form.password
              }
            }
          })

          storeUser(resDosen.data.signIn)
          resetForm()
          Toast.show({
            type: 'success',
            text1: `Dosen ${form.fullname} berhasil Daftar`,
          })

      }
    } catch (err) {
      console.error(err)
    }
  }

  const loading = loadingUser || loadingDosen || loadingMhs
  const error = errUser || errDosen || errMhs

  return (
    <View
      style={baseStyles.centerContainer}
    >
      <View
        style={
          [
            {
              flex: 1,
              borderRadius: 0,

            }
          ]
        }>
        {
          loading && (
            <ActivityIndicator
              size='large'
              color={COLORS.primaryBlue}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
              }}
            />
          )
        }

        <KeyboardAwareScrollView style={[
          baseStyles.innerCenterContainer,
        ]
        }
          contentContainerStyle={{
            paddingVertical: 20,
          }}

        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {
              loading && (
                <ActivityIndicator
                  size='large'
                  color={COLORS.primaryBlue}
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                  }}
                />
              )
            }

            <Image
              source={require('../assets/images/logo.png')}
              style={{
                width: 200,
                height: 200
              }}
              resizeMode='contain'
            />
          </View>

          <View style={{
            marginVertical: 10,
          }}>

            <Text
              style={[
                baseStyles.quaternaryTitle,
                {
                  textAlign: 'left',

                }
              ]}
            >
              Register As
            </Text>
            <View
              style={
                [
                  baseStyles.primaryInput,
                  {
                    paddingLeft: 0,
                  }
                ]

              }
            >
              <Picker
                selectedValue={registerAs}
                onValueChange={(itemValue) =>
                  setRegisterAs(itemValue)
                }

              >
                {registerAsArr.map((item, index) => {
                  return <Picker.Item label={item} value={item} key={index} />
                })}
              </Picker>


            </View>
          </View>
          <Separator
            color={COLORS.greyLight}
            width='100%'
            height={10}
            orientation='horizontal'
          />
          <View
            style={{
              gap: 12,
              marginTop: 8,
            }}
          >
            {registerAsObj[registerAs as 'Mahasiswa' | 'Dosen'].map((key) => <Fragment key={key}>
              {(!key.includes('Id') && !key.includes('role')) && (
                <TextInput
                  key={key}
                  placeholder={wordFirstUpper(key)}
                  onChangeText={(e) => {
                    onChange(key, e)
                  }}
                  style={
                    baseStyles.primaryInput
                  }
                  placeholderTextColor={COLORS.black}
                />
              )}
              {(key === 'prodiId' || key === 'angkatanId' || key === 'konsentrasiId' || key === 'kelasId') && (
                <View
                  style={
                    [
                      baseStyles.primaryInput,
                      {
                        paddingLeft: 0,
                      }
                    ]
                  }>
                  <Picker
                    selectedValue={form[key]}
                    onValueChange={(itemValue) =>
                      onChange(key, itemValue)
                    }
                  >
                    <Picker.Item label={`Pilih ${key.slice(0, -2)}`} value='' />
                    {key === 'konsentrasiId' && konsentrasi?.konsentrasis.map((item, index) => {
                      return <Picker.Item label={item.name} value={item.id} key={index} />
                    })}
                    {key === 'prodiId' && programStudi?.programStudis.map((item, index) => {
                      return <Picker.Item label={item.name} value={item.id} key={index} />
                    })}
                    {key === 'angkatanId' && angkatan?.angkatans.map((item, index) => {
                      return <Picker.Item label={item.tahun.toString()} value={item.id} key={index} />
                    })}
                    {key === 'kelasId' && kelas?.kelass.map((item, index) => {
                      return <Picker.Item label={item.name} value={item.id} key={index} />
                    })}
                  </Picker>
                </View>
              )}
              {key === 'role' && (
                <View
                  style={[
                    baseStyles.primaryInput,
                    {
                      paddingLeft: 0,
                    }
                  ]}
                >
                  <Picker selectedValue={
                    form[key]
                  } onValueChange={(itemValue) => onChange(key, itemValue)}

                  >
                    <Picker.Item label="Pilih Role di kelompok" value="" />
                    <Picker.Item label={RoleMahasiswa.Anggota} value={RoleMahasiswa.Anggota} />
                    <Picker.Item label={RoleMahasiswa.Ketua} value={RoleMahasiswa.Ketua} />
                  </Picker>
                </View>
              )}

            </Fragment>
            )}

            <TextInput
              placeholder='Password'
              onChangeText={(e) => {
                onChange('password', e)
              }}
              secureTextEntry={true}
              style={baseStyles.primaryInput}
            />
            <TouchableOpacity
              onPress={() =>
                // @ts-expect-error
                navigation.navigate('Login')
              }
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 4,
              }}

            >
              <Text
                style={{
                  color: COLORS.primaryBlue,
                  fontWeight: '400',
                  marginVertical: 4,
                }}

              >
                Have an account? Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmit}
              style={[
                baseStyles.primaryButton,
                loading ? {
                  backgroundColor: COLORS.grey,
                } : {
                  backgroundColor: COLORS.primaryBlue,
                }
              ]}
              disabled={
                loading
              }
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: 16,
                }}
              >Submit </Text>
            </TouchableOpacity>


            {error && <Text
              style={
                baseStyles.errorText
              }
            >Error: {error.message}</Text>}

          </View>

        </KeyboardAwareScrollView>

      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})