// ... PROJECT DEPENDENCIES > START
import React, { useState } from 'react';
// ... PROJECT DEPENDENCIES > END

// ... PROJECT STYLE DEPENDENCY > START
import './assets/styles.css';
// ... PROJECT STYLE DEPENDENCY > END


// ... PROJECT COMPONENT DEPENDENCY > START
import Chat from './Chat';
// ... PROJECT COMPONENT DEPENDENCY > END


// ..................................................................................................


// ... lists out the available chats and redirects to
// ... the specific chat on being selected
function ChatSelector({ socket, room }) {

    // ... contains the list of users available for current 
    // ... user to communicate
    const [chatList, setChatList] = useState([]);

    // ... selected chat index ( contains key of the selected user )
    // ... negative index indicates no chat index
    const [selectedIndex, setSelectedIndex] = useState(-1);




    // ... TEST DATA ... specifying format
    const cardDets = {
        username: "__recursion_",
        lastText: "Dudeee you awake ? ?",
        lastTextDate: "Jan 26",
    }

    return (
        <div className='cs-container' >
            <div className='csc-list' >
                {/*
                    <ChatCard cardDets={cardDets} />
                    <ChatCard cardDets={cardDets} />
                    <ChatCard cardDets={cardDets} />
                    <ChatCard cardDets={cardDets} />
                */}
            </div>
            <div className='csc-chat'>
                <Chat socket={socket} room={room} />
            </div>
        </div>
    )
}


// .........................................................................................


// ...  card displaying data of each user
const ChatCard = () => {

    // ... if its active then bg color is updated
    const [isActive, setIsActive] = useState(false)
    const [classname, setClassname] = useState("cc-container")

    return (
        <div className={classname}
            onClick={() => {
                setIsActive(true);
                setClassname("cc-container-selected")
            }}

        >
            <div className='ccc-details' >
                <div className='cccd-image' style={{
                    backgroundImage: "url('https://source.unsplash.com/random/')",
                }} >
                </div>
                <div className='cccd-text-info' >
                    <div className='cccdti-usrname' >
                        @__recursion_
                    </div>
                    <div className='cccdti-recent-text' >
                        Dudeee you awake ? ?
                    </div>
                </div>
            </div>
            <div className='ccc-timestamp'>
                {"Jan 26"}
            </div>
        </div>
    )
}

export default ChatSelector