import React, { useState } from 'react'

import './assets/styles.css'
import SphereApp from './sphere/SphereApp';

function Chat() {

    const [text, setText] = useState("");
    const message = {
        messageImage: "",
        messageText: "",
        messageTo: "",
        messageFrom: "",
    }

    return (
        <div className='cscc-container'>
            <div className='csccc-body'>
                {/*<Message
                    message={
                        message
                    }
                />*/}
                o
            </div>
            <div className='csccc-input'>
                <div className='csccci-border'>
                    <div className='cscccib-emoji'>
                        <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/27/000000/external-emoji-emoji-justicon-lineal-color-justicon-5.png" />
                    </div>
                    <input autoFocus placeholder='Text...' className='cscccib-input-bar' type="text" />
                    <div className='cscccib-files'>
                        <img
                            alt=''
                            src="https://img.icons8.com/fluency/27/000000/image.png"
                            onClick={() => {
                                setText("this")
                            }}
                        />
                        <img
                            alt=''
                            src="https://img.icons8.com/ios/27/000000/like--v2.png"
                            onClick={() => {
                                setText("not")
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Message = (props) => {

    const message = {
        messageText: props.message.messageText,
        messageImage: props.message.messageImage,
        messageTo: props.message.messageTo,
        messageFrom: props.message.messageFrom,
    }

    const [isMessageUsers, setIsMessageUsers] = useState(false)

    if (message.messageFrom === props.currentUser) {
        setIsMessageUsers(true)
    } else {
        setIsMessageUsers(false)
    }

    return (
        <div className='message-container'>
            <div className='message-body'>
                <div className='message-image'>
fe
                </div>
                <div className='message-text'>

                </div>
            </div>
        </div>
    )
}

export default Chat