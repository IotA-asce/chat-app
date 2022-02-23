// ... PROJECT DEPENDENCIES > START
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
// ... PROJECT DEPENDENCIES > END


// ... CUSTOM ELEMENT DEPENDENCIES > START
// import ChatSelector from './components/ChatSelector';
// ... import ChatPanel from './components/ChatPanel'
// ... import LeftPanel from './components/LeftPanel'
// ... import RightPanel from './components/RightPanel'
// ... CUSTOM ELEMENT DEPENDENCIES > END


// ... CSS STYLE DEPENDENCIES > START
import './components/assets/App.css'
// ... CSS STYLE DEPENDENCIES > END

// ...................................................................................

// declaring access point to socket.io server 
const socket = io.connect("http://localhost:3001");

const GLOBAL_ROOM = "global_room"


function App() {

  // ... currentUser fetched from db and matched with tokens
  const [currentUser, setCurrentUser] = useState("")

  // ... selectedUser passed to Left  
  const [selectedUser, setSelectedUser] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [roomID, setRoomID] = useState("");

  useEffect(() => {

    // ... joint client to room / GLOBAL_ROOM for time being
    socket.emit("join_room", GLOBAL_ROOM)

    // ...selectedUser side effect to set roomID
    // ... ... roomID structure user1.concat(user2)
    // ... ... user 1 is the alphabetically sorted first 
    // ... ... ... amoung this.user and selectedUser
    // setRoomID(sortUsers(currentUser, selectedUser))

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
      {/* 
        <ChatSelector />
      */}
    </div>
  )
}


// ... utility functions

const sortUsers = (user1, user2) => {

  var listUser = [user1, user2];

  listUser.sort()

  return listUser[0];
}


export default App