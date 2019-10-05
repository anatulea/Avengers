import React  from 'react'
import avengers from "../data.js";

function Card (props){
  const character = avengers.find(item => item.id ===Number(props.match.params.id));
  //Converted both Ids to strings instead of numbers>>>
  //const character = avengers.find(item => props.match.params.id === `${item.id}`);
    return(
    <div>
        <img className= "character-image" src= {character.img} />
        <div className="character-info-wrapper">
            <h2>{character.name}</h2>
            <p>{character.description}</p>

        </div>
    </div>
    );
}
export default Card;