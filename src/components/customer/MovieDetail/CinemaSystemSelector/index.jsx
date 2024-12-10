export default function CinemaSystemSelector({
    cinemaSystemList,
    selectedCinemaSystem,
    onClick,
}) {
    const cinemaSystemListHtml = cinemaSystemList.map((cinemaSystem) => {
        return (
            <li
                key={cinemaSystem.maHeThongRap}
                className="py-1 flex flex-col items-center"
            >
                <button onClick={() => onClick(cinemaSystem.maHeThongRap)}>
                    <img
                        className="w-10"
                        src={cinemaSystem.logo}
                        alt={cinemaSystem.tenHeThongRap}
                    />
                </button>
                {selectedCinemaSystem &&
                selectedCinemaSystem == cinemaSystem.maHeThongRap ? (
                    <i className="fa-solid fa-caret-up"></i>
                ) : null}
            </li>
        );
    });

    return (
        <>
            <h3 className="text-xl font-bold p-2">Chọn hệ thống rạp</h3>
            <div className="bg-primary-light rounded-lg p-4">
                <ul className="flex gap-6">{cinemaSystemListHtml}</ul>
            </div>
        </>
    );
}
