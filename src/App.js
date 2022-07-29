import React from 'react'
import './App.css'
// import RoutesNav from './components/RoutesNav.js';
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer';
import Backoffice from './components/Backoffice';
import Home from './pages/Home'

function App() {

  return (
    <div className="">
      <Header />
      {/* <RoutesNav/> */}
      {/* <Backoffice /> */}
      <Home/>
      <Slider />
      <Footer/>
    </div>
  )
}

export default App
