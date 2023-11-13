import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './Pages/Home'
import { Route,  Routes} from "react-router-dom";
import Login from './Feature/auth/componenets/Login'
import SignUpPage from './Pages/SignupPage'

import CartPage from './Pages/Cart'
import Checkout from './Pages/Checkout'
import ProductDetail from './Feature/product-list/Components/ProductDetails'
import P_DetailPage from './Pages/ProductDetail'



function App() {
 
  return (

    





<Routes>

  <Route path='/'  element={<Home /> } />
  <Route path='/Login' inde element={<Login /> }/> 
  <Route path='/SignUp' element={  <SignUpPage /> } /> 
  <Route path='/Cart' element={  <CartPage></CartPage> } /> 
  <Route path='/Checkout' element={  <Checkout></Checkout> } /> 
  <Route path='/ProductDetail' element={ <P_DetailPage></P_DetailPage> } /> 
  <Route path='*' element={<div>It and error</div>}/>

</Routes>







  

  
  )
}

export default App
