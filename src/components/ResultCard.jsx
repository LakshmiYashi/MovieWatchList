import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AddMovieToWatchlist , addMovieToWatched } from "../redux/actions/listActions";

export const ResultCard = ({movie}) => {
    const watchlist = useSelector((state)=>state.watchlist);
    const watched = useSelector((state)=>state.watched);
    let storedMovie = watchlist.find(obj => obj.id === movie.id );
    let watchedMovie = watched.find(obj => obj.id === movie.id );
    const watchlistDisabled = storedMovie ? true : false;
    const watchedDisabled = watchedMovie ? true : false;
    const dispatch = useDispatch();

    return (
        <div className="result-card">
        <div className="poster-wrapper">
         {movie.poster_path ? (
    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}  alt={`${movie.title}Poster`} /> ):(
        <div className ="filler-poster"></div>
)}
 </div>
 <div className="info">

 <div className="header">
     <h3 className="title">{movie.title}</h3>
     <h3 className="release-date">{movie.release_date ? movie.release_date.substring(0,4) : "-"}</h3>
 </div>
 
 <div className="controls">
 <button className="btn" onClick={()=> dispatch(AddMovieToWatchlist(movie)) } disabled = {watchedDisabled || watchlistDisabled}>
     Add to Watchlist
 </button>
 <button className="btn" onClick={()=> dispatch(addMovieToWatched(movie)) } disabled = {watchedDisabled}>
     Add to Watched
 </button>
</div>


 </div>
            
        </div>
    );
};

