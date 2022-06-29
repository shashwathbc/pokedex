import React , {createContext , useReducer , useEffect} from "react";
import AppReducer  from "./AppReducer";
//initial state:
const initialState = {
    bookmark:localStorage.getItem('bookmark') ? JSON.parse(localStorage.getItem('bookmark')):[],
}

//create context:
export const GlobalContext = createContext(initialState);

//provider component:
export const GlobalProvider = (props) =>{
    const [state , dispatch] = useReducer(AppReducer , initialState);

    useEffect(()=>{
      localStorage.setItem('bookmark' , JSON.stringify(state.bookmark));
    },[state]);

    //action:
    const handleBookMark = (bm) => {
        dispatch({type:"ADD_POKEMON_TO_BOOKMARK" , payload:bm});
     }

     //remove from bookmark:
     const removeBookMark = (id) => {
        dispatch({type:"REMOVE_FROM_BOOKMARK" , payload:id})
     }

     

    return (
        <GlobalContext.Provider value={{bookmark:state.bookmark , handleBookMark , removeBookMark}}>
            {props.children}
        </GlobalContext.Provider>
    )
}