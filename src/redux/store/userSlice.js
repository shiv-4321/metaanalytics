import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    user: null
};

export const signupUser = createAsyncThunk('signupuser', async (userData,thunkAPI) => {
    try {
        const response = await authService.register(userData);
        return response;
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error.response.message);
    }
});

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
    extraReducers: (builder) => {
        builder.addCase(signupUser.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = true;
            state.message = '';
            state.user = null;
        });
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = '';
            state.user = action.payload;
        });
        builder.addCase(signupUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        });
    }
});

export const { loginHandler, signupHandler } = userSlice.actions;
export default userSlice.reducer;



