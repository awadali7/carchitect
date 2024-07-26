"use client";
import React from "react";
import "./css/about-us.css";
import Image from "next/image";
import Link from "next/link";
import "./css/about-us.css";
import SwiperSlider from "./_components/swiper-slider";

const AboutUs = () => {
    return (
        <section id="about-us" className="bg-[#FFFFFF] py-[90px]">
            <section className="wrapper flex justify-between items-center">
                <div className="w-[43%]">
                    <h3 className="text-2xl flex items-center mb-10  font-light text-[#000000] about-text">
                        Here{" "}
                        <span className="text-[#0A7169] ml-2"> About Us</span>
                    </h3>
                    <h2 className="text-4xl  text-[#000000] leading-[3rem] mb-10 font-medium mt-5">
                        Revitalize Your Ride Expert Care for Every Mile
                    </h2>

                    <p className="text-lg font-light mt-5 mb-20 text-[#7F7F7F]">
                        Expert automotive care that elevates your ride. Our
                        skilled technicians use advanced tools to diagnose,
                        repair, and enhance your vehicle's performance. From
                        routine checks to complex fixes, we ensure every
                        component works in harmony, transforming your daily
                        drive into a superior experience.
                    </p>
                    <Link href="/about-us" className="flex items-center">
                        <h5 className="text-xl font-light  text-[#0A7169]">
                            Know More
                        </h5>{" "}
                        <span className="block">
                            <Image
                                src={require("../../../public/images/icons/two-arrow.svg")}
                                alt="about-us"
                                width={30}
                                height={30}
                            />
                        </span>
                    </Link>
                </div>
                <div className="w-[48%]">
                    <SwiperSlider />
                </div>
            </section>
        </section>
    );
};

export default AboutUs;
