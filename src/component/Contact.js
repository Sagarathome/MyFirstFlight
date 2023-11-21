import React, { useState } from 'react';
import { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import "./Contact.css"





function ContactForm({ showAlert, removeAlert }) {
const{addContact}= useContext(NoteContext)


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic here to handle form submission
        addContact(formData.name, formData.email, formData.phone,formData.message )
        showAlert('Form submitted successfully', 'success');
        setTimeout(()=>{removeAlert()},3000)
        console.log('Form submitted:', formData);

    };

    return (
        <>
        <div className='contactForm'>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                            id="phone"
                            name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                </form>
           
            

<div className='contact_card '>


                <div className="card" style={{ width: "20rem" }}>
                   <h3>Our Location</h3>
                   <p>My First Flight Preschool K.h.-375 Main Kushak Road near Bharat medical Center Swaroop Nagar New Delhi-110042</p>

                </div>

                <div className="card" style={{ width: "20rem" }}>
                   <h3>Contact no.</h3>
                   <p><a href="tel:+919560588857"> 9560588857</a></p>
                 <p><a href="tel:+918595161359">8595161359</a></p>
                </div>
</div>
        </div>
        </>
    );
}

export default ContactForm;
