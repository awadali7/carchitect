"use client";

import Link from "next/link";
import React from "react";
import Logo from "@/../public/images/carchitect-logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="h-[120px] absolute w-full top-0 z-10  bg-transparent ">
            <section className="wrapper flex justify-between border-b border-[#3E3E3E] items-center h-full">
                <h1>
                    <Link href="/">
                        <Image height={100} width={100} src={Logo} alt="Logo" />
                    </Link>
                </h1>
                <nav>
                    <ul className="flex items-center">
                        <li
                            className={`mr-5  ${
                                pathname === "/"
                                    ? "text-white font-normal"
                                    : "text-[#A8A8A8] font-thin"
                            }`}
                        >
                            <Link href="/"> Home</Link>
                        </li>
                        <li
                            className={`mr-5  ${
                                pathname === "/about-us"
                                    ? "text-white font-normal"
                                    : "text-[#A8A8A8] font-thin"
                            }`}
                        >
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li
                            className={`mr-5  ${
                                pathname === "/services"
                                    ? "text-white font-normal"
                                    : "text-[#A8A8A8] font-thin"
                            }`}
                        >
                            <Link href="/services">Services</Link>
                        </li>
                        <li
                            className={`mr-5  ${
                                pathname === "/gallery"
                                    ? "text-white font-normal"
                                    : "text-[#A8A8A8] font-thin"
                            }`}
                        >
                            <Link href="/gallery">Gallery</Link>
                        </li>

                        <li
                            className={` ${
                                pathname === "/contact-us"
                                    ? "text-white font-normal"
                                    : "text-[#A8A8A8] font-thin"
                            }`}
                        >
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;
