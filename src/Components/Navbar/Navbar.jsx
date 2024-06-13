import React from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png.png'


const Navbar = () => {
  return (
   <nav className='container'>
    <img src={logo} alt=" " className='logo' />
    <ul>
        <li>
        <button className='btn'>Home</button>
        </li>
        <li>
        <button className='btn'>AboutUs</button>
        </li>
        <li>
        <button className='btn'>Contact</button>
        </li>
        <li>
        <button className='btn'>Servicess</button>
        </li>
        <li><button className='btn'>SignUp</button></li>
    </ul>
   </nav>
  )
}

export default Navbar