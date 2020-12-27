import axios from 'axios';
import React, { Fragment, useEffect, useState} from 'react';


const ShowUsers = () => { 
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const data = await fetch('http://localhost:4000/api/users');
        const users = await data.json();
        setUsers(users);
    }

    const deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/' + id)
        getUsers();
    }

    
    return (
        <Fragment>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card card-body">
                        <h3 className="text-center mb-4">Users</h3>
                        <ul className="list-group">
                            {
                            users.map(user => (
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={user._id}
                                    onDoubleClick={() => deleteUser(user._id)}>
                                    {user.username}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
          </Fragment>
    );
}

export default ShowUsers;