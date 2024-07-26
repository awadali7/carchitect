import Image from "next/image";
import React from "react";

const CircularText = () => {
    return (
        <span className="scroll-down-box">
            <span className="scroll-down-box-image-div">
                <span className="scroll-down-box-image"></span>
                <span className="mouse">
                    <Image
                        className="mouse-icon"
                        src="https://arwa-public-assets-bucket.s3.ap-south-1.amazonaws.com/website/mouse.svg"
                        alt="Mouse"
                        width={100}
                        height={100}
                    />
                    <Image
                        className="hidden hand-icon"
                        src="https://arwa-public-assets-bucket.s3.ap-south-1.amazonaws.com/website/arrow-circle.svg"
                        alt="Mouse"
                        width={100}
                        height={100}
                    />
                </span>
            </span>
        </span>
    );
};

export default CircularText;
