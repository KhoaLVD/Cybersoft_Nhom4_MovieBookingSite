import { useParams, Link } from "react-router-dom";

export default function Booking() {
    return (
        <div className="md:py-16 lg:px-40">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:w-1/3 px-6 md:px-6">
                    <img
                        className="w-full rounded-lg"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt="Lat Mat 48H"
                    />
                </div>
                <div className="md:w-2/3 px-6">
                    <div className="xl:flex md:gap-8 mb-4">
                        <h2 className="mb-4 xl:mb-0 text-4xl font-bold">
                            Lat Mat 48H
                        </h2>
                    </div>
                    <div>
                        <p className="py-1">
                            <span className="font-bold">Ngày xem:</span>
                            <span> 28/09/2024</span>
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Giờ bắt đầu:</span>
                            <span> 12:09</span>
                        </p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-bold p-2">Chọn ghế</h3>
                        <div className="bg-primary-light rounded-lg p-2">
                            <div className="bg-accent text-center">
                                <p className="text-xl font-bold text-slate-900 mb-4">
                                    Màn hình
                                </p>
                            </div>
                            <ul className="grid grid-rows-16 grid-cols-10 lg:grid-rows-10 lg:grid-cols-16 gap-1">
                                <li className="py-1 flex justify-center">
                                    <button className="relative">
                                        <i className="fa-solid fa-couch"></i>
                                        <i className="fa-solid fa-x fa-xl absolute left-[1px] top-[10px] text-red-500"></i>
                                    </button>
                                </li>
                                <li className="py-1 flex justify-center">
                                    <button className="relative">
                                        <i className="fa-solid fa-couch"></i>
                                    </button>
                                </li>
                                <li className="py-1 flex justify-center">
                                    <button className="relative">
                                        <i className="fa-solid fa-couch"></i>
                                    </button>
                                </li>
                                <li className="py-1 flex justify-center">
                                    <button className="relative">
                                        <i className="fa-solid fa-couch"></i>
                                    </button>
                                </li>
                                <li className="py-1 flex justify-center">
                                    <button className="relative">
                                        <i className="fa-solid fa-couch"></i>
                                        <i className="fa-solid fa-x fa-xl absolute left-[1px] top-[10px] text-red-500"></i>
                                    </button>
                                </li>
                                <li className="py-1 flex justify-center">
                                    <button className="relative">
                                        <i className="fa-solid fa-couch"></i>
                                    </button>
                                </li>
                                <li className="py-1 flex justify-center">
                                    <button className="relative">
                                        <i className="fa-solid fa-couch"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-around md:justify-normal">
                        <Link
                            to={`/booking/123`}
                            className="px-6 py-2 my-8 md:mr-4 inline-block font-bold text-xl md:text-2xl rounded-lg bg-secondary"
                        >
                            Xác nhận
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
