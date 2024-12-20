import api from "@/utils/api/customerApi";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Banner() {
    const [banners, setBanner] = useState([]);

    useEffect(() => {
        try {
            api.get("/QuanLyPhim/LayDanhSachBanner").then((response) => {
                setBanner(response.data.content);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const settings = useMemo(() => {
        return {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
    }, []);

    const getBannerList = useMemo(() => {
        return banners.map((banner) => (
            <div key={banner.maBanner}>
                <Link to={`/movie/${banner.maPhim}`}>
                    <img src={banner.hinhAnh} alt="..." />
                </Link>
            </div>
        ));
    }, [banners]);

    return (
        <section
            className="relative w-full md:max-w-screen-2xl md:mx-auto"
            data-carousel="static"
        >
            <div>
                {getBannerList && (
                    <Slider {...settings}>{getBannerList}</Slider>
                )}
            </div>
        </section>
    );
}
