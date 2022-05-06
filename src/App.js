import React from 'react'

import { Footer, Possibility, Features, WhatTerrachain, Header } from './containers'
import { Cta, Navbar } from './components'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
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