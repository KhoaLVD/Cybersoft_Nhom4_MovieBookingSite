import adminLoginReducer from "@/pages/admin/Auth/duck/reducer";
import adminListUserReducer from "@/pages/admin/User/ListUser/reducer";
import adminAddUserReducer from "@/pages/admin/User/AddUser/reducer";
import adminDeleteUserReducer from "@/pages/admin/User/DeleteUser/reducer";
import adminUpdateUserReducer from "@/pages/admin/User/UpdateUser/reducer";
import adminDetailUserReducer from "@/pages/admin/User/UserDetail/reducer";
import adminListMovieReducer from "@/pages/admin/Movie/ListMovie/reducer";

import {
    adminFetchMovieByIdReducer,
    adminPostMovieSchedule,
    adminFetchCinemaSystem,
} from "@/pages/admin/Movie/AddMovieSchedule/reducer";

export default {
    adminLoginReducer,
    adminListUserReducer,
    adminAddUserReducer,
    adminDeleteUserReducer,
    adminUpdateUserReducer,
    adminDetailUserReducer,
    adminListMovieReducer,
    adminFetchMovieByIdReducer,
    adminPostMovieSchedule,
    adminFetchCinemaSystem,
};
