import React from "react";

const SpotlightVedio = ({ className }: { className?: string }) => {
    return (
        <video
            src={require("../../../../public/car-service-spotlight.mp4")}
            autoPlay
            muted
            loop
            className={className}
        />
    );
};

export default SpotlightVedio;
