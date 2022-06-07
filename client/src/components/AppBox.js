import React from "react";
import ChatListPanel from "./ChatListPanel";
import ChatTextPanel from "./ChatTextPanel";

const AppBox = ({
  chat,
  room,
  username,
  setRoom,
  socket,
  setChat
  // messageList,
  // setRoom,
  // setMessageList,
  // setIsLoggedIn,
}) => {
  return (
    <div className="AppBox">
      <ChatListPanel 
        chat={chat} 
        room={room}
        username={username}
        setRoom={setRoom}
        setChat={setChat}
        socket={socket}
      />
      <ChatTextPanel 
        chat={chat}
        room={room}
        setRoom={setRoom}
        socket={socket}
        // socket={socket}
        // messageList={messageList}
        // setMessageList={setMessageList} 
      />
    </div>
  );
};

export default AppBox;
