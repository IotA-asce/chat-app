import React, { useEffect, useState } from 'react'

const ChatListPanelContacts = ({ chat, room }) => {

    // const arr = [
    //     "Aadi",
    //     "Sohan",
    //     "Mu In",
    //     "Iota",
    //     "Nasif",
    //     "Asce",
    //     "Tom",
    //     "Jimmy",
    //     "Steve",
    //     "Polit"
    // ];
    // const [selectedChat, setSelectedChat] = useState()
    
    useEffect(() => {
        // console.log(selectedChat)
    }, [])

    return (
        <div className='chatListPanelContacts'>
            {/* {arr.map((item) => <ChatContactCard key={item} selectedChat={selectedChat} setSelectedChat={setSelectedChat} item={item} setChat={setChat}/>)} */}
            <ChatContactCard room={room}/>
        </div>
    )
}

const ChatContactCard = ({
    // selectedChat, setSelectedChat, item, 
    room}) => {

    // const chatContactCardActive = 'chatContactCard chatContactCardActive';
    const chatContactCard = 'chatContactCard'

    const [containerClass, setContainerClass] = useState(chatContactCard)
    
    // useEffect(() => {
    //     if (selectedChat === item){
    //         // current chat is highlighted
    //         setContainerClass(chatContactCardActive)    
    //         setChat(selectedChat)
    //         // room to be created 
    //     }
    //     else if (selectedChat === undefined || selectedChat !== item){
    //         setContainerClass(chatContactCard)
    //     }

    // }, [selectedChat,item, setChat])
    const [lastMessage, setLastMessage] = useState("*last Message*");



    return (
        <div className={containerClass} 
        // onClick={() => {setSelectedChat(item)}}
        >
            <div className='chatContactCardImage'></div>
            <div className='chatContactCardInfo'>
                <div className='chatContactCardInfoLineOne'>
                    <div className='chatContactName'>{room}</div>
                    <div className='chatContactTime'>{new Date().toISOString()}</div>
                </div>
                <div className='chatContactCardInfoLineTwo'>
                    {/* max length to be shown = 40 characters*/}
                    <div className='chatLastText'>{lastMessage}</div>
                </div>
            </div>
        </div>
    )
}

export default ChatListPanelContacts