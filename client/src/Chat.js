import React, { useEffect, useRef, useState } from 'react';
import './assets/chat.css';

function Chat({ socket, username, room }) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [message, setMessage] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes() +
                    ":" +
                    new Date(Date.now()).getSeconds()
            }
            setMessage((list) => [...list, messageData]);

            
            await socket.emit("send-message", messageData);
        }
        scrollToBottom()
    }

    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        socket.on("recieve-message", (data) => {
            console.log(data);
            setMessage((list) => [...list, data]);
            scrollToBottom();
        });
    }, [socket])

    return (
        <div className='chat-container'>
            <div className='chat-info'>
                <div className='chat-room'>
                    Room : {room}
                </div>
                <div className='chat-user'>
                    Username : {username}
                </div>
            </div>
            <div className='chat-texts'>
                {message.map((messageContent) => {
                    return <div className='message-content'>
                        {messageContent.message}
                        {messageContent.author == username ? "mine" : "not mine"}
                    </div>
                })}
                <div ref={messageEndRef} />
            </div>
            <div className='chat-input-bar'>
                <input
                    placeholder='write text here...'
                    className='chat-input-input'
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                />
                <button
                    onClick={sendMessage}
                    className="chat-input-button"
                    outline="off"
                >
                    <img alt='' src="https://img.icons8.com/color-glass/48/000000/filled-sent.png" />
                </button>
            </div>
        </div>
    );
}

export default Chat;
