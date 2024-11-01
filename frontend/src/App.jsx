import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/Placeorder/PlaceOrder"
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Login/Loginpopup'


function App(){
  const [showLogin , setShowLogin] = useState(false );

  return (<>
  {showLogin
  ?<Loginpopup setShowLogin={setShowLogin}/>:null}
  <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
    </Routes>
  </div>
  <Footer/>
  </>)
}

export default App
