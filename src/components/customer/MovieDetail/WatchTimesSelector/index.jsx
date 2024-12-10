export default function WatchTimesSelector({
    watchTimeList,
    selectedWatchTime,
    onClick,
}) {
    const watchTimeListHtml = watchTimeList.map((watchTime) => {
        return (
            <li key={watchTime.maLichChieu} className="py-1">
                <button
                    className={`w-full bg-slate-50 md:hover:bg-slate-400 md:hover:transition md:duration-500 text-primary-light text-xs font-bold rounded-lg py-2 ${
                        selectedWatchTime &&
                        selectedWatchTime == watchTime.maLichChieu
                            ? "bg-slate-400 border-4 border-lime-500"
                            : ""
                    }`}
                    onClick={() => onClick(watchTime.maLichChieu)}
                >
                    {new Date(watchTime.ngayChieuGioChieu).toLocaleString()}
                </button>
            </li>
        );
    });

    return (
        <>
            <h3 className="text-xl font-bold p-2 mt-4">Chọn giờ xem</h3>
            <div className="bg-primary-light mt-2 md:mt-0 rounded-lg px-4 py-2">
                <ul className="grid grid-cols-3 md:grid-cols-6 grid-rows-3 gap-2">
                    {watchTimeListHtml}
                </ul>
            </div>
        </>
    );
}
