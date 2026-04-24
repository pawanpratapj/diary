import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateNote />} />
        <Route path='/edit' element={<EditNote />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App