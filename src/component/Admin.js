import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/NoteContext'


function Admin() {
    const{setIsadmin}= useContext(NoteContext)
    const navigate=useNavigate()
    const[input,setInput]=useState({email:"",password:""})
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = input
        const response = await fetch(`http://localhost:5000/api/auth/Login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email ,password })
        })
        const json = await response.json();
        if (json.success) {
            // Save the auth token and redirect
            setIsadmin(true)
            localStorage.setItem('token', json.authToken);
            navigate("/clientdata");
        }
        else {
            alert("Invalid credentials");
        }
    }
    const onChange=(e)=>{
        e.preventDefault()
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const adminContainer={

        height:"60vh"
    }
  return (
    
      <div className="container d-flex justify-content-center align-items-center" style={adminContainer}>
          <form className="d-flex flex-column p-5 rounder"  onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" onChange={onChange} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" onChange={onChange} name='password' className="form-control" id="exampleInputPassword1" />
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>

  )
}

export default Admin
