import React from 'react'
import logo from "./Images/WhatsApp Image 2023-10-08 at 16.17.44 (1).jpeg"

function Clientnav() {
  const Style={
   height:"100px"
  }
  return (
      <nav className='d-flex justify-content-center   '>
      <img style={Style} src={logo} alt="" srcSet="" />
      </nav>
  )
}

export default Clientnav
