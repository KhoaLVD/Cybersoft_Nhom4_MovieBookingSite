import { useDispatch } from "react-redux";
import { deleteMovie } from "./reducer";
import { useNavigate } from "react-router-dom";
export default function DeleteMovie(props) {
    const { movie } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteMovie = (movie) => {
        dispatch(deleteMovie(movie));
        navigate("/admin/list-movie");
    };

    return (
        <>
            <button
                type="button"
                onClick={() => {
                    handleDeleteMovie(movie.maPhim);
                }}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
                Xoá
            </button>
        </>
    );
}
