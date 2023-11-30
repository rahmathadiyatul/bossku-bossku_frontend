
import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './2_LandingPage/LandingPage.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import ResetPassword from './Components/ResetPassword/ResetPassword.js';
import NewPass from './Components/ResetPass-NewPass/NewPass.js';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import SuccessEmail from './Components/SuccesEmail/SuccesEmail.js';

export const CartContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<LandingPage></LandingPage>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/successemail" element={<SuccessEmail></SuccessEmail>}></Route>
          <Route path="/resetpassword/newpass" element={<NewPass></NewPass>}></Route>
          <Route path="/resetpassword" element={<ResetPassword></ResetPassword>}></Route>
          {/* <Route path="/:category/:id" element={<DetailKelas cart={cart} setCart={setCart}></DetailKelas>}></Route> */}
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
