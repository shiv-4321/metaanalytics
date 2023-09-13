import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginHandler: (state, action) => {
            console.log(action.payload);
        },
        signupHandler: (state, action) => {
            console.log(action.payload);
        }
    },
    extraReducers: {}
});

export const { loginHandler, signupHandler } = userSlice.actions;
export default userSlice.reducer;

export const signupUser = createAsyncThunk('signupUser', (body) => {
    console.log(body);
});

export const loginUser = createAsyncThunk('loginUser', (body) => {
    console.log(body);
});

