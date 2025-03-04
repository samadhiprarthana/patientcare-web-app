import React from 'react' ;
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorDetails'
import AboutUs from '../pages/AboutUs';




const Routers = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/doctors" element={<Doctors/>} />
     <Route path="/doctors/:id" element={<DoctorsDetails/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Signup/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/services" element={<Services/>}/>
     <Route path="/about" element={<AboutUs/>}/>
    
    
 
  </Routes>
  );
};

export default Routers;