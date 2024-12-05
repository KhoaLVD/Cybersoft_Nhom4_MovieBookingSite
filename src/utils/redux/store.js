import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminReducer";

const store = configureStore({
    reducer: {
        ...adminReducer,
    },
});

export default store;
