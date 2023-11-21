const express = require("express")
const router = express.Router()
const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser")

let JWT_SECRET ="Harryisagoodb@oy"
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })

], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // check wether the user already exist with the same email
    let user = await User.findOne({ email: req.body.email })
    console.log(user)
    if (user) {
        return res.status(400).json({ success,  error: "sorry a user with this email already exist" })
    }
    const salt = await bcrypt.genSalt(10)
    const secpas = await bcrypt.hash(req.body.password,salt)
    // create user
    user = await User.create({
        name: req.body.name,
        password: secpas,
        email: req.body.email,
    })
const data ={
    user:{
        id: user.id
    }
}
    const authToken = jwt.sign(data,JWT_SECRET)
    // .then(user => res.json(user))
    // .catch(err=>{console.log(err)
    //     res.json({error:"please enter unique value"})
    // })
    success=true
    res.json({success, authToken})
})
router.post('/Login', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })

], async (req, res) => {    
    let success= false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const{ email, password}= req.body
    try{
        let user = await User.findOne({email})
        if(!user){
            success = false
            return error.status(400).json(error,"Login with right credentials")
        }
        const passcompare = await bcrypt.compare(password,user.password)
        if(!passcompare){
            success=false
            return error.status(400).json(error,"Login with right credentials")

        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken =  jwt.sign(data, JWT_SECRET)
        let success = true
        res.json({success,authToken})

    }catch(error){
        console.log(error.message)
        res.status(500).send("some ERROR occured")
    }
   
    })

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res) => {

    try {
   userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router