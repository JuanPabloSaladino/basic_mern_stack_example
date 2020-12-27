import React, { Fragment, useEffect, useState} from 'react';
import { format } from 'timeago.js';
import axios from 'axios';
import { Link } from 'react-router-dom';


const NotesList = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes()
    }, [])


    const getNotes = async () => {
        const data = await fetch('http://localhost:4000/api/notes');
        const notes = await data.json();
        setNotes(notes);
    }

    const deleteNote = async (noteId) => {
        await axios.delete('http://localhost:4000/api/notes/' + noteId);
        getNotes();
    }


    return (
        <Fragment>
            <div className="row">
                {
                    notes.map(note => (
                        <div className="col-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-center">{note.title}</h4>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-center">{note.content}</h5>
                                    <p className="text-center mb-0 mt-4">{format(note.date)}</p>
                                    <p className="text-center mb-0 mt-4">{note.author}</p>
                                </div>
                                <div className="card-footer text-center">
                                <div className="d-grid gap-2 mt-4 mb-1">
                                    <Link className="btn btn-warning" to={"/edit/" + note._id}>
                                        Edit
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => deleteNote(note._id)}>Delete</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    );
}

export default NotesList;