import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "flowbite";
import { fetchMovieById } from "@/utils/redux/thunk/fetchMovieById";
import { fetchMovieShowTimes } from "@/utils/redux/thunk/fetchMovieShowtimes";
import { fetchMovies } from "@/utils/redux/thunk/fetchMovies";
import CinemaSystemSelector from "@/components/customer/MovieDetail/CinemaSystemSelector";
import CinemaSelector from "@/components/customer/MovieDetail/CinemaSelector";
import WatchTimesSelector from "@/components/customer/MovieDetail/WatchTimesSelector";
import MoviesCarousel from "@/components/customer/MoviesCarousel";
import MovieTrailerModal from "@/components/customer/MovieTrailerModal";
import Spinner from "@/components/customer/Spinner";

export default function MovieDetail() {
    const dispatch = useDispatch();

    const movie = useSelector((state) => state.customerMovieDetailPage.data);

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchMovieById(id));
        dispatch(fetchMovieShowTimes(id));
        dispatch(fetchMovies("GP01"));
    }, [dispatch, id]);

    const showTimesRes = useSelector(
        (state) => state.customerMovieDetailPageMoviewShowTimesReducer.data
    );

    const showTimesLoading = useSelector(
        (state) => state.customerMovieDetailPageMoviewShowTimesReducer.loading
    );

    const cinemaSystemList = useMemo(
        () => (showTimesRes ? showTimesRes.heThongRapChieu : []),
        [showTimesRes]
    );
    const [cinemaList, setCinemaList] = useState([]);
    const [watchTimes, setWatchTimes] = useState([]);
    const [selectedCinemaSystem, setSelectedCinemaSystem] = useState(null);
    const [selectedCinema, setSelectedCinema] = useState(null);
    const [selectedWatchTime, setSelectedWatchTime] = useState(null);

    const handleCinemaSystemChange = useCallback(
        (cinemaSystem) => {
            const selectedCinemaSystemFinded = cinemaSystemList.find(
                (system) => system.maHeThongRap === cinemaSystem
            );
            setSelectedCinemaSystem(selectedCinemaSystemFinded?.maHeThongRap);
            setCinemaList(selectedCinemaSystemFinded?.cumRapChieu || []);
            setWatchTimes([]);
        },
        [cinemaSystemList]
    );

    const handleCinemaChange = useCallback(
        (cinema) => {
            const selectedCinemaFinded = cinemaList.find(
                (cin) => cin.maCumRap === cinema
            );
            setSelectedCinema(selectedCinemaFinded?.maCumRap);
            setWatchTimes(selectedCinemaFinded?.lichChieuPhim || []);
        },
        [cinemaList]
    );

    const handleWatchTimeChange = useCallback(
        (watchTime) => {
            const selectedWatchTimeFinded = watchTimes.find(
                (time) => time.maLichChieu === watchTime
            );
            setSelectedWatchTime(selectedWatchTimeFinded?.maLichChieu);
        },
        [watchTimes]
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

    const modalElement = document.querySelector("#trailer-modal");

    const trailerModal = useMemo(() => {
        const modalOptions = {
            onHide: () => {
                setModalShowing(false);
            },
            onShow: () => {
                setModalShowing(true);
            },
        };

        return new Modal(modalElement, modalOptions, {
            id: "trailer-modal",
            override: true,
        });
    }, [modalElement]);

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
                <div className="mt-8 md:mt-0 md:w-2/3 px-6">
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
                                    selectedCinemaSystem={selectedCinemaSystem}
                                    onClick={handleCinemaSystemChange}
                                />
                            ) : null}

                            {cinemaList?.length ? (
                                <CinemaSelector
                                    cinemaList={cinemaList}
                                    selectedCinema={selectedCinema}
                                    onClick={handleCinemaChange}
                                />
                            ) : null}

                            {watchTimes?.length ? (
                                <WatchTimesSelector
                                    watchTimeList={watchTimes}
                                    selectedWatchTime={selectedWatchTime}
                                    onClick={handleWatchTimeChange}
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
            <div className="mt-8">
                {/* Hot Movies */}
                {hotMovieLoading ? (
                    <Spinner />
                ) : (
                    <MoviesCarousel
                        label="Phim Hot"
                        wrapperClass="container mx-auto py-10 px-8 md:px-8"
                        movies={hotMovies}
                    />
                )}
            </div>

            {/* Trailer modal */}
            {movie.trailer ? (
                <MovieTrailerModal
                    modalIntance={trailerModal}
                    modalShowing={modalShowing}
                    trailerSrc={movie.trailer}
                />
            ) : null}
        </div>
    );
}
