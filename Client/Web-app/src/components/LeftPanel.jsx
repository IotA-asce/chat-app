import React, { useState } from 'react'
import './assets/App.css'

function LeftPanel({setSelectedUser, socket}) {

  const joinRoom = () => {
    socket.emit("join_room", "test-room");
  }

  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);     // negative index suggests no user selected
  const [cardList, setCardList] = useState([])

  return (
    <div className='left-panel'>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    {/*
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    */}
    </div>
  )
}

const Card = () => {



  return (
    <div className='lp-card-body'
      onClick={() => {
        
        // onClick event triggers the room to be joined
      
      }}
    >
      <div className='lp-card'>
        card
      </div>
    </div>
  )
}

export default LeftPanel