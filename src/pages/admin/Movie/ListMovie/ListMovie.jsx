import ListMovieTable from "./ListMovieTable";
import { fetchListMovies } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function ListMovie() {
    const dispatch = useDispatch();

    const { data: dataDelete, error: errorDelete } = useSelector(
        (state) => state.adminDeleteMovieReducer
    );

    useEffect(() => {
        if (dataDelete) {
            toast.success("Xóa phim thành công!");
            dispatch(fetchListMovies());
        }
        if (errorDelete) {
            toast.error("Có lỗi xảy ra khi xóa phim!");
        }
    }, [dataDelete, errorDelete, dispatch]);

    return (
        <div className="p-4 sm:ml-64">
            <h1 className="text-4xl font-bold my-8">Danh sách phim</h1>
            <ListMovieTable />
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
