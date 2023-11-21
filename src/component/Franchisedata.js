import React from 'react'
import { useContext,useEffect } from 'react';
import NoteContext from '../context/NoteContext';
import Clientnav from './Clientnav';
import { useNavigate,Link } from 'react-router-dom';

function Franchisedata() {
  const { contact, getContacts, deleteContact, setIsadmin } = useContext(NoteContext);
  const navigate = useNavigate()
  useEffect(() => {
    getContacts();
  }, []);

  const ulStyle = {
  listStyleType:'none'
  };

  const deleteButtonStyle = {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: "30px",
    padding: "2px 10px"
  };

  const handleDelete = (id) => {
    deleteContact(id)
    console.log("click")

  };

  const clientStyle = {
    border: '2px solid grey',
    margin: '15px',
    borderRadius: '10px',
    padding: '10px',
    width: "300px"
  };
  const Fdata = (e) => {
    e.preventDefault()
    navigate("/clientData");
  };
  const Logout = (e) => {
    e.preventDefault()
    setIsadmin(false)
    navigate("/");
  }
  

  return ( 
    <div>
      <Clientnav/>
      <div className="upperNav justify-content-start">
        <ul>
          <Link className='uppernav-link' onClick={Fdata}> Admission Data</Link>
        </ul>
        <ul>
          <Link className='uppernav-link' onClick={Logout}>Logout</Link>
        </ul>
      </div>
      <div className=" d-flex row  flex-wrap  justify-content-center " >
        {contact.map((item, index) => (
          <div key={index} className="d-flex flex-column justify-content-between align-items-center" style={clientStyle}>
            <h3>Franchise Data {index + 1}</h3>
            <ul style={ulStyle}>
              <li> Name: {item.name}</li>
              <li>Email: {item.email}</li>
              <li>Phone no: {item.phone}</li> 
              <li>Message: {item.message}</li>
            </ul>
            <button
              className='btn btn-danger'
              onClick={() => handleDelete(item._id)}
              style={deleteButtonStyle}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Franchisedata
