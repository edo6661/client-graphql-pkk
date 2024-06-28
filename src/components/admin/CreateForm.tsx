import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AdminFields, adminItemFields } from '../../constants/create'
import { baseStyles } from '../../styles'
interface CreateFormProps {
  selectedValue: AdminFields
}
const CreateForm = (
  { selectedValue }: CreateFormProps
) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({})

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

  const onSubmit = () => {
    Alert.alert('Data', JSON.stringify(formData))
  }


  return (
    <View
      style={baseStyles.container}
    >
      {adminItemFields[selectedValue].map((field) => (
        <TextInput
          key={field}
          placeholder={field}
          value={formData[field]}
          onChangeText={(text) => handleInputChange(field, text)}
        />
      ))}
      <Button
        title="Submit"
        onPress={onSubmit}
      />
    </View>
  )
}

export default CreateForm

const styles = StyleSheet.create({})