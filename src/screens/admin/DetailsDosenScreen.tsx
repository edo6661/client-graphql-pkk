import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { DosenNavigatorScreenProps } from '../../types/adminNavigator.type'
import { adminItemFields } from '../../types/admin.type'
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client'
import { Dosen, MutationUpdateDosenArgs, MutationUpdateUserArgs, Proyek } from '../../__generated__/graphql'
import { updateUser } from '../../api/mutation/user.mutation'
import Toast from 'react-native-toast-message'
import { updateDosen } from '../../api/mutation/dosen.mutation'
import { Picker } from '@react-native-picker/picker'
import { getProyeks } from '../../api/query/proyek.query'
import { baseStyles } from '../../styles'


const DetailsDosenScreen = (
  { navigation, route }: DosenNavigatorScreenProps<"DetailsDosens">
) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>
  const { data: proyeks } = useQuery<{
    proyeks: Array<Proyek>
  }>(getProyeks)

  const client = useApolloClient()
  const dosen = client.readFragment<Dosen & {
    userId: string,
  }>({
    id: `Dosen:${route.params.id}`,
    fragment: gql`
      fragment DosenDetails on Dosen {
        ...DosenFields
      }
    `,
  })
  const [selectedProyek, setSelectedProyek] = useState<string | null>(
    dosen?.proyekId || null
  );




  const [updateUserDosen] = useMutation<any, MutationUpdateUserArgs>(updateUser)

  const [update] = useMutation<
    { updateDosen: Partial<Dosen> },
    MutationUpdateDosenArgs
  >(updateDosen, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found')
      if (!data.updateDosen) return console.error('Data updateDosen not found')
      cache.modify({
        fields: {
          dosens(existingDosens = [], { readField }) {
            return existingDosens.map((dosenExist: Dosen) => {
              if (route.params?.id === undefined) return console.error('Id not found')

              if (readField('id', dosenExist) === route.params.id) {
                return {
                  ...dosenExist,
                  ...data.updateDosen
                }
              } else {
                return dosenExist
              }
            })
          }
        }
      })
    }
  })


  const [form, setForm] = useState<Partial<Dosen & {
    userId: string

  }>>({
    fullname: dosen?.fullname,
    nidn: dosen?.nidn,
    userId: dosen?.userId,
    id: dosen?.id
  })

  const onChange = (field: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  const onUpdate = () => {
    update({
      variables: {
        id: route.params?.id!,
        fullname: form?.fullname!,
        nidn: form?.nidn!,
        userId: dosen?.userId!,
        proyekId: selectedProyek || null,
      },
      optimisticResponse: {
        updateDosen: {
          ...dosen,
          fullname: form.fullname
        }
      }
    })
    updateUserDosen({
      variables: {
        id: dosen?.userId!,
        data: {
          password: form.fullname,
          username: form.fullname,

        },

      },
      optimisticResponse: {
        updateUser: {
          id: dosen?.userId!,
          password: form.fullname,
          username: form.fullname,

        }
      }
    })
    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Dosen ${form.fullname}`,
    })

    navigation.navigate("Dosens")
  }


  return (
    <View
      style={[
        baseStyles.centerContainer
      ]}
    >
      <View style={[
        baseStyles.innerCenterContainer,
        {
          paddingVertical: 20,
          gap: 12
        }
      ]}>
        {adminItemFields["Dosen"].map((field) => (
          <Fragment key={field}>
            {field.includes("userId") || field.includes("proyekId") ? null : (
              <TextInput
                key={field}
                placeholder={field}
                value={form[field]!}
                onChangeText={(value) => onChange(field, value)}
                style={baseStyles.primaryInput}
              />
            )}
            {field === 'proyekId' && (

              <View
                style={[
                  baseStyles.primaryInput,
                  {
                    paddingLeft: 0
                  }
                ]}
              >
                <Picker
                  selectedValue={selectedProyek}
                  onValueChange={(itemValue) => setSelectedProyek(itemValue)}
                >
                  <Picker.Item label="Pilih Proyek" value={null} />
                  {proyeks?.proyeks.map((proyek) => (
                    <Picker.Item key={proyek.id} label={proyek.name!} value={proyek.id} />
                  ))}
                </Picker>
              </View>
            )}

          </Fragment>
        ))}
        <TouchableOpacity
          style={baseStyles.primaryButton}
          onPress={onUpdate}
        >
          <Text
            style={baseStyles.textButton}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>


    </View>
  )

}

export default DetailsDosenScreen

const styles = StyleSheet.create({})
