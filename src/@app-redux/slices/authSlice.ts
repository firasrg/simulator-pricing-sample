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
        signIn: (state) => {
            state.isAuthenticated = true;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
        },
        setUsername: (state, action) => {
          state.username = action.payload;
        },
        clearData: () => {}
    }
})

export const {
    signIn,
    signOut,
    setUsername,
    clearData
} = authSlice.actions;

export const auth = (state: RootState) => state.auth;

export default authSlice.reducer;