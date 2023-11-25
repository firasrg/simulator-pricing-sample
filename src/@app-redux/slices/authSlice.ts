import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app-redux/models.ts";

interface IStateAuth {
    isAuthenticated: boolean
}

const initialState :IStateAuth = {
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isAuthenticated = true;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
        },
        clearData: () => {}
    }
})

export const {signIn, signOut,clearData} = authSlice.actions;
export const auth = (state: RootState) => state.auth;

export default authSlice.reducer;