import userReducer from "./userReducer";
import { configureStore } from "@reduxjs/toolkit";
export const store =configureStore({
    reducer :{
        user:userReducer
    }
})
