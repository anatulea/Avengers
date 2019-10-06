import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Home from "./components/Home.js";
import AvengersList from "./components/AvengerList.js";
import Card from "./components/AvengerCard.js";
import './App.css';
import avengers from "./data.js"

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
      {/* //Route 1 way of rendering components
      <Route exact path ="/avengers" component ={AvengersList}/>
      <Route exact path ="/avengers/:id" component ={Card}/> */}
      <Route exact path="/avengers" render ={props =><AvengersList {...props} avengers= {avengers}/>}/>
      <Route  path="/avengers/:id" render ={props =><Card {...props} avengers= {avengers}/>}/>
    </div>
  );
}

export default App;
