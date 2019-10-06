import React  from 'react'
import avengers from "../data.js";
import { Route, Link } from "react-router-dom";
import AvengerInfo from "./AvengerInfo.js"
import AvengerMovies from "./AvengerMovies.js"
function Card (props){
console.log('this is the start');
console.log(Route);

  const character = props.avengers.find(
      item => item.id === Number(props.match.params.id)
      );

  //Converted both Ids to strings instead of numbers>>>
  //const character = avengers.find(item => props.match.params.id === `${item.id}`);
    return(
    <div className="card-box">
        <img className= "character-image" src= {character.img}/>
        <div className="character-info-wrapper">
            {/* <h2>{character.name}</h2>
          <<<<  <p>{character.description}</p> >>> refactored this in its own component*/}
            <h1>{character.name}</h1>
            <h4>({character.nickname})</h4>
            {/* <p>{character.description}</p>
            <div>Movies list</div> */}
        </div>
        <Link to={`/avengers/${props.match.params.id}/description`}> Avenger description </Link>
        <br></br>
        <Link to={`/avengers/${props.match.params.id}/movies`}> Avenger movies </Link>
        
   
        <Route 
        path="/avengers/:id/description" 
        render={ (props) => <AvengerInfo  {...props} description= {character.description} />}
        />

        <Route  
        path ="/avengers/:id/movies" 
        render ={(props) => <AvengerMovies  {...props} movies= {character.movies} />} 
        />

    </div>
    );
}
export default Card;