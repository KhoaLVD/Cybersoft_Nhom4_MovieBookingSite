import { configureStore} from "@reduxjs/toolkit"
import adminLoginReducer from "./../../pages/admin/Auth/duck/reducer"

const store = configureStore({
    reducer: {
       adminLoginReducer,
    }
})

export default store;