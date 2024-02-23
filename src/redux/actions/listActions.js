import { ListTypes } from "../constants/listTypes";

export const AddMovieToWatchlist = (movie) =>{
    return({type:ListTypes.ADD_MOVIE_TO_WATCHLIST, payload:movie})
};

export const removeMovieFromWatchlist = (id) => {
    return({type:ListTypes.REMOVE_MOVIE_FROM_WATCHLIST,payload:id})
};

export const addMovieToWatched = (movie) => {
    return({type:ListTypes.ADD_MOVIE_TO_WATCHED,payload:movie})
};

export const removeMovieFromWatched = (id) => {
    return({type:ListTypes.REMOVE_MOVIE_FROM_WATCHED,payload:id})
};

export const addMovieBackToWatchlist =(movie) => {
    return({type:ListTypes.ADD_MOVIE_BACKTO_WATCHLIST,payload:movie})
}