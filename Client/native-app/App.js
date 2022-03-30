import React, { useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';
import ChatList from './components/ChatList';
import TopBar from './components/TopBar';

const socket = io.connect("http://localhost:3001")
const GLOBAL_ROOM = "global_room"

export default function App() {

  useEffect(() => {

    socket.emit("join_room", GLOBAL_ROOM)
    // console.log(socket)

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TopBar />
        <ChatList />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  screen: {
    width: "100%",
    height: "96.7%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
  }
});
