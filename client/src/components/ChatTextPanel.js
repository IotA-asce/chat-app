import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatScreen from "./ChatScreen";

const ChatTextPanel = ({
  chat,
  room,
  socket,
  // , messageList, setMessageList
}) => {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="chatTextPanel">
      <ChatHeader room={room} />
      <ChatScreen
        socket={socket}
        messageList={messageList}
        setMessageList={setMessageList}
        // messageList={messageList}
        // setMessageList={setMessageList}
      />
      <ChatInput
        socket={socket}
        room={room}
        messageList={messageList}
        setMessageList={setMessageList}
      />
    </div>
  );
};

export default ChatTextPanel;
