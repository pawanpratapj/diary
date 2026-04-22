import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import CreateNote from './pages/CreateNote'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App