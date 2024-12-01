import { configureStore} from "@reduxjs/toolkit"
import adminLoginReducer from "./../../pages/admin/Auth/duck/reducer"
import listUserReducer from "./../../pages/admin/User/ListUser/reducer"
import addUserReducer from "./../../pages/admin/User/AddUser/reducer"

const store = configureStore({
    reducer: {
       adminLoginReducer,
       listUserReducer,
        addUserReducer,
    }
})

export default store;