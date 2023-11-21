import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/NoteContext';
import { Link } from 'react-router-dom';
import Clientnav from './Clientnav';

function ClientData() {
    const navigate = useNavigate();
    const { getNotes, input, deleteNote, setIsadmin } = useContext(NoteContext);

    useEffect(() => {
        getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const ulStyle = {
        listStyleType: 'none'
    };

    const deleteButtonStyle = {
        cursor: 'pointer',
        fontWeight: 'bold',
        borderRadius:"30px",
        padding:"2px 10px"
    };

    const handleDelete = (id) => {
        deleteNote(id)
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
        navigate("/franchisedata"); 
    };
    const Logout=(e)=>{
        e.preventDefault()
        setIsadmin(false)
        navigate("/"); 
    }

    return (
        <>
        <Clientnav/>
            <div className="upperNav justify-content-start">
                <ul>
                     <Link className='uppernav-link' onClick={Fdata}> Franchise Data</Link>
                </ul>
                <ul>
                     <Link className='uppernav-link' onClick={Logout}>Logout</Link>
                </ul>
            </div>
        <div className="container d-flex row  flex-wrap  justify-content-center  " >
            {input.map((item, index) => (
                <div key={index} className="d-flex flex-column justify-content-between align-items-center" style={clientStyle}>
                    <h3>Admission Data {index + 1}</h3>
                    <ul  style={ulStyle}>
                        <li>Child Name: {item.childname}</li>
                        <li>Parent Name: {item.parentname}</li>
                        <li>Email: {item.email}</li>
                        <li>Phone no: {item.phone}</li>
                    </ul>
                    <button
                    className='btn btn-danger'
                        onClick={()=>handleDelete(item._id)}
                        style={deleteButtonStyle}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
        </>
    );
}

export default ClientData;
