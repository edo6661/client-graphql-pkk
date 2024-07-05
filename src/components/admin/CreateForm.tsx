import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { baseStyles } from '../../styles'
import { gql, useMutation } from '@apollo/client'
import { createAdmin } from '../../api/mutation/admin.mutation'
import { MutationCreateAdminArgs, MutationSignUpArgs, SignUpInput } from '../../__generated__/graphql'
import { signUp } from '../../api/mutation/user.mutation'
import { useNavigation } from '@react-navigation/native'
import { AdminStackChildProps, AdminStackParamList, AdminStackScreenProps } from '../../types/adminNavigator.type'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'
import Toast from 'react-native-toast-message'
import TemporaryLoading from '../state/TemporaryLoading'
import { AdminFields, adminItemFields } from '../../types/admin.type'
import { adminCreateFnBasedOnFields } from '../../constants/create'
import { createDosen } from '../../api/mutation/dosen.mutation'
import { adminFragments } from '../../fragments'
interface CreateFormProps {
  selectedValue: AdminFields
}
const CreateForm = (
  { selectedValue }: CreateFormProps
) => {
  const navigation = useNavigation<NativeStackNavigationProp<AdminStackParamList, 'Create'>>();
  const [formData, setFormData] = useState<{ [key: string]: string }>({})

  const [createAdminMutation, { data: _admin, loading: loadingAdmin, error: errAdmin }] = useMutation<any, MutationCreateAdminArgs>(createAdmin, {
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
  const [createUser, { data: _createdUser, loading: loadingUser, error: errUser }] = useMutation<MutationSignUpArgs>(signUp)
  const [createDosenMutation, { data: _dosen, loading: loadingDosen, error: errDosen }] = useMutation<MutationCreateAdminArgs>(createDosen)

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

  const createFieldBasedOnSelectedValue = {
    Admin: createAdminMutation,
    Dosen: createDosenMutation

  } as const
  const onSubmit = async () => {
    try {
      const mutationFn = createFieldBasedOnSelectedValue[selectedValue as keyof typeof createFieldBasedOnSelectedValue]
      const res = await adminCreateFnBasedOnFields[selectedValue](
        // @ts-ignore
        formData,
        mutationFn,
        errAdmin,
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
      navigation.navigate(selectedValue as any)
    } catch (err) {
      console.error(err)
    }

  }


  return (
    <View
      style={baseStyles.container}
    >
      {adminItemFields[selectedValue].map((field) => (
        <Fragment key={field}>
          {field !== 'userId' && (
            <TextInput
              placeholder={field}
              value={formData[field]}
              onChangeText={(text) => handleInputChange(field, text)}
            />
          )}
        </Fragment>
      ))}
      {loadingUser && <TemporaryLoading />}
      <Button
        title="Submit"
        onPress={onSubmit}
      />
    </View>
  )
}

export default CreateForm

const styles = StyleSheet.create({
  container: {
  }
})