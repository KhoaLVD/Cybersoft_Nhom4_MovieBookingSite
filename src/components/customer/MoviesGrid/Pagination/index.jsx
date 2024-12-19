import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback } from "react";
import { fetchMovies } from "@/utils/redux/thunk/fetchMovies";
import { pageSize } from "@/config/customer/movie/pagination";

// eslint-disable-next-line react/prop-types
export default function Pagination({ moviesFiltered }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    const page = searchParams.get("p") ? parseInt(searchParams.get("p")) : 1;

    const handleNextOrPrev = useCallback(
        (type) => {
            setSearchParams((prev) => {
                const currentPage = parseInt(prev.get("p") ? prev.get("p") : 1);
                if (type === "next") {
                    prev.set("p", currentPage + 1);
                } else if (type === "prev") {
                    prev.set("p", currentPage - 1);
                }
                return prev;
            });
        },
        [setSearchParams]
    );

    const needFetchAllFlag = useMemo(() => {
        return (
            !searchParams.size ||
            searchParams.get("loaiPhim") === "all" ||
            !searchParams.get("loaiPhim") ||
            (!searchParams.get("loaiPhim") && page === 1)
        );
    }, [searchParams, page]);

    const movies = useSelector((state) => {
        if (needFetchAllFlag) {
            return state.customerMoviesListPage.data;
        }
        return moviesFiltered;
    });

    useEffect(() => {
        if (needFetchAllFlag) {
            dispatch(fetchMovies("GP01"));
        }
    }, [dispatch, needFetchAllFlag]);

    const total = movies.length;
    const items = Math.ceil(total / pageSize);

    const itemList = useMemo(() => {
        let list = [];
        for (let i = 1; i <= items; i++) {
            list.push(
                <button
                    key={i}
                    className={`text-white py-2 px-4 rounded-lg ${
                        page === i ? "bg-secondary" : "bg-secondary-dark"
                    }`}
                    onClick={() => {
                        setSearchParams((prev) => {
                            prev.set("p", i);
                            return prev;
                        });
                    }}
                >
                    {i}
                </button>
            );
        }
        return list;
    }, [items, page, setSearchParams]);

    return (
        <div>
            <nav className="flex justify-center items-center gap-4 mt-6">
                {page > 1 ? (
                    <button
                        className="bg-secondary-dark text-white py-2 px-4 rounded-lg"
                        onClick={() => handleNextOrPrev("prev")}
                    >
                        {"<"}
                    </button>
                ) : null}

                {itemList ? itemList : null}
                {page < items ? (
                    <button
                        className="bg-secondary-dark text-white py-2 px-4 rounded-lg"
                        onClick={() => handleNextOrPrev("next")}
                    >
                        {">"}
                    </button>
                ) : null}
            </nav>
        </div>
    );
}
