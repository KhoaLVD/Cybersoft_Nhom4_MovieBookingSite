import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "flowbite";
import { fetchMovieById } from "@/utils/redux/thunk/fetchMovieById";
import { fetchMovieShowTimes } from "@/utils/redux/thunk/fetchMovieShowtimes";
import { fetchMovies } from "@/utils/redux/thunk/fetchMovies";
import { clear } from "./reducer";
import CinemaSystemSelector from "@/components/customer/MovieDetail/CinemaSystemSelector";
import CinemaSelector from "@/components/customer/MovieDetail/CinemaSelector";
import WatchTimesSelector from "@/components/customer/MovieDetail/WatchTimesSelector";
import MoviesCarousel from "@/components/customer/MoviesCarousel";
import MovieTrailerModal from "@/components/customer/MovieTrailerModal";
import Spinner from "@/components/customer/Spinner";

export default function MovieDetail() {
    const dispatch = useDispatch();

    // Fetch movie by ID
    const response = useSelector((state) => state.customerMovieDetailPage);

    const movie = response.data;

    // Get movie ID from URL
    let { id } = useParams();

    useEffect(() => {
        dispatch(fetchMovieById(id));
        dispatch(fetchMovieShowTimes(id));
        dispatch(fetchMovies("GP01"));
        return () => {
            dispatch(clear());
        };
    }, [id]);

    const showTimesRes = useSelector(
        (state) => state.customerMovieDetailPageMoviewShowTimesReducer.data
    );

    let showTimesLoading = useSelector(
        (state) => state.customerMovieDetailPageMoviewShowTimesReducer.loading
    );

    const cinemaSystemList = showTimesRes ? showTimesRes.heThongRapChieu : [];

    const cinemaSystemSelected = useSelector(
        (state) =>
            state.customerMovieDetailPageMoviewShowTimesReducer
                .selectedCinemaSystem
    );

    let cinemaList = [];
    if (cinemaSystemSelected) {
        const cinemaListRes = cinemaSystemList.find((cinemaSystem) => {
            return cinemaSystem.maHeThongRap === cinemaSystemSelected;
        });
        cinemaList = cinemaListRes ? cinemaListRes.cumRapChieu : [];
    }

    const selectedCinema = useSelector(
        (state) =>
            state.customerMovieDetailPageMoviewShowTimesReducer.selectedCinema
    );

    let watchTimeList = [];
    if (cinemaSystemSelected && selectedCinema) {
        const watchTimeListRes = cinemaList.find((cinema) => {
            return cinema.maCumRap === selectedCinema;
        });
        watchTimeList = watchTimeListRes ? watchTimeListRes.lichChieuPhim : [];
    }

    const selectedWatchTime = useSelector(
        (state) =>
            state.customerMovieDetailPageMoviewShowTimesReducer
                .selectedWatchTime
    );

    const hotMoviesRes = useSelector(
        (state) => state.customerMoviesListPage.data
    );

    let hotMovieLoading = useSelector(
        (state) => state.customerMoviesListPage.loading
    );

    const hotMovies = hotMoviesRes.filter(
        (hotMovie) => hotMovie.hot && hotMovie.maPhim !== movie.maPhim
    );

    const [modalShowing, setModalShowing] = useState(false);

    const modalOptions = {
        onHide: () => {
            setModalShowing(false);
        },
        onShow: () => {
            setModalShowing(true);
        },
    };

    const instanceOptions = {
        id: "trailer-modal",
        override: true,
    };

    const $modalElement = document.querySelector("#trailer-modal");

    const trailerModal = new Modal(
        $modalElement,
        modalOptions,
        instanceOptions
    );

    return (
        <div className="md:py-16 lg:px-40">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:w-1/3 px-6 md:px-6">
                    <img
                        className="w-full rounded-lg"
                        src={movie.hinhAnh}
                        alt={movie.tenPhim}
                    />
                    <button
                        className="px-6 py-2 mt-7 inline-block font-bold text-xl md:text-2xl rounded-lg bg-accent"
                        onClick={() => trailerModal.show()}
                    >
                        Xem trailer
                    </button>
                </div>
                <div className="md:w-2/3 px-6">
                    <div className="xl:flex md:gap-4 mb-8">
                        <h2 className="mb-4 xl:mb-0 text-4xl font-bold">
                            {movie.tenPhim}
                        </h2>

                        {movie.hot ? (
                            <span className="mx-2 xl:mx-0 top-6 right-10 px-4 py-2 bg-accent text-primary-light font-semibold rounded-sm">
                                Hot
                            </span>
                        ) : null}

                        {movie.dangChieu ? (
                            <span className="mx-2 xl:mx-0 top-6 right-10 px-4 py-2 bg-lime-500 text-primary-light font-semibold rounded-sm">
                                Đang chiếu
                            </span>
                        ) : null}

                        {movie.sapChieu ? (
                            <span className="mx-2 xl:mx-0 top-6 right-10 px-4 py-2 bg-sky-500 text-primary-light font-semibold rounded-sm">
                                Sắp chiếu
                            </span>
                        ) : null}
                    </div>
                    <div>
                        <p className="py-1">
                            <span className="font-bold">Ngày công chiếu:</span>
                            <span>
                                {" " +
                                    new Date(
                                        movie.ngayKhoiChieu
                                    ).toLocaleDateString()}
                            </span>
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Đánh giá:</span>
                            <span> {movie.danhGia}/10</span>
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Nội dung:</span>
                            <span className="text-sm">
                                {movie.moTa && movie.moTa.length > 200
                                    ? " " + movie.moTa.slice(0, 200) + "..."
                                    : " " + movie.moTa}
                            </span>
                        </p>
                    </div>

                    {showTimesLoading ? (
                        <Spinner />
                    ) : (
                        <div className="mt-8">
                            {cinemaSystemList?.length ? (
                                <CinemaSystemSelector
                                    cinemaSystemList={cinemaSystemList}
                                    cinemaSystemSelected={cinemaSystemSelected}
                                />
                            ) : null}

                            {cinemaList?.length ? (
                                <CinemaSelector
                                    cinemaList={cinemaList}
                                    selectedCinema={selectedCinema}
                                />
                            ) : null}

                            {watchTimeList?.length ? (
                                <WatchTimesSelector
                                    watchTimeList={watchTimeList}
                                    selectedWatchTime={selectedWatchTime}
                                />
                            ) : null}
                        </div>
                    )}

                    <div className="flex justify-around md:justify-normal">
                        <Link
                            to={
                                selectedWatchTime
                                    ? `/booking/${selectedWatchTime}`
                                    : "#"
                            }
                            className={`px-6 py-2 mt-8 md:mr-4 inline-block font-bold text-xl md:text-2xl rounded-lg bg-secondary ${
                                selectedWatchTime
                                    ? ""
                                    : "bg-slate-400 cursor-not-allowed"
                            }`}
                        >
                            Đặt vé ngay
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                {/* Hot Movies */}
                {hotMovieLoading ? (
                    <Spinner />
                ) : (
                    <MoviesCarousel
                        label="Phim Hot"
                        wrapperClass="container mx-auto py-10 px-8 md:px-4 md:px-0"
                        movies={hotMovies}
                    />
                )}
            </div>

            {/* Trailer modal */}
            <MovieTrailerModal
                modalIntance={trailerModal}
                modalShowing={modalShowing}
                trailerSrc="https://www.youtube.com/watch?v=kBY2k3G6LsM"
            />
        </div>
    );
}
