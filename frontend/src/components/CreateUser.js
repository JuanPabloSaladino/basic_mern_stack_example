import React, { Fragment, useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


const CreateUser = () => {    

    const { register, errors } = useForm();

    const [user, setUser] = useState({
        username: ''
    });

    const onChangeUsername = (event) => {
        setUser({
            username: event.target.value
        })
    }

    const sendUser = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/api/users', {
            username: user.username
        })
        event.target.reset();
    }



    return (
        <Fragment>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card card-body">
                        <h3 className="text-center mb-4">Create a new user</h3>
                        <form className="form-group" onSubmit={sendUser}>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                ref={
                                    register({
                                        required: {
                                            value: true, 
                                            message: 'Please, enter an username'
                                        }
                                    })
                                    }
                                onChange={onChangeUsername}
                            />
                            <span className="text-danger text-small text-center d-block my-3">
                                {errors?.username?.message}
                            </span>
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

export default CreateUser;