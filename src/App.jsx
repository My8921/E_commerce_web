import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './Pages/Home'
import { Route,  Routes} from "react-router-dom";
import Login from './Feature/auth/componenets/Login'
import SignUpPage from './Pages/SignupPage'



function App() {
 
  return (

    





<Routes>

  <Route path='/'  element={<Home /> } />
  <Route path='/Login' inde element={<Login /> }/> 
  <Route path='/SignUp' element={  <SignUpPage /> } /> 
  <Route path='*' element={<div>It and error</div>}/>

</Routes>







  

  
  )
}

export default App
