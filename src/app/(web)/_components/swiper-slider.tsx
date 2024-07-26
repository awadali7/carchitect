import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "../css/about-us.css";
import { Autoplay, EffectCreative } from "swiper/modules";
import Image from "next/image";

const SwiperSlider = () => {
    return (
        <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
                prev: {
                    shadow: true,
                    origin: "left center",
                    translate: ["-5%", 0, -200],
                    rotate: [0, 100, 0],
                },
                next: {
                    origin: "right center",
                    translate: ["5%", 0, -200],
                    rotate: [0, -100, 0],
                },
            }}
            modules={[EffectCreative, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="mySwiper6"
        >
            <SwiperSlide>
                <Image
                    src={require("../../../../public/images/car-wash.png")}
                    alt="about-us"
                    width={500}
                    height={500}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={require("../../../../public/images/car-polislishing.png")}
                    alt="about-us"
                    width={500}
                    height={500}
                />
            </SwiperSlide>{" "}
            <SwiperSlide>
                <Image
                    src={require("../../../../public/images/car-clealing.png")}
                    alt="about-us"
                    width={500}
                    height={500}
                />
            </SwiperSlide>{" "}
        </Swiper>
    );
};

export default SwiperSlider;
