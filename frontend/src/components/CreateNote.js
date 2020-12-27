import React, { Fragment, useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios'; 
import "react-datepicker/dist/react-datepicker.css";
import { useParams} from "react-router";

const CreateNote = () => {    

    const [users, setUsers] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        getUsers();
    }, [])


    const verifyIfNoteIsEditing = () => {

        const { id } = useParams;

        if (id != null) {
            return true
        }
        else {
            return false
        }
    }

    const [data, setData] = useState({    
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: verifyIfNoteIsEditing(),
        _id: useParams().id
    });


    const getUsers = async () => {
        const data = await fetch('http://localhost:4000/api/users');
        const users = await data.json();
        setUsers(users);
    }

    const onSubmit = async (event) => {

        const newNote = {
            title: data.title,
            content: data.content,
            author: data.userSelected,
            date: data.date
        }

        if(data.editing){
            await axios.put('http://localhost:4000/api/notes/' + data._id, newNote);
        }else{
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        
        event.preventDefault();
        window.location.href = '/';
    }

    const onInputChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        });
    }

    const onChangeDate = (date) => {
        setDate(date)
        setData({
            ...data, 
            date: date
        })
    }




    return (
        <Fragment>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card card-body">
                        <h3 className="text-center mb-4">Create a new note</h3>

                        <div className="form-group my-2">
                            <select 
                                className="form-select" 
                                name="userSelected" 
                                aria-label="Default select example"
                                onChange={onInputChange}>
                                <option>Select an author</option>

                                {
                                    
                                users.map(user => 
                                    <option key={user._id} value={user.username}>
                                        {user.username}
                                    </option>
                                )

                                }
                            
                            </select>
                        </div>

                        <div className="input-group my-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                required
                                onChange={onInputChange}
                            />
                        </div>

                        <div className="form-group my-2">
                            <textarea 
                                name="content" 
                                className="form-control"
                                placeholder="Content"
                                onChange={onInputChange}
                            >
                                
                            </textarea>
                        </div>

                        <div className="form-group my-2">
                            <DatePicker 
                                className="form-control"
                                selected={date}
                                onChange={onChangeDate}
                            />
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="d-grid gap-2 mt-4 mb-1">
                                    <button className="btn btn-success">Save</button>
                                </div>
                            </form>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </Fragment>
    );
}

export default CreateNote;