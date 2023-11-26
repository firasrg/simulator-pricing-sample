import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app-redux/models";

interface IStateAuth {
    isAuthenticated: boolean,
    username: string | null
}

const initialState :IStateAuth = {
    isAuthenticated: false,
    username: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.username = action.payload;
            state.isAuthenticated = true;
        },
        signOut: () => initialState,
        clearData: () => {}
    }
})

export const {
    signIn,
    signOut,
    clearData
} = authSlice.actions;

export const auth = (state: RootState) => state.auth;

export default authSlice.reducer;