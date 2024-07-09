import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feactures/Todo/todoSlice";

export const store=configureStore({
    reducer:todoReducer

})