import React, { useState, useEffect } from "react";
import { db } from './firebaseConfig.js'
import { collection, doc, getDocs } from 'firebase/firestore'


function MessageBox() {

    const [messages, setMessages] = useState([]);
    const messageCollectionRef = collection(db, 'messages');

    useEffect(() => {
        const getMessages = async () => {
            const data = await getDocs(messageCollectionRef);
            setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            // console.log(messages);
        }
        // getMessages();
    }, [])

    return (
        <div>
            message box
            {messages.map((message) => { return < >{message.message}</> })}
        </div>
    );
}

export default MessageBox;
