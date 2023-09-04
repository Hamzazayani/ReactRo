import React from 'react'
import MovieCard from './MovieCard';


function MovieList({info}) {
return (
    <div className='list'>
    
    {info.map((el)=> <MovieCard el={el}/>)}

</div>

)
}

export default MovieList