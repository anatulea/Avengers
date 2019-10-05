import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Home from "./components/Home.js";
import AvengersList from "./components/AvengerList.js";
import Card from "./components/AvengerCard.js";
import './App.css';

function App() {
  return (
    <div className="App">
       <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/avengers" activeClassName="activeNavButton">
            Avengers
          </NavLink>
        </li>
      </ul>
      
      
      <Route exact path="/" component ={Home}/>
      <Route exact path ="/avengers" component ={AvengersList}/>
      <Route exact path ="/avengers/:id" component ={Card}/>
    </div>
  );
}

export default App;
