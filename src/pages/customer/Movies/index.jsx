import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchPaginationMovie } from "@/utils/redux/thunk/fetchMovies";
import LeftSideBar from "@/components/customer/LeftSideBar";
import MoviesGrid from "@/components/customer/MoviesGrid";

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
    switch (loaiPhim) {
        case "phimDangchieu":
            movies = movies.filter((movie) => movie.dangChieu);
            break;
        case "phimHot":
            movies = movies.filter((movie) => movie.hot);
            break;
        default:
            break;
    }

    useEffect(() => {
        dispatch(fetchPaginationMovie({ maNhom: "GP01", soTrang: page }));
    }, [page]);

    return (
        <div className="bg-zinc-800 flex flex-col md:flex-row px-2 py-4 md:py-10 md:px-6 md:max-w-screen-2xl 2xl:mx-auto">
            <LeftSideBar />
            {isLoading ? <div>Loading...</div> : <MoviesGrid movies={movies} />}
        </div>
    );
}
