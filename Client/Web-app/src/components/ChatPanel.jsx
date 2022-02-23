import React, { useEffect, useRef, useState } from 'react'
import './assets/App.css'

function ChatPanel() {

  // ...component contains the chat ui

  const [time, setTime] = useState(new Date().toISOString());
  const [messageList, setMessageList] = useState([])
  const messageEndRef = useRef(null)
  const [message, setMessage] = useState({
    messageText: "message text",
    createdAt: new Date(),
    to: "",
    from : "" 
  })

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom();
  },[messageList])

  return (
    <div className='chat-panel'>
      <Clock />
      <div className='chat-panel-message-list'>
        <MessageLeft message={message} />
        <MessageLeft message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <MessageRight message={message} />
        <div ref={messageEndRef}/>
      </div>
      <InputBar />
    </div>
  )
}


// ...utility function
// checks if message is users or of the sender concerned
// const checkMessageSide = (message) => {

//  ...functionality
//  if message is senders then returns true

// }


const InputBar = () => {

  const [inputText, setInputText] = useState("");

  const handleSend = (event) => {

    if (event.key === 'Enter') {
      console.log("message sent")
      setInputText("");
    }

  }

  return (
    <div className='cp-input-bar'>
      <div className='cpib-emoji'>
        <img alt='emoji' src="https://img.icons8.com/external-tulpahn-basic-outline-tulpahn/48/000000/external-emoji-birthday-party-tulpahn-basic-outline-tulpahn.png" />
      </div>
      <input
        className='cpib-input-field'
        type="text"
        onChange={(event) => {
          event.preventDefault();
          setInputText(event.target.value);
        }}
        onKeyPress={
          (event) => {
            if (event.key === 'Enter') {
              console.log("message sent")
              setInputText("");
              event.target.value = "";
            }
          }
        }
      />
      <div className='cpib-image'>
        <img alt='img' src="https://img.icons8.com/fluency-systems-regular/48/000000/image.png" />
      </div>
      <button onClick={() => {setInputText("")}}>reset</button>
    </div>
  )
}

const Clock = () => {
  var date = new Date();
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='chat-panel-clock'>
      {time}
    </div>
  )
}

const getTime = () => {
  var date = new Date();
  var hours = fixTime(date.getHours())
  var minutes = fixTime(date.getMinutes())
  var seconds = fixTime(date.getSeconds())

  return hours + ":" + minutes + ":" + seconds
}

const fixTime = (value) => {
  if(value < 10){
    return "0" + value.toString();
  }
  else{
    return value.toString();
  }
}

// ...END utility function

const MessageLeft = ({message}) => {

  // setCreatedAt(props.message.createdAt)
  console.log(message.createdAt)

  return (
    <div className='message-left-body'>
      <div className='message-left-text'>
        {"messageLeft"}
      </div>
      <div className='message-timestamp'>
        {getTime()}
      </div>
    </div>
  )
}

const MessageRight = ({message}) => {

  // const [message, setMessage] = useState({
  //   messageText: "",
  //   createdAt: new Date(),
  //   to: "",
  //   from : "" 
  // })

  return (
    <div className='message-right-body'>
      <div className='message-right-text'>
        {"messageright"}
        {message.messageText}
      </div>
      <div className='message-timestamp'>
        {getTime()}
      </div>
    </div>
  )
}

export default ChatPanel