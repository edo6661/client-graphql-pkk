import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { AdminNavigatorScreenProps } from '../../types/adminNavigator.type'
import { adminItemFields } from '../../types/admin.type'
import { gql, useApolloClient, useMutation } from '@apollo/client'
import { Admin, MutationUpdateAdminArgs, MutationUpdateUserArgs, Role } from '../../__generated__/graphql'
import { updateAdmin } from '../../api/mutation/admin.mutation'
import { updateUser } from '../../api/mutation/user.mutation'
import Toast from 'react-native-toast-message'


const DetailsAdminScreen = (
  { navigation, route }: AdminNavigatorScreenProps<"DetailsAdmins">
) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>
  const client = useApolloClient()
  const admin = client.readFragment<Admin>({
    id: `Admin:${route.params.id}`,
    fragment: gql`
      fragment AdminDetails on Admin {
        ...AdminFields
      }
    `,
  })

  const [updateUserAdmin] = useMutation<any, MutationUpdateUserArgs>(updateUser)

  const [update] = useMutation<
    { updateAdmin: Partial<Admin> },
    MutationUpdateAdminArgs
  >(updateAdmin, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found')
      if (!data.updateAdmin) return console.error('Data updateAdmin not found')
      cache.modify({
        fields: {
          admins(existingAdmins = [], { readField }) {
            return existingAdmins.map((adminExist: Admin) => {
              if (route.params?.id === undefined) return <Text>Id not found</Text>

              if (readField('id', adminExist) === route.params.id) {
                return {
                  ...adminExist,
                  ...data.updateAdmin
                }
              } else {
                return adminExist
              }
            })
          }
        }
      })
    }
  })

  const [form, setForm] = useState<Partial<Admin>>({
    fullname: admin?.fullname || "",
    id: admin?.id || ""
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
      },
      optimisticResponse: {
        updateAdmin: {
          ...admin,
          fullname: form.fullname
        }
      }
    })
    updateUserAdmin({
      variables: {
        id: admin?.userId!,
        data: {
          password: form.fullname,
          username: form.fullname,
        },

      },
      optimisticResponse: {
        updateUser: {
          ...admin?.user,
          password: form.fullname,
          username: form.fullname,
        }
      }
    })
    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Admin ${form.fullname}`,
    })

    navigation.navigate("Admins")

  }


  return (
    <View>
      <Text>{route.params.id}</Text>
      <Text>{JSON.stringify(admin)}</Text>
      {adminItemFields["Admin"].map((field) => (
        <Fragment key={field}>
          {field.includes("id") || field.includes("Id") ? null : (
            <TextInput
              key={field}
              placeholder={field}
              value={form[field]}
              onChangeText={(value) => onChange(field, value)}
            />
          )}
        </Fragment>
      ))}
      <Button
        title="Update"
        onPress={onUpdate}
      />

    </View>
  )
}

export default DetailsAdminScreen

const styles = StyleSheet.create({})
