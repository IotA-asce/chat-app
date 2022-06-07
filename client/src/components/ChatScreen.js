import React, { useEffect, useState } from "react";

const ChatScreen = ({
    socket,
    messageList,
    setMessageList
}) => {

  useEffect(() => {
    socket.on("recieve-message", data => {
      console.log(data);
      setMessageList(list => [...list, data]);
    })
  }, [socket,setMessageList])

  const dummyContent = {
    room: "room",
    author: "author",
    message: "message"
  }

  return (
    <div className="chatScreen">
      {/* <MessageIncomming socket={socket} messageContent={dummyContent} />          // Dummy content for testing
      <MessageOutgoing socket={socket} messageContent={dummyContent}/> */}
      {messageList.map((messageContent => {
        return <MessageWrapper key={Math.random()} messageContent={messageContent} socket={socket}/>
      }))}
    </div>
  );
};

const MessageWrapper = ({messageContent, socket}) => {
  const [isLeft, setIsLeft] = useState(0);

  useEffect(() => {
    if(messageContent.author === socket.id){
      setIsLeft(1);
    }else {
      setIsLeft(0);
    }
  }, [messageContent.author, socket.id])

  return (
    <div className="messageWrapper">
      {isLeft === 0 ? <MessageIncomming messageContent={messageContent} /> : <MessageOutgoing messageContent={messageContent}/>}
    </div>
  );
};

const MessageIncomming = ({messageContent}) => {
  return <div className="messageIncomming">
    <div className="messageIncommingBox">
      {messageContent.message}
    </div>
  </div>;
};

const MessageOutgoing = ({messageContent}) => {
  return <div className="messageOutgoing">
    <div className="messageOutgoingBox">
      {messageContent.message}
    </div>
  </div>;
};

export default ChatScreen;
