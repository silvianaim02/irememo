import React from 'react'
import MainContent from './components/MainContent/MainContent'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='irememo-app'>
        <Navbar />
        <MainContent />
    </div>
  )
}

export default App