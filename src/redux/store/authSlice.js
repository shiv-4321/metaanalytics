import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    user: user ?? null,
    message: ''
};

export const authLogin = createAsyncThunk('authlogin', async (userData, thunkAPI) => {
    try {
        const response = await authService.login(userData);
        return response;
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error.response.message);
    }
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
        },
        reset: (state, action) => {
            state.user = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authLogin.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = true;
            state.user = null;
            state.message = '';
        });
        builder.addCase(authLogin.fulfilled, (state, action) => {
            console.log(state);
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.user = action.payload;
            state.message = action.payload.message ?? '';
        });
        builder.addCase(authLogin.rejected, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = true;
            state.user = null;
            state.message = action.payload;
        });
    }
});

export const { login, reset } = authSlice.actions;
export default authSlice.reducer;