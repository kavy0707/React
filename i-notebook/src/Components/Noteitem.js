import React, { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';

function Noteitem(props) {

    const context = useContext(noteContext)
    const { deletenote } = context

    const { note, updatenote } = props;

    const handleclick = () => {
        deletenote(note._id)  // in which note delete button click return in notestate function with id
    }


    return (
        <div className="col-md-4 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.discription}</p>
                    <button className="btn btn-primary" onClick={() => {updatenote(note)}}>Edit</button>
                    {/* for edit note pass as prop note in updatenote */}
                    <button className="btn btn-danger mx-2 " onClick={handleclick}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Noteitem;
