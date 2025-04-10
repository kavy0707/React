const express = require("express");
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');           // it use forpassword securing
var jwt = require('jsonwebtoken');         // it given tocken to every user so user easily identify with his tocken from npm jsonwebtocken
var jwtstr = "kavy0707@" //for above
const fetchuser = require('../middleware/fetchuser')




// create user using:post "/api/auth/createuser"
router.post("/createuser", [
    body('name').isLength({ min: 3 }),   //include validation it fetch from express validation version-6.12.0 
    body('email').isEmail(),
    body('password', 'password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {

    let succsses = false

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If validation fails, return error messages
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        //check for email already exist or not?
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ succsses, error: "User already exists" });
        }

        // ("Creating user"):

        //password securing using "bcrypt"  and add salt in password ex.: pass=kavy   backend= hash(kavy)+salt
        var salt = await bcrypt.genSaltSync(10);
        var secpass = bcrypt.hashSync(req.body.password, salt);
        //

        user = await User.create({
            name: req.body.name,
            password: secpass,
            email: req.body.email,
            phonenumber: req.body.phonenumber
        });

        //create tocken using json web tocken 
        const data = {
            user: {
                "id": user.id
            }
        }
        var token = await jwt.sign(data, jwtstr);
        //
        succsses = true
        console.log(`${succsses} User created successfully ${user}`);
        res.json({ token, succsses });

    } catch (error) {  //if error oocur in create user then call it.
        console.error("Error occurred:", error.message);
        res.status(500).send("Some error occurred");
    }
});

/// user login

router.post("/login", [
    body('email').isEmail(),
    body('password')
], async (req, res) => {
    let succsses = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If validation fails, return error messages
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        //check with email user exist or not?
        let user = await User.findOne({ email: req.body.email });
        if (!user) {   // user with email not found
            return res.status(400).json("unauthorized", succsses);
        }


        var com = await bcrypt.compare(req.body.password, user.password)
        if (com == false) {   // wrong password
            return res.status(400).json("unauthorized", succsses);
        }

        // res.json({ "user information:": user }); //display the data of user

        //create tocken using json web tocken 
        const data = {
            user: {
                "id": user.id
            }
        }

        var token = await jwt.sign(data, jwtstr);
        succsses = true
        res.json({ token, succsses });  // it return token of which data finded


    } catch (error) {  //if error oocur in find user then call it.
        console.error("Error occurred:", error.message);
        res.status(500).send("Some error occurred");
    }
});

// give tocken as input in header and get user information
router.post("/getuser", fetchuser, async (req, res) => {
    try {
        userid = req.user.id
        const data = await User.findById(userid)
        res.send(data)
    } catch (error) {  //if error oocur in find user then call it.
        console.error("Error occurred:", error.message);
        res.status(500).send("Some error occurred");
    }
}
)



module.exports = router;
