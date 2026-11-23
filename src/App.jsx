import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Cart from './Cart'
import Date from './Date'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './page/Home'
import Pre_Order from './page/Pre_Order'
import Contact from './page/Contact'
import View from './page/View'




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Pre_Order' element={<Pre_Order/>} />
          <Route path='/View' element={<View/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App