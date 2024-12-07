import { useSearchParams } from "react-router-dom";

export default function LeftSideBar() {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentLoaiPhim = searchParams.get("loaiPhim")
        ? searchParams.get("loaiPhim")
        : "all";

    return (
        <aside className="md:flex-[0.2] py-6 px-2 md:px-10 md:mx-auto md:shadow-[0_35px_60px_10px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-center py-6 px-2">
                Danh sách phim
            </h2>

            <nav className="flex flex-col items-center">
                <select
                    className="text-gray-800"
                    defaultValue={currentLoaiPhim}
                    onChange={(e) => {
                        setSearchParams((prev) => {
                            prev.set("loaiPhim", e.target.value);
                            return prev;
                        });
                    }}
                >
                    <option value="all">Chọn loại phim</option>
                    <option value="phimDangchieu">Phim đang chiếu</option>
                    <option value="phimHot">Phim hot</option>
                </select>
            </nav>
        </aside>
    );
}
