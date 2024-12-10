import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchPaginationMovie } from "@/utils/redux/thunk/fetchMovies";
import LeftSideBar from "@/components/customer/LeftSideBar";
import MoviesGrid from "@/components/customer/MoviesGrid";
import Spinner from "@/components/customer/Spinner";

export default function Movies() {
    const dispatch = useDispatch();
    const response = useSelector(
        (state) => state.customerMoviesListPageByPagination
    );
    const isLoading = response?.loading;
    let movies = response?.data.items || [];
    const [searchParams] = useSearchParams();
    const page = searchParams.get("p") ? parseInt(searchParams.get("p")) : 1;
    const loaiPhim = searchParams.get("loaiPhim");

    const filterMovies = useCallback(() => {
        switch (loaiPhim) {
            case "phimDangchieu":
                return movies.filter((movie) => movie.dangChieu);
            case "phimHot":
                return movies.filter((movie) => movie.hot);
            default:
                return movies;
        }
    }, [loaiPhim, movies]);

    useEffect(() => {
        dispatch(fetchPaginationMovie({ maNhom: "GP01", soTrang: page }));
    }, [dispatch, page]);

    return (
        <div className="bg-zinc-800 flex flex-col md:flex-row px-2 py-4 md:py-10 md:px-6 md:max-w-screen-2xl 2xl:mx-auto">
            <LeftSideBar loaiPhim={loaiPhim} />
            {isLoading ? <Spinner /> : <MoviesGrid movies={filterMovies()} />}
        </div>
    );
}
