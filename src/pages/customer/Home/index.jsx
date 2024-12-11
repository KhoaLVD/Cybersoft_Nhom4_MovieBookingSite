import Banner from "@/components/customer/Banner";
import MoviesCarousel from "@/components/customer/MoviesCarousel";
import api from "@/utils/api/customerApi";
import { useEffect, useState } from "react";

export default function Home() {
    // Get movies showing
    const [movies, setMovies] = useState([]);
    const [showingMovies, setShowingMovies] = useState([]);
    const [hotMovies, setHotMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get("/QuanLyPhim/LayDanhSachPhim", {
                    params: {
                        maNhom: "GP01",
                    },
                });
                setMovies(response.data.content);
            } catch (error) {
                console.error("Failed to fetch movies showing: ", error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        if (movies) {
            setShowingMovies(movies.filter((movie) => movie.dangChieu));
            setHotMovies(movies.filter((movie) => movie.hot));
        }
    }, [movies]);

    return (
        <>
            {/* Banners */}
            <Banner />

            {/* Movies showing */}
            <MoviesCarousel
                label="Phim Đang Chiếu"
                wrapperClass="container mx-auto py-10 px-8 md:px-0"
                movies={showingMovies}
            />

            {/* Hot Movies */}
            <MoviesCarousel
                label="Phim Hot"
                wrapperClass="bg-gray-900 mx-auto py-10 px-8 md:px-28"
                movies={hotMovies}
            />
        </>
    );
}
