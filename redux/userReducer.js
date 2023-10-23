import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name: "user",
    initialState: null,
    //setUser édite user dans le store
    reducers: { 
        setUser: (state, action) => { 
            return action.payload
        },
        resetUser:(state,action)=>{
            return null
        }
    }

});
//export setUser de actions pour le rendre disponible
export const {setUser,resetUser} = user.actions;
//rendre le reducer dispo par defaut
export default user.reducer;
