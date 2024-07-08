import {createContext,useContext  } from "react";


export const TodoContext = createContext({
    todoes:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id) => {},
    toggleCopmplete:(id)=>{}

});

export const useTodo =()=>{
    return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;