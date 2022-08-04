import React from 'react'
import CardList from '../CardList/CardList'
import "./MainContent.css"
import ActiveArchieveButton from "../button/ActiveArchieveButton"
import NewNoteButton from "../button/NewNoteButton"

const MainContent = () => {
  return (
    <>
      <div className='main-content'>
        <div className='top-main-content'>
          <ActiveArchieveButton />
          <NewNoteButton />
        </div>
        <CardList />
      </div>
    </>
  )
}

export default MainContent