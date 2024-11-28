import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MoviesCarousel({ label, wrapperClass, movies }) {
    let slickSetting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const moviesList = movies.map((movie) => {
        return <MovieCard key={movie.maPhim} movie={movie} />;
    });

    return (
        <section className={wrapperClass}>
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
                {label}
            </h2>
            <Slider {...slickSetting}>{moviesList}</Slider>
        </section>
    );
}
