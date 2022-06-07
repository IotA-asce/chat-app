import React, { useState, useEffect } from "react";

const ChatListPanelSearch = ({
  chat, 
  room,
  setRoom,
  setChat,
  socket
}) => {

  const [isBack, setIsBack] = useState(false);
    // const [searchText, setSearchText] = useState("");
  
  // const joinRoom =  () => {
  //   socket.emit("join_room", room);
  //   setRoom(room);
  //   console.log("ROOM NAME: ", room);
  // }


  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join-room", room);
      // setIsRegistered(true);

    }
  }
  return (
    <div className="panelChatSearch">
      <div className="searchInputBG">
        {isBack ? (<LeftArrowButton setIsBack={setIsBack} setChat={setChat}/> ) : (<SearchButton setIsBack={setIsBack}/>)}  
        <input 
          type="text"  
          placeholder="Type in room name ... " 
          maxLength={7} className='inputSearchBar' 
          onChange={(event) => {
            setIsBack(true); 
            setChat(event.target.value)
            setRoom(event.target.value)
          }} 
          onKeyDown={(e) => {if (e.key === "Enter") {
            joinRoom();
            setChat("");
          }}}
          value={chat}/>
          {/* <button onClick={joinRoom}>join room</button> */}
      </div>
    </div>
  );
};

const LeftArrowButton = ({setIsBack, setChat}) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="iconSearchBack" onClick={() => {setIsBack(false); setChat("")}}>
      <path
        fill="currentColor"
        d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"
      ></path>
    </svg>
  );
};

const SearchButton = ({setIsBack}) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="searchButtonMG"  onClick={() => {setIsBack(true)}}>
      <path
        fill="currentColor"
        d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
      ></path>
    </svg>
  );
};

export default ChatListPanelSearch;
