import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import ShowUsers from './components/ShowUsers';
import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Fragment>
        <Navigation />
        <div className="container p-4">
          <Switch>
            <Route path="/edit/:id">
              <CreateNote />
            </Route>
            <Route path="/create-note">
              <CreateNote />
            </Route>
            <Route path="/create-user">
                <CreateUser />
            </Route>
            <Route path="/users">
              <ShowUsers />
            </Route>
            <Route path="/">
              <NotesList />
            </Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
