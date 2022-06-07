import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import './assets/AppStyle.css';
import AppBox from "./components/AppBox.js";
import SignUpManager from './components/authcomp/SignUpManager';
import {
  auth
} from './firebase-config/firebase-config.js';

const socket = io.connect("http://localhost:3002");

function App() {

  const [room, setRoom] = useState('');
  const [chat, setChat] = useState("");
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [messageList, setMessageList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState("");

  const getCurrentUser = async () => {
    return await auth.currentUser;
  }

  const getUsername = async () => {
    if (currentUser ) {
      const userEmail = await currentUser.email;
      if(userEmail){
        const userName = userEmail.replace("@iota.com", "");
        return userName;
      }
    }
    return null;
  }

  useEffect(( ) => {
    const tuser = getCurrentUser();
    setCurrentUser(tuser);
    const uname = getUsername();
    if( typeof(uname) === String )
    {
      setUsername(uname);
    }else {
      setUsername("user")
    }
  },[])

  return (
    <div className="App">
      { currentUser ? 
        <AppBox 
        chat={chat}
        room={room}
        username={username}
        setRoom={setRoom}
        setChat={setChat}
        socket={socket}
      /> : 
        <SignUpManager setUsername={setUsername} setIsLoggedIn={setIsLoggedIn}/>
      }
    </div>
  );
}

export default App;
