import { selectCinemaSystem } from "@/pages/customer/MovieDetail/reducer";
import { useDispatch } from "react-redux";

export default function CinemaSystemSelector({
    cinemaSystemList,
    cinemaSystemSelected,
}) {
    const dispatch = useDispatch();

    const cinemaSystemListHtml = cinemaSystemList.map((cinemaSystem) => {
        return (
            <li
                key={cinemaSystem.maHeThongRap}
                className="py-1 flex flex-col items-center"
            >
                <button
                    onClick={() =>
                        dispatch(selectCinemaSystem(cinemaSystem.maHeThongRap))
                    }
                >
                    <img
                        className="w-10"
                        src={cinemaSystem.logo}
                        alt={cinemaSystem.tenHeThongRap}
                    />
                </button>
                {cinemaSystemSelected &&
                cinemaSystemSelected == cinemaSystem.maHeThongRap ? (
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
