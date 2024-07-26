import React from "react";
import BgImage1 from "../../../public/images/auto-dealing.png";
import BgImage2 from "../../../public/images/car-polishing.png";
import BgImage3 from "../../../public/images/car-vacuuming.png";

import "./css/service.css";

const services = [
    {
        title: "Auto Dealing",
        description:
            "Efficient, seamless automotive transactions designed for a hassle-free experience. Embrace innovation and elevate your auto dealing journey with us.",
        bgImage: BgImage1.src,
        stats: [
            { value: "+200", label: "Satisfied clients" },
            { value: "+300", label: "Total Works" },
            { value: "+03", label: "Experience" },
        ],
    },
    {
        title: "Vehicle Interior Vacuuming",
        description:
            "Thorough interior vacuuming to ensure your vehicle's interior is spotless. We remove dirt, dust, and debris, leaving your car clean and fresh.",
        bgImage: BgImage3.src,
        stats: [
            { value: "+100", label: "Satisfied clients" },
            { value: "+50", label: "Total Works" },
            { value: "+02", label: "Experience" },
        ],
    },
    {
        title: "Car Polishing",
        description:
            "Premium car polishing services to restore your vehicle's shine and protect the paint. Experience the brilliance of a well-maintained car.",
        bgImage: BgImage2.src,
        stats: [
            { value: "+150", label: "Satisfied clients" },
            { value: "+75", label: "Total Works" },
            { value: "+05", label: "Experience" },
        ],
    },
];

const OurServices = () => {
    return (
        <section id="service">
            <div className="absolute w-full">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="sticky top-0 h-screen pt-[120px] flex flex-col items-center bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${service.bgImage})` }}
                    >
                        <div className="wrapper">
                            {index === 0 && (
                                <h4 className="text-3xl font-light text-[#ffffff] w-full justify-center  flex items-center service-text">
                                    Our{" "}
                                    <span className="text-[#0A7169] ml-2">
                                        Services
                                    </span>
                                </h4>
                            )}

                            <div className="w-[68%] mt-[200px]">
                                <h3 className="font-medium text-[#ffffff] mb-10 tracking-wider text-5xl uppercase">
                                    {service.title}
                                </h3>
                                <p className="text-[#ffffff] text-lg font-light w-[88%] mb-20">
                                    {service.description}
                                </p>
                                <div className="flex justify-between text-[#ffffff] w-[60%]">
                                    {service.stats.map((stat, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-tran p-5 flex flex-col"
                                        >
                                            <small className="text-2xl mb-2">
                                                {stat.value}
                                            </small>
                                            <span className="font-light">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
