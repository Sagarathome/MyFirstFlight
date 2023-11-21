import React from 'react';
import { Link} from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from './Images/WhatsApp Image 2023-10-08 at 16.17.44 (1).jpeg';



export default function Navbar() {
  // const navigate = useNavigate()
  return (
    <div className='Navbar-full'>
      <div className="upperNav">
        <ul>
          <li>
            <Link className='uppernav-link' to="./Admission">  Admission Enquiry </Link></li>
          <li> <Link className='uppernav-link' to="./contact">  Start A Franchise </Link></li>
          <li> <Link className='uppernav-link' to="./admin"> Admin Login </Link></li>
        </ul>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img className='logo' src={logo} alt="" srcSet="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-flex navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/programs">Programmes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admission">Admissions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
