import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer
    }
});

export default store;