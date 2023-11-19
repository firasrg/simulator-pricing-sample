import {createSlice} from "@reduxjs/toolkit";

type StateType = {
    a: number
}

const initialState: StateType = {
    a: 0
}

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        sayHello: (state) => {
            state.a = 1;
        }
    }
})

export const {sayHello} = testSlice.actions;