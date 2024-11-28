import Banner from "../../../components/customer/Banner";
import MoviesCarousel from "../../../components/customer/MoviesCarousel";

export default function Home() {
    let moviesShowingCarousel = [
        {
            maPhim: 1283,
            tenPhim: "Lật mặt 48h",
            hinhAnh:
                "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg",
            ngayKhoiChieu: "2024-10-10T00:00:00",
        },
        {
            maPhim: 1318,
            tenPhim: "Lừa đểu gặp lừa đảo",
            hinhAnh:
                "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-daoo_gp01.jpg",
            ngayKhoiChieu: "2024-08-26T14:47:53.63",
        },
    ];

    return (
        <>
            {/* Banners */}
            <Banner />

            {/* Movies showing */}
            <MoviesCarousel
                label="Phim Đang Chiếu"
                wrapperClass="container mx-auto py-10 px-8 md:px-0"
                movies={moviesShowingCarousel}
            />

            {/* Hot Movies */}
            <MoviesCarousel
                label="Phim Hot"
                wrapperClass="bg-gray-900 mx-auto py-10 px-8 md:px-28"
                movies={moviesShowingCarousel}
            />
        </>
    );
}
