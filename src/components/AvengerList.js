import React from 'react'
// import Card from "./AvengerCard.js.js";
import avengers from "../data.js"
import { Link } from "react-router-dom";

function AvengersList () {
    console.log(avengers);
    return(
        <div className="characters-list-wrapper">
            {avengers.map(item => (
               <div className="character-card" key= {item.id}> 
               
               <img src={item.thumbnail} alt={item.name} />
               <Link to ={`/avengers/${item.id}`}>
                   <h3> {item.name}</h3> 
                </Link>
                
               <Link to ={`/avengers/${item.id}`}>
                    <p>({item.nickname})</p> 
                </Link> 
               </div>
            ))}
        </div>
    );
};
export default AvengersList;