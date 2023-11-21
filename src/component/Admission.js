import React, { useState } from 'react'
import { useContext } from 'react'
import "./Admission.css"
import NoteContext from "../context/NoteContext"

export default function Admission({ showAlert, removeAlert }) {
  const { addNote } = useContext(NoteContext)   
  const [input, setInput] = useState({ childname: "", parentname: "", email: "", phone: "", gender: "" })

  const onChange = (e) => {
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value })
 
  }

 
const handleSubmit=(e)=>{
  e.preventDefault()  
  addNote(input.childname,input.parentname,input.email,input.phone,input.gender)
  showAlert('Admission Form submitted successfully', 'success');
  setTimeout(() => { removeAlert() }, 3000)
 
}

  return (
    <div>
      <div className="admission"><h1>Play School Admission Form</h1>
    <form  onSubmit={handleSubmit}>
        <label htmlFor="childname">Child's Name:</label>
        <input type="text" id="childname" onChange={onChange} value={input.childname} name="childname" /><br/>

        <label htmlFor="parentname">Parent/Guardian's Name:</label>
          <input type="text" id="parentname" onChange={onChange} value={input.parentname} name="parentname" /><br/>

        <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={onChange} value={input.email} name="email" /><br/>

        <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" onChange={onChange} value={input.phone} name="phone" /><br/>

  

        <label htmlFor="gender">Child's Gender:</label>
          <select id="gender" name="gender" placeholder='Select' onChange={onChange} value={input.gender} >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select><br/>

        <label htmlFor="comments">Additional Comments:</label>
          <textarea id="comments"  name="comments" rows="4" cols="50"></textarea><br/>

        <input type="submit"  id='submit' value="Submit"/>
    </form ></div>
    </div>

  )
}
