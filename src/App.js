import React from 'react'

import { Footer, Possibility, Features, WhatTerrachain, Header } from './containers'
import { Cta, Navbar } from './components'
import './App.css'
import SignIn from './components/Pages/SignIn'
import Register from './components/Pages/Register'
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Routes>
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/Register" element={<Register />} />
        </Routes>
        <Header />
      </div>
      <WhatTerrachain />
      <Features />
      <Possibility />
      <Cta />
      <Footer />
    </div>
  )
}

export default App;