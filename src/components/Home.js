import React from 'react'
import { Link } from "react-router-dom"; 

function Home (props) {
    return(
        <div>
            <h1>This is Avengers Database</h1>
           <p>Danger! This is a classified Information!</p>
           <Link to="/avengers" activeClassName="activeNavButton">
           Enter anyway!
          </Link>
        </div>
    );
};
export default Home;