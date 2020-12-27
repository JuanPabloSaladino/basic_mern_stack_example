import React, { Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        NotesApp
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Notes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-note">
                                Create note
                            </Link>                        
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-user">
                                Create user
                            </Link>                        
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">
                                Users
                            </Link>                        
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navigation;