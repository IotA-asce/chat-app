// ... REACT, LIBS DEPENDENCIES > START
import React, { useEffect, useState, useRef } from 'react'
// ... REACT, LIBS DEPENDENCIES > END


// ... STYLE COMPONENTS > START 
import './assets/styles.css'
// ... STYLE COMPONENTS > END

// DEPENDENCIES >> END
// ...............................................


function Chat({ socket, room }) {                                       // socket and room prop passed inside function


    // ...  input text entered by user in the input bar
    const [text, setText] = useState("");

    // ... chat message list > message objects to be shown in chat, mark[1]
    const [messageList, setMessageList] = useState([])

    // ... image object inserted by user > default mode null
    const [image, setImage] = useState(null)

    // ... scroll button class handler for hover if new message is added to message list (mark[1])
    const [scrollClassName, setScrollClassName] = useState();

    // ... message object consising of message details 
    // ... ... list components
    // ... ... ... messageTo
    // ... ... ... messageFrom
    // ... ... ... messageText
    // ... ... ... messageImage
    // ... ... ... messageTimeStamp >> [ not included in build ]
    const [messageData, setMessageData] = useState({});


    // ... REDUNDANT OBJECT >> TO BE REMOVED
    const defScrollClassName = {
        hover: "scroll-to-bottom-hover",
        static: "scroll-to-bottom",
    }

    // ... REFERENCE TO END OF MESSAGE
    const messageEndRef = useRef(null)


    // ... FUNCTION >> CHAT LIST SCROLL TO BOTTOM 
    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
        setScrollClassName(defScrollClassName.static)
    }


    // ... FUNCTION >> SEND MESSAGE TO SOCKET SERVER
    const sendMessage = async () => {
        if (text !== "" || image !== null) {
            setMessageData(
                {
                    room: room,
                    messageFrom: socket.id,
                    messageImage: image,
                    messageText: text,
                }
            )
            setScrollClassName(defScrollClassName.hover)
            scrollToBottom()
        }


        await socket.emit("send_message", messageData);
    }


    // ... REACT HOOK >> UPDATED ON CHANGE OF STATE OF {socket} OBJECT
    useEffect(() => {

        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data])
            setScrollClassName(defScrollClassName.hover);
            scrollToBottom()
        })

    }, [socket])


    // ........................................................................................
    // ........................................................................................
    return (
        <div className='cscc-container'>
            <div className='csccc-body'>
                {
                    messageList.map((message) =>
                        <Message message={message} socket={socket} />
                    )
                }
                <div ref={messageEndRef}></div>
            </div>
            <div className='csccc-input'>
                <div className='csccci-border'>
                    {/*
                        <button className={defScrollClassName.static} onClick={scrollToBottom}>
                            <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/50/000000/external-down-arrow-arrows-flatart-icons-flat-flatarticons-4.png" />
                        </button>
                    */}
                    <div className='cscccib-emoji'>
                        <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/27/000000/external-emoji-emoji-justicon-lineal-color-justicon-5.png" />
                    </div>
                    <input
                        autoFocus placeholder='Text...'
                        className='cscccib-input-bar'
                        type="text"
                        onChange={(event) => {
                            setText(event.target.value)
                        }}
                        onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                if (event.target.value !== "") {
                                    sendMessage()
                                    setMessageList((list) => [...list, {
                                        messageFrom: socket.id,
                                        messageText: text,
                                        messageImage: image,
                                        room: room,
                                    }])
                                    console.log("text", text)
                                    console.log("message-list", messageList)
                                    event.target.value = ""
                                    setImage(null)
                                    setScrollClassName(defScrollClassName.hover)
                                }
                            }
                        }} />
                    <div className='cscccib-files'>
                        {/*<img
                            alt=''
                            src="https://img.icons8.com/fluency/27/000000/image.png"
                            onClick={() => {
                                setText("this")
                            }}
                        />*/}
                        <button className='file-input'>
                            <input className='file-input-field' onChange={(event) => { setImage(event.target.value); console.log(typeof (image)) }} type='file' />
                        </button>
                        {/*<img
                            alt=''
                            src="https://img.icons8.com/ios/27/000000/like--v2.png"
                            onClick={() => {
                                setText("not")
                            }}
                        />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}


// ... INDIVIDUAL MESSAGE COMPONENT
const Message = ({ message, socket }) => {

    // ... classname to set if message is from user or sender
    const messageClassNames = {
        messageRight: {
            container: "message-container-right",
            body: "message-body-right",
            image: "message-image-right",
            noImage: "message-no-image-right",
            text: "message-text-right",
        },
        messageLeft: {
            container: "message-container-left",
            body: "message-body-left",
            image: "message-image-left",
            noImage: "message-no-image-left",
            text: "message-text-left",
        },
    }

    // ... hook for setting the message card classname
    const [messageClassName, setMessageClassName] = useState(messageClassNames.messageLeft)
    const [imgPath, setImgPath] = useState("");


    useEffect(() => {

        if (message.messageFrom === socket.id) {
            setMessageClassName(messageClassNames.messageRight)
        } else {
            setMessageClassName(messageClassNames.messageLeft)
        }

    }, [])

    return (
        <div className={messageClassName.container}>
            <div className={messageClassName.body}>
                <div
                    className={message.messageImage ? (messageClassName.image) : (messageClassName.noImage)}
                    style={{
                        // backgroundImage: "url('https://source.unsplash.com/random/')",
                        backgroundImage: `url(${imgPath})`
                    }}
                >
                    {null}
                </div>
                <div className={messageClassName.text}>
                    {message.messageText}
                </div>
            </div>
        </div>
    )
}

export default Chat