import { Text, StyleSheet, View, ScrollView } from "react-native";
import React, { Component } from "react";
import ChatCard from "./ChatCard";

export default class ChatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      height: "90%",
      paddingTop: 20,
  },
  scrollView: {
    width: "100%",
    height: "100%",
  }
});
