import React, { useState } from 'react';
import Notecontext from './noteContext';

function NoteState(props) {


    const host = "http://localhost:5000"


    const noteinitial = []
    const [notes, setnotes] = useState(noteinitial)
    //fetch note
    const fetchnote = async () => {

        // api call 
        const response = await fetch(`${host}/api/Notes/getnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);

        setnotes(json)
    }


    // add note
    const addNote = async (title, discription, tag) => {
        try {
            // Ensure inputs are strings and trim them
            const trimmedTitle = title?.toString().trim() || "";    // convert title into string  if not exist then empty string ="", ?. safely checks if the value exists before calling the method.

            const trimmedDiscription = discription?.toString().trim() || "";
            const trimmedTag = tag?.toString().trim() || "";

            // Check for empty inputs after trimming
            if (!trimmedTitle || !trimmedDiscription || !trimmedTag) {
                throw new Error("Inputs cannot be empty.");
            }

            // API Call to add the note
            const response = await fetch(`${host}/api/Notes/addnotes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({
                    title: trimmedTitle,
                    discription: trimmedDiscription,
                    tag: trimmedTag,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Failed to add note");
            }

            // Get the newly created note from the server's response
            const newNote = await response.json();
            console.log("New note added successfully:", newNote);

            // Add the new note to the existing notes
            setnotes((prevNotes) => [newNote,...prevNotes]);  {/*first add*/}
            // setnotes((prevNotes) => [...prevNotes,newNote]);   {/*last add*/}
        } catch (error) {
            console.error("Error adding note:", error.message);
        }
    };




    // delete note
    const deletenote = async (id) => {

        // api call 
        const response = await fetch(`${host}/api/Notes/deletenotes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({})
        });
        const json = response.json();



        // logic
        const newnote = notes.filter((note) => {
            return note._id !== id
            // Returns true if the note's ID is not equal to the passed id (keeps the element).            
            // Returns false if the note's ID matches the passed id (removes the element).
        })

        setnotes(newnote)

    }


    // edit note
    const editnote = async (id, title, discription, tag) => {
        try {

            const response = await fetch(`http://localhost:5000/api/notes/updatenotes/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.getItem('token')
                },
                body: JSON.stringify({
                    title: title.trim(),
                    discription: discription.trim(),
                    tag: tag.trim(),
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Failed to update note");
            }

            const updatedNote = await response.json();
            console.log("Note updated successfully:", updatedNote);

            // Update State
            setnotes((prevNotes) =>  // prevnotes means all notes available in datrabase
                prevNotes.map((note) =>   // map create new array check all notes id with passed  id 
                    note._id === id ? { ...note, title, discription, tag } : note
                )
            );
        } catch (error) {
            console.error("Error updating note:", error.message);
        }
    };




    return (
        <Notecontext.Provider value={{ notes, addNote, deletenote, editnote, fetchnote }}>
            {props.children}
        </Notecontext.Provider>
    );
}

export default NoteState;
