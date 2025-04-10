import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../Context/notes/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

function Notes(props) {
    const navigate = useNavigate()
    const context = useContext(noteContext);
    const { notes, fetchnote, editnote } = context;
    useEffect(() => {
        
        const token = localStorage.getItem('token');

        if (token) {
            fetchnote();  
        } else {
            navigate("/login");
        }
    }, [fetchnote, navigate]);

    const ref = useRef(null)
    const refclose = useRef(null)

    const [note, setnote] = useState({ id: "", etitle: "", ediscription: "", etag: "" })   // intial value assign blank

    const handleclick = () => {
        editnote(note.id, note.etitle, note.ediscription, note.etag)
        console.log("updating note", note);
        refclose.current.click();
        props.showalert("updated successfully", "success")
    }

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })  // ...note = as usual value except title and discription  :::[e.target.name] : [e.target.value]}) which value entered in input
    }

    const updatenote = (currentnote) => {
        ref.current.click();
        setnote({ id: currentnote._id, etitle: currentnote.title, ediscription: currentnote.discription, etag: currentnote.tag })
    }

    return (
        <div className="container my-3">
            <Addnote />

            {/* bootstrap modal : for the edit note  */}

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">         {/* classname=d-name mean display non */}

            </button>
            <div className="modal fade\\\\\\\\\\\\\\\\\" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="discription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="ediscription" name="ediscription" value={note.ediscription} onChange={onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onchange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleclick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Your Notes:</h3>
            <div className="row">
                {notes.map((note) => (
                    <Noteitem note={note} key={note._id} updatenote={updatenote} />   // it call noteitem passing note in props
                ))}
            </div>
        </div>
    );
}

export default Notes;