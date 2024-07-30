import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
// import Auth from './schema/Log';
function App() {
  return (
    <>
       <Header />
      <Outlet />
    </>
  )
}

export default App

