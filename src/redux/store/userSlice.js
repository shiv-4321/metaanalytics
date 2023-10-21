import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { userService } from "./userService";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    user: null
};

export const signupUser = createAsyncThunk('signupuser', async (userData, thunkAPI) => {
    try {
        const response = await authService.register(userData);
        return response;
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error.response.message);
    }
});


export const importUserData = createAsyncThunk('importdara', async (importData, thunkAPI) => {
    try {
        let formData = [];

        importData.map(val => {
            let { first_name, last_name, country_code, phone, tag } = val;
            return formData.push({
                fname: first_name,
                lname: last_name,
                country_code,
                phone,
                tag
            });
        });
        const response = await userService.importData(formData)
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
        signupHandler: (state, action) => {
            console.log(action.payload);
        },
        reset: (state, action) => {
            state.user = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
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


        builder.addCase(importUserData.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = true;
            state.message = '';
        });
        builder.addCase(importUserData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = action.payload.message;
        });

        builder.addCase(importUserData.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { loginHandler, reset } = userSlice.actions;
export default userSlice.reducer;



