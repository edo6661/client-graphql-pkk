import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'


interface ModalCloseProps<T> {
  action: (item: T) => Promise<void>;
  trigger: string;
  item: T;
}

const ModalClose = <T extends {}>(
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
    <View>
      <Button
        title={trigger}
        onPress={() => {
          setIsVisible(true)
        }}
      />
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
              Modal is open
            </Text>
            <View style={{
              flexDirection: 'row',
              gap: 10
            }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'pink',
                  padding: 10,
                  borderRadius: 5,
                  flex: 0.5
                }}
                onPress={onDelete}
              >
                <Text>
                  Delete
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'aqua',
                  padding: 10,
                  borderRadius: 5,
                  flex: 0.5
                }}
                onPress={() => {
                  setIsVisible(false)
                }}
              >
                <Text>
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