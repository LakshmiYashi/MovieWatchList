import { ListTypes } from "../constants/listTypes"

const initialState = {
    watchlist:[],
    watched:[]
}


export const listReducer = (state = initialState,action) => {
    switch(action.type){
     case ListTypes.ADD_MOVIE_TO_WATCHLIST:
         return {
             ...state,
             watchlist:[action.payload,...state.watchlist]
         }
     case ListTypes.REMOVE_MOVIE_FROM_WATCHLIST:
         return {
           ...state,
           watchlist:state.watchlist.filter(movie => movie.id !== action.payload)
         }
     case ListTypes.ADD_MOVIE_TO_WATCHED:
         return {
             ...state,
             watchlist:state.watchlist.filter(movie => movie.id !== action.payload.id),
             watched:[action.payload,...state.watched]      
         }
     case ListTypes.REMOVE_MOVIE_FROM_WATCHED:
         return {
             ...state,
             watched:state.watched.filter(movie => movie.id !== action.payload)
         }
      case ListTypes.ADD_MOVIE_BACKTO_WATCHLIST:
          return {
              ...state,
              watchlist:[action.payload,...state.watchlist],
              watched:state.watched.filter(movie => movie.id !== action.payload.id)
          }   
        default:
            return state;
    }
}