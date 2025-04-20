import { configureStore } from "@reduxjs/toolkit";
import authReducer, { setToken } from "./authStore";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
// hydrate token on refresh
const token = localStorage.getItem("access_token");
if (token) {
    store.dispatch(setToken(token));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
