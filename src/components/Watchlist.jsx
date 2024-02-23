import React from 'react';
import { MovieCard } from './MovieCard';
import { useSelector } from 'react-redux';

export const Watchlist = () => {

    const watchlist = useSelector((state) => state.watchlist);
  
    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">My Watchlist</h1>
                <span className="count-pill">{watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}</span>
            </div>
{watchlist.length > 0 ? ( <div className="movie-grid">
               {watchlist.map(movie =>(
                   <MovieCard key={movie.id} movie={movie} type="watchlist" />
               ))} 
            </div>) : <h2 className="no-movies">No movies in your list , add some</h2>}
           
        </div>
            
        </div>
    )
}
