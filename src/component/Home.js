import React from 'react'
import Banner from "./Banner"
import Programs from "./Programs"
import ParentSpeak from "./ParentSpeak"
import Navbar from './Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
          <Banner/>
          <Programs />
          <ParentSpeak />
      
    </div>
  )
}

export default Home
