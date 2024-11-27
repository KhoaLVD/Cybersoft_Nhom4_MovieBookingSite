import MovieCard from "./MovieCard";

export default function MoviesCarousel({ label, wrapperClass, movies }) {
    const moviesList = movies.map((movie) => {
        return <MovieCard key={movie.maPhim} movie={movie} />;
    });

    return (
        <section className={wrapperClass}>
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
                {label}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6">
                {moviesList}
            </div>
        </section>
    );
}
