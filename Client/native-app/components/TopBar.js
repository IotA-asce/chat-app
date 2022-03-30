import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TopBar() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionLeft}></View>
      <View style={styles.sectionRight}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
    },
    sectionLeft: {
        width: "50%",
        height: "100%",
        backgroundColor: "red",
    },
    sectionRight: {
        width: "50%",
        height: "100%",
        backgroundColor: "blue",
    }
})