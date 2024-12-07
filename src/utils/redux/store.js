import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminReducer";
import customerReducer from "./reducers/customerReducer";

const store = configureStore({
    reducer: {
        ...adminReducer,
        ...customerReducer,
    },
});

export default store;
