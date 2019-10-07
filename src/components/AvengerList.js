import React from 'react'
// import Card from "./AvengerCard.js.js";
import avengers from "../data.js"
import { Link } from "react-router-dom";


function AvengersList (props) {
    console.log(avengers);
    return(
        <div className="characters-list-wrapper">
            {props.avengers.map(item => (
               <div className="character-card" key= {item.id}> 
               
               <img src={item.thumbnail} alt={item.name} />
               {/* <Link to ={`/avengers/${item.id}`}>
                   <h3> {item.name}</h3> 
                </Link> */}
                
                <h2>
                    <div onClick = {()=> routeToAvengers(props, item)}> {item.name} </div>
                </h2>
               <Link to ={`/avengers/${item.id}`}>
                    <p>({item.nickname})</p> 
                </Link> 
               </div>
            ))}
        </div>
    );
};
function routeToAvengers(props,item){
    props.history.push(`/avengers/${item.id}`)
}

export default AvengersList;