import { selectCinema } from "@/pages/customer/MovieDetail/reducer";
import { useDispatch } from "react-redux";

export default function CinemaSystemSelector({ cinemaList, selectedCinema }) {
    const dispatch = useDispatch();
    const cinemaListHtml = cinemaList.map((cinema) => {
        return (
            <li key={cinema.maCumRap} className="py-1">
                <button
                    className={`w-full py-2 px-1 bg-slate-50 text-primary-light text-sm font-bold md:hover:bg-slate-400 md:hover:transition md:duration-500 rounded-lg ${
                        selectedCinema && selectedCinema == cinema.maCumRap
                            ? "bg-slate-400 border-4 border-lime-500"
                            : ""
                    }`}
                    onClick={() => dispatch(selectCinema(cinema.maCumRap))}
                >
                    {cinema.tenCumRap}
                    <p className="block text-xs text-slate-600">
                        {cinema.diaChi}
                    </p>
                </button>
            </li>
        );
    });

    return (
        <>
            <h3 className="text-xl font-bold p-2 mt-4">Chọn rạp</h3>
            <div className="bg-primary-light mt-2 md:mt-0 rounded-lg px-4 py-2">
                <ul className="grid grid-cols-3 grid-rows-2 gap-2">
                    {cinemaListHtml}
                </ul>
            </div>
        </>
    );
}
