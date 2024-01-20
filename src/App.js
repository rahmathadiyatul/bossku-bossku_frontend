import React, { useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from './2_LandingPage/LandingPage.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import ResetPassword from './Components/ResetPassword/ResetPassword.js';
import NewPass from './Components/ResetPass-NewPass/NewPass.js';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import SuccessEmail from './Components/SuccesEmail/SuccesEmail.js';
import Projects from './Components/Projects/Projects.js';
import ContactUs from './Components/ContactUs/ContactUs.js';
import DetailProject from './Components/Projects/ProjectDetails/ProjectDetails.js';
import Dashboard from './Dashboard/Dashboard.js';
import { TokenContext } from './Components/UserPageComponents/TokenContext.js';

export const TokenContextProvider = createContext()
function App() {
  const { token } = useContext(TokenContext);

  // ProtectedRoute component to check token before rendering
  const ProtectedRoute = ({ element, ...rest }) => {
    return token ? element : <Navigate to="/login" />;
  };

  return (
    <TokenContextProvider.Provider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/about-us" element={<ProtectedRoute element={<AboutUs />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact-us" element={<ProtectedRoute element={<ContactUs />} />} />
            <Route path="/projects" element={<ProtectedRoute element={<Projects />} />} />
            <Route path="/project-detail" element={<ProtectedRoute element={<DetailProject />} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/successemail" element={<ProtectedRoute element={<SuccessEmail />} />} />
            <Route path="/resetpassword/newpass" element={<ProtectedRoute element={<NewPass />} />} />
            <Route path="/resetpassword" element={<ProtectedRoute element={<ResetPassword />} />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TokenContextProvider.Provider>
  );
}

export default App;
