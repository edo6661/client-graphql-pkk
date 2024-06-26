import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { baseStyles } from '../styles'
import ModalComp from '../components/ModalComp'
import StatusBarComp from '../components/StatusBarComp'
import TouchableHighlightComp from '../components/TouchableHighlightComp'
import TouchableOpacityComp from '../components/TouchableOpacityComp'
import TouchableWithoutFeedbackComp from '../components/TouchableWithoutFeedbackComp'

const TouchableScreen = () => {
  return (
    <>
      <Text style={baseStyles.separator}>Modal</Text>
      <ModalComp />
      <Text style={baseStyles.separator}>Status Bar</Text>
      <StatusBarComp />
      <Text style={baseStyles.separator}>Touchable Hightlight</Text>
      <TouchableHighlightComp />
      <Text style={baseStyles.separator}>Touchable Opacity</Text>
      <TouchableOpacityComp />
      <Text style={baseStyles.separator}>Touchable Without Feedback</Text>
      <TouchableWithoutFeedbackComp />
      {/* ada library touchable scale */}
    </>
  )
}

export default TouchableScreen

const styles = StyleSheet.create({})