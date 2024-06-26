import { FlatList, PanResponder, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const ViewScreen = () => {
  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ]
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log('Gesture moved', gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('Gesture ended', gestureState);
      },
    })
  ).current;

  return (
    <View style={{
      flex: 1,
    }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 12,
          backgroundColor: "lightgray",
          gap: 20,
          flexDirection: 'column',
        }}
      >
        <View>
          <Text
          >
            View, Just for container
          </Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            padding: 12,
            backgroundColor: "gray"
          }}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                padding: 12,
                backgroundColor: "white",
                margin: 6,
                borderRadius: 6,
              }}
            >
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            borderRadius: 16,
            overflow: 'hidden', // Tambahkan ini untuk memastikan elemen dalam View tidak keluar dari border radius
          }}
        >
          {/* flat list itu tidak bisa dikasih border radius */}
          <FlatList
            horizontal
            contentContainerStyle={{
              backgroundColor: "aqua",
              padding: 12,
              gap: 2,
            }}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 12,
                  backgroundColor: "white",
                  margin: 6,
                  borderRadius: 6,
                }}
              >
                <Text>{item}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Header</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>This is the main content area.</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      </SafeAreaView>

    </View>
  )
}



export default ViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
  },
  footer: {
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },

})