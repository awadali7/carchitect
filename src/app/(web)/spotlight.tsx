import React from "react";
import Image from "next/image";
import CircularText from "./_components/circular-text";
import SpotlightVedio from "./_components/spotlight-vedio";
import "./css/spotlight.css";

const Spotlight = () => {
    return (
        <section>
            <section className="relative h-screen">
                <section className="wrapper h-full w-full flex  items-center">
                    <div className="absolute z-10  w-[65%] pl-24">
                        <h5 className="text-sm font-light mb-5 text-[#fff]">
                            CARCHITECT
                        </h5>
                        <h2 className="text-6xl font-light leading-[5rem] text-[#fff] mb-10">
                            Discover{" "}
                            <span className="text-[#13CBBD]">
                                Premier Car Service
                            </span>{" "}
                            Excellence
                        </h2>
                        <p
                            className={`text-lg flex items-center text-[#fff] font-light spotlightText `}
                        >
                            Where Every Mile Counts.
                        </p>
                    </div>

                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <SpotlightVedio className="absolute inset-0 z-[-1] h-full w-full object-cover" />
                </section>
            </section>

            <div className="absolute bottom-0 w-full">
                <CircularText />
            </div>
        </section>
    );
};

export default Spotlight;
