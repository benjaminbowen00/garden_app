import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import Garden from "./components/garden.component.js";
import EditPlant from "./components/edit-plant.component.js";
import CreatePlant from "./components/create-plant.component.js";

import sunflower from "./images/sunflower.png"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href='/'>
        <img src={sunflower} width="40" height="40" alt="sunflower" />
        </a>
        <Link to="/" className="navbar-brand">Jessie's Garden</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
      <Link to="/" className="nav-link">All plants</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">View the latest plants</Link>
            </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>


            </div>
      </nav>


        <Route path="/" exact component={Garden} />
        <Route path="/edit/:id" component={EditPlant} />
        <Route path="/create" component={CreatePlant} />
      </div>
      </Router>
    );
  }
}

export default App;
