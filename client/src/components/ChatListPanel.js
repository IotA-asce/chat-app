import React from 'react';
import ChatListPanelContacts from './ChatListPanelContacts';
import ChatListPanelHeader from './ChatListPanelHeader';
import ChatListPanelSearch from './ChatListPanelSearch';

const ChatListPanel = ({
  chat, 
  room,
  username,
  setRoom,
  setChat, 
  socket
}) => {
  return (
    <div className='ChatListPanel'>
      <ChatListPanelHeader socket={socket} username={username}/>
      <ChatListPanelSearch chat={chat} room={room} setRoom={setRoom} setChat={setChat} socket={socket}/>
      <ChatListPanelContacts chat={chat} room={room} />
    </div>
  )
}

export default ChatListPanel