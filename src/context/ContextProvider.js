import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";
// import { useContext } from "react";

const ContextProvider = (props) => {
    const host = "http://localhost:5000";
    const noteinitial = [];
    const Contactinitial = [];

    const [contact, setContact] = useState(Contactinitial);    

    const [input, setInput] = useState(noteinitial);    

// Add Note or Data 
    const addNote = async (childname, parentname, email, phone, gender) => {

        console.log("sagar")
        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ childname, parentname, email, phone, gender })
            });

            const note = await response.json();
            console.log("hey sagar", note);
            setInput(input.concat(note));
        } catch (error) {
            console.error("An error occurred while adding a note:", error);
            // Handle the error gracefully, e.g., show an error message to the user
        }
    }
    

    //Fetch Note or Data
    const getNotes = async () => {
        // Api Call

        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json()
        console.log(json)
        setInput(json)
    }
   
// delete Data
    // Delete a note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            }
        })
        const json = await response.json();
        console.log(json)
        const newnote = input.filter((note) => { return note._id !== id })
        setInput(newnote)

    }
    const addContact = async (name, email, phone, message) => {

        console.log("sagar")
        try {
            const response = await fetch(`${host}/api/notes/addcontact`, {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ name, email, phone, message })
            });

            const note = await response.json();
            console.log("hey sagar", note);
            setContact(contact.concat(note));
        } catch (error) {
            console.error("An error occurred while adding a note:", error);
            // Handle the error gracefully, e.g., show an error message to the user
        }
    }
    //Fetch Contacts 
    const getContacts = async () => {
        // Api Call

        const response = await fetch(`${host}/api/notes/fetchcontacts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json()
        setContact(json)
    }
    // Delete a note
    const deleteContact = async (id) => {
        const response = await fetch(`${host}/api/notes/deleteContact/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("token")
            }
        })
        const json = await response.json();
        console.log(json)
        const newnote = contact.filter((note) => { return note._id !== id })
        setContact(newnote)
    }
         
    


    return (
        <NoteContext.Provider value={{ setIsadmin:props.setIsadmin ,input, addNote, getNotes, deleteNote, contact, addContact, getContacts, deleteContact }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default ContextProvider;
