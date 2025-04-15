import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice.ts";
import token from "../features/token/tokenSlice.ts"
import {UserProfile} from "../utils/types";


const preloadedState = JSON.parse(localStorage.getItem("state") || "{}") as { user: UserProfile, token: string };

export const store = configureStore({
    reducer: {
        user, token
    },
    preloadedState,
});

store.subscribe(() => localStorage.setItem("state", JSON.stringify(store.getState())));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch