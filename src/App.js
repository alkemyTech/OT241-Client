import React from 'react'
import './App.css'
import RoutesNav from './components/RoutesNav';
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer';
import Backoffice from './components/Backoffice';

function App() {

  return (
    <div className="">
      <Header />
      <Backoffice />
      <Slider />
      <Footer/>
    </div>
  )
}

export default App
