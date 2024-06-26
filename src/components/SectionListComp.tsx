import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { sectionListData } from '../constants/data'

const SectionListComp = () => {
  return (
    <View>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, index) => {
          // console.log("ITEM", item)
          // console.log("INDEX", index)
          return item + index
        }}
        contentContainerStyle={{
          backgroundColor: 'lightgray',
        }}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
              }}
            >{section.title}</Text>
          </View>
        )}

      />
    </View>
  )
}

export default SectionListComp

const styles = StyleSheet.create({})