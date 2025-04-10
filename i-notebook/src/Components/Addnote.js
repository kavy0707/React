import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/noteContext'

function Addnote(props) {

    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setnote] = useState({ title: "", discription: "", tag: "" })   // intial value assign blank

    const handleclick = () => {
        addNote(note.title, note.discription, note.tag)   // from the context 
    }

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: [e.target.value] })  // ...note = as usual value except title and discription  :::[e.target.name] : [e.target.value]}) which value entered in input
    }

    return (
        <div>
            <div className='container my-5 '>
                <h2>Add notes :</h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><h3>Title</h3></label>
                    <input type="text" className="form-control" id="title" name="title" onChange={onchange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="discription" className="form-label"><h3>Discription</h3></label>
                    <input type="text" className="form-control" id="discription" name="discription" onChange={onchange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><h3>Tag</h3></label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onchange} minLength={5} required />
                </div>

                <button type="button" className='btn btn-primary' onClick={handleclick}>Addnote</button>
            </div>

        </div>
    )
}

export default Addnote
