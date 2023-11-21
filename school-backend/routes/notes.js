const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const Contact =require("../models/Contact")
const { body, validationResult } = require('express-validator');

// Get all the notes using: GET "api/notes/fetchnotes"
router.get('/fetchnotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    console.log(notes);
    res.json(notes);
});
// Get all the Contacts using: GET "api/notes/fetchnotes"
router.get('/fetchcontacts', fetchuser, async (req, res) => {
    const contact = await Contact.find({ user: req.user.id });
    console.log(contact);
    res.json(contact);
});

// Add a new note using: POST "api/notes/addnote"
router.post('/addnote', fetchuser, [
    body('childname', 'Child Name is required').not().isEmpty(),
    body('parentname', 'Parent Name is required').not().isEmpty(),
    body('email', 'Valid email is required').isEmail(), // Changed this line
    body('phone', 'Phone is required').not().isEmpty(),
    body('gender', 'Gender is required'),
    
], async (req, res) => {
    try {
        const { childname, parentname, email, phone, gender } = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            childname,
            parentname,
            email,
            phone,
            gender,
       
            user: req.user.id,
        });

        const savedNote = await note.save();

        res.json(savedNote);
    } catch (error) {
        console.error(error.message,"sagar dikkt h");
        res.status(500).send('Some error occurred helllo');
    }
});


// Add a new note using: POST "api/notes/addnote"
router.post('/addcontact', fetchuser, [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Valid email is required').isEmail(), 
    body('phone', 'Phone is required').not().isEmpty(),
  
    
    
], async (req, res) => {
    try {
        const { name, email, phone,message } = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Contact({
            name,
            email,
            phone,
            message,
    
            user: req.user.id,
        });

        const savedContact = await note.save();

        res.json(savedContact);
        console.log(savedContact)
    } catch (error) {
        console.error(error.message,"sagar dikkt h");
        res.status(500).send('Some error occurred helllo');
    }
});

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deleteContact". Login required
router.delete('/deleteContact/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let note = await Contact.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Contact.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router