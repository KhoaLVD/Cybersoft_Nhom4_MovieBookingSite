import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { fetchListMovies } from "./reducer";
import Movies from "./Movies";
import { Spinner } from "flowbite-react";

export default function ListMovieTable() {
    const dispatch = useDispatch();
    const props = useSelector((state) => state.adminListMovieReducer);

    useEffect(() => {
        dispatch(fetchListMovies());
    }, []);

    const renderListMovie = useCallback(() => {
        const { data } = props;

        if (data && data.length > 0) {
            return data.map((movie) => (
                <Movies key={movie.maPhim} movie={movie} />
            ));
        }
    }, [props]);

    if (props.loading) {
        return (
            <div className="flex justify-center items-center h-72">
                <Spinner className="w-12 h-12 text-primary-500" />
            </div>
        );
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-2 py-3">
                            Mã phim
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Tên phim
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Bí danh
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hình ảnh
                        </th>
                        <th scope="col" className="px-12 py-3">
                            Mô tả
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ngày khởi chiếu
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Đánh giá
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Options
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                    Đang chiếu
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Sắp chiếu
                    </th> */}
                    </tr>
                </thead>
                <tbody>{renderListMovie()}</tbody>
            </table>
        </div>
    );
}
