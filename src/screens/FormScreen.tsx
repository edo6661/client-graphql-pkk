import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

const FormScreen = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    bool: false,
    age: null,
  })

  const handleChange = (name: string, value: string | number | boolean) =>
    setFormData({ ...formData, [name]: value })
  const { title, description,
    bool, age

  } = formData

  useEffect(() => {
    if (title.length >= 10) {
      Alert.alert('Title is too long')
    }
  }, [title])
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

    >
      <TextInput
        placeholder="Enter title"
        value={title}
        onChange={(e) => handleChange('title', e.nativeEvent.text)}
        // onChangeText={(text) => handleChange('title', text)}
        autoFocus
        cursorColor="red"
        keyboardAppearance='dark'
        maxLength={10}
        placeholderTextColor={'red'}
      // keyboardType="decimal-pad"
      // onChange={(e) => Alert.alert('onChange', e.nativeEvent.text)}

      />
      <TextInput
        placeholder="Enter description"
        value={description}
        onChangeText={(text) => handleChange('description', text)}
        multiline
        numberOfLines={2}
      />
      <TextInput
        placeholder="Enter age"
        value={age ?? '0'}
        onChangeText={(text) => handleChange('age', +(text))}
        keyboardType="numeric"
      />
      <Switch
        value={bool}
        onValueChange={(value) => handleChange('bool', value)}
      />
      <Button title="Submit" onPress={() => Alert.alert(
        'Form Data',
        `Title: ${title}, Description: ${description}
        Age: ${formData.age} ${typeof formData.age}, Bool: ${formData.bool}
        `,
      )}
        disabled={!title || !description}
      />

    </KeyboardAvoidingView>
  )
}

export default FormScreen

const styles = StyleSheet.create({})