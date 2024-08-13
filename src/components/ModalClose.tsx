import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseStyles } from '../styles';
import { COLORS } from '../constants/colors';


interface ModalCloseProps<T> {
  action: (item: T) => Promise<void> | void;
  trigger: string;
  item: T;
}

const ModalClose = <T extends Record<string, any>>(
  { trigger, action, item }: ModalCloseProps<T>
) => {


  const [isVisible, setIsVisible] = useState(false)
  const onDelete = async () => {
    try {
      await action(item)
      setIsVisible(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View
      style={{ paddingHorizontal: 12 }}
    >
      <TouchableOpacity
        onPress={() => {
          setIsVisible(true)
        }}
        style={[
          baseStyles.primaryButton,
          {
            width: 80,
            backgroundColor: COLORS.error
          }
        ]}
      >
        <Text
          style={baseStyles.textButton}
        >
          {trigger}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={true}
        onRequestClose={() => {
          console.log('Modal has been closed.')
          setIsVisible(false)
        }}
        visible={isVisible}
      >
        <View style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width: '85%',
            gap: 10
          }}>
            <Text>
              Are you sure?
            </Text>
            <View style={{
              flexDirection: 'row',
              gap: 10
            }}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.error,
                  padding: 10,
                  borderRadius: 5,
                  flex: 0.5
                }}
                onPress={onDelete}
              >
                <Text
                  style={{
                    color: 'white'
                  }}
                >
                  Delete
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primaryBlue,
                  padding: 10,
                  borderRadius: 5,
                  flex: 0.5
                }}
                onPress={() => {
                  setIsVisible(false)
                }}
              >
                <Text
                  style={{
                    color: 'white'
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              {/* <Button
                title='Action'
                onPress={onDelete}

              />
              <Button
                title='Close'
                onPress={() => {
                  setIsVisible(false)
                }} /> */}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalClose

const styles = StyleSheet.create({})