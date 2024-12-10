import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import { pageSize } from "@/config/customer/movie/pagination";
import { useMemo } from "react";

export default function MoviesGrid({ movies }) {
    const [searchParams] = useSearchParams();

    const isShowPagination = useMemo(() => {
        if (searchParams.get("p") === 1) {
            return movies.length >= pageSize;
        }
        return movies.length > 0;
    }, [searchParams, movies]);

    const moviesList = useMemo(() => {
        return movies.map((movie) => (
            <div
                key={movie.maPhim}
                className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            >
                <div className="relative h-full">
                    <img
                        className="rounded-t-lg h-full"
                        src={movie.hinhAnh}
                        alt={movie.tenPhim || "Movie Image"}
                    />
                    {movie.hot && (
                        <span className="absolute mx-2 xl:mx-0 top-2 right-2 px-1 py-1 bg-accent text-primary-light text-sm font-semibold rounded-lg">
                            Hot
                        </span>
                    )}
                    {movie.dangChieu && (
                        <span className="absolute mx-2 xl:mx-0 top-2 right-12 px-2 py-1 bg-lime-500 text-primary-light text-sm font-semibold rounded-lg">
                            Đang chiếu
                        </span>
                    )}
                </div>
                <Link
                    to={`/movie/${movie.maPhim}`}
                    className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                >
                    Xem chi tiết
                </Link>
            </div>
        ));
    }, [movies]);

    return (
        <section className="flex-[0.7] px-4 md:mx-auto">
            {moviesList.length ? (
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-5 gap-x-6 gap-y-4 md:gap-6">
                    {moviesList}
                </div>
            ) : (
                <p>Không tìm thấy bộ phim nào!</p>
            )}
            {isShowPagination ? <Pagination moviesFiltered={movies} /> : ""}
        </section>
    );
}
