import React from 'react';


const AvengerMovies = props =>{
    return (
<div>
   <ul> {props.movies.map(movie=>  <div key={movie}> {movie} </div> )} </ul>
</div>
    );
}
export default AvengerMovies;