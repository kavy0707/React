const express = require('express');
const router = express.Router();
const notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const user = require("../models/user");



// router-1 store the data with header token
router.post("/addnotes", fetchuser, [
    body('title').isLength({ min: 3 }),   //include validation it fetch from express validation version-6.12.0 
    body('disciption'),
    body('tag', 'password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If validation fails, return error messages
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, discription, tag } = req.body;

        const note = new notes({    // make a promise
            title, discription, tag, user: req.user.id
        })

        await note.save()
        res.json(note);

    } catch (error) {  //if error oocur in find user then call it.
        console.error("Error occurred:", error.message);
        res.status(500).send("Some error occurred");
    }
})

// router-2 get notes of user give in header
router.get('/getnotes', fetchuser, async (req, res) => {
    try {
        const data = await notes.find({ user: req.user.id })
        res.send(data)
    } catch (error) {
        console.error(error.message)
        res.status(500)
    }
})


// router-3 it pdate the notes using given id in api and given token in header
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    const { title, discription, tag } = req.body;
    const newnotes = {};

    // Assign fields only if provided
    if (title) newnotes.title = title;
    if (discription) newnotes.discription = discription;
    if (tag) newnotes.tag = tag;

    try {
        // Validate ObjectId
        const id = req.params.id;
        if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid note ID" });
        }

        // Check if the note exists
        let note = await notes.findById(id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        // Check if the user is authorized
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        // Update the note
        note = await notes.findByIdAndUpdate(
            id,
            { $set: newnotes },
            { new: true }
        );

        res.json({ success: true, note });
    } catch (err) {
        console.error("Error in updating note:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// router-4 delete the note using given id in api and token in header :api/notes/deletenote/:id 
router.delete('/deletenotes/:id', fetchuser, async (req, res) => {
    try {
        let note = await notes.findById(req.params.id);
        if (!note) { res.status(400).json("not found") } // check which id you give it found or not?

        if (note.user.toString() !== req.user.id) {
            res.send("unauthorization")
        }

        note = await notes.findByIdAndDelete(req.params.id)
        res.json("success")

    } catch (error) {
        console.log(error.message);
    }
})
module.exports = router