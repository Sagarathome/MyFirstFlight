import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
          <footer className="footer-container">
              <div className="footer-row">
                  <div className="footer-Heading">Visit US</div>
                  <div className="footer-column-1">My First Flight Preschool K.h.-375 </div>
                  <div className="footer-column-1">Main Kushak Road </div>
                  <div className="footer-column-1"> near Bharat medical Center</div>
                  <div className="footer-column-1">Swaroop Nagar New Delhi-110042</div>
              </div>
              <div className="footer-row">
                  <div className="footer-Heading">About US</div>
                  <div className="footer-column" > <Link to="/About" state={{ direct: "Welcome" }} style={{color:"#fff"}} >Welcome to My First Flight </Link>  </div>
                  <div className="footer-column" ><Link to="/About" state={{ direct: "Welcome" }}  style={{ color: "#fff" }} >  Vision & Mission </Link></div>
                  <div className="footer-column" > <Link to="/About" state={{ direct: "Welcome" }} style={{ color: "#fff" }} > Our Approach </Link></div>
                  <div className="footer-column" ><Link to="/About" state={{ direct: "Welcome" }} style={{ color: "#fff" }} >  Our Team </Link></div>
              </div>
              <div className="footer-row">
                  <div className="footer-Heading">  Programmes </div>
                  <div className="footer-column"><Link to="/programs" state={{direct:"Teachers"}} style={{color:"#fff"}}>Playgroup </Link> </div>
                  <div className="footer-column" ><Link to="/programs" state={{direct:"Teachers"}} style={{color:"#fff"}}>Nursery </Link> </div>
                  <div className="footer-column"><Link to="/programs" state={{direct:"Teachers"}} style={{color:"#fff"}}>Kindergarten </Link> </div>
                  <div className="footer-column"><Link to="/programs" state={{direct:"Teachers"}} style={{color:"#fff"}}>Teacher Training Programme </Link> </div>
                  <div className="footer-column"><Link to="/programs" state={{ direct: "Teachers" }} style={{ color: "#fff" }}>Personalized Attention Program </Link> </div>
              </div>
              <div className="footer-row">
                  <div className="footer-Heading">Connect</div>
                  <div className="footer-column">Call Us +91 9560588857</div>
                  <div className="footer-column">Email Us care@My First Flight.com</div>
                  <div className="footer-column">© Timing 10:00AM - 6:00PM, Mon-Fri</div>
                  <div className="footer-column">Blogs</div>
              </div>
             
          </footer>
          

      
    </div>
  )
}
