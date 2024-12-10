import api from "@/utils/api/customerApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Banner() {
    let [banners, setBanner] = useState([]);

    useEffect(() => {
        try {
            api.get("/QuanLyPhim/LayDanhSachBanner").then((response) => {
                setBanner(response.data.content);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    let getBannerList = banners.map((banner) => (
        <div key={banner.maBanner}>
            <Link to={`/movie/${banner.maPhim}`}>
                <img src={banner.hinhAnh} alt="..." />
            </Link>
        </div>
    ));

    return (
        <section
            className="relative w-full md:max-w-screen-2xl md:mx-auto"
            data-carousel="static"
        >
            <div>
                <Slider {...settings}>{getBannerList}</Slider>
            </div>
        </section>
    );
}
