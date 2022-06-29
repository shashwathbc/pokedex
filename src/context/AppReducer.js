//function returns data :
export default (state , action) =>{
    switch(action.type){
        case "ADD_POKEMON_TO_BOOKMARK":
            return{
                ...state,
                bookmark: [action.payload, ...state.bookmark]
            }
        case "REMOVE_FROM_BOOKMARK":
            return{
                ...state,
                bookmark: state.bookmark.filter(poke=> poke.id !== action.payload )
            }
        default:
            return state;

    }
}