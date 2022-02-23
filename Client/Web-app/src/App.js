import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import ChatPanel from './components/ChatPanel'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

import './components/assets/App.css'
import ChatSelector from './components/ChatSelector';

const socket = io.connect("http://localhost:3001");

function App() {

  // ... currentUser fetched from db and matched with tokens
  const [currentUser, setCurrentUser] = useState("")

  // ... selectedUser passed to Left  
  const [selectedUser, setSelectedUser] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [roomID, setRoomID] = useState("");

  useEffect(() => {

    // ...selectedUser side effect to set roomID
    // ... ... roomID structure user1.concat(user2)
    // ... ... user 1 is the alphabetically sorted first 
    // ... ... ... amoung this.user and selectedUser
    setRoomID(sortUsers(currentUser, selectedUser))

    // ... ...  messageList is updated
    // ... ... ... fetch operation for previous message 
    // ... ... ... current message appended
    setMessageList([]);




  }, [selectedUser])  // selected user is changed in the LeftPanel

  return (
    <div className='App'>
      {/*
        <LeftPanel setSelectedUser={setSelectedUser} socket={socket} />
        <ChatPanel socket={socket} roomID={roomID} messageList={messageList}/>
        <RightPanel />
      */}
      <ChatSelector />
    </div>
  )
}


// ... utility functions below

const sortUsers = (user1, user2) => {

  var listUser = [user1, user2];

  listUser.sort()

  return listUser[0];
}


export default App