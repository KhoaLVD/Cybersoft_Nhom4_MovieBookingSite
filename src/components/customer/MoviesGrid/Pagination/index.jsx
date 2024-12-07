import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "@/utils/redux/thunk/fetchMovies";
import { pageSize } from "@/config/customer/movie/pagination";

export default function Pagination() {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get("p") ? parseInt(searchParams.get("p")) : 1;

    const handleNextOrPrev = (type) => {
        setSearchParams((prev) => {
            const currentPage = parseInt(prev.get("p"));
            if (type === "next") {
                prev.set("p", currentPage + 1);
            } else if (type === "prev") {
                prev.set("p", currentPage - 1);
            }
            return prev;
        });
    };

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.customerMoviesListPage.data);

    const total = movies.length;

    const items = Math.ceil(total / pageSize);

    let itemList = [];

    if (items) {
        for (let i = 1; i <= items; i++) {
            let itemHtml = (
                <button
                    key={i}
                    className="bg-secondary-dark text-white py-2 px-4 rounded-lg"
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
            itemList.push(itemHtml);
        }
    }

    useEffect(() => {
        dispatch(fetchMovies("GP03"));
    }, []);

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
