import React from "react";
import { BsClock } from "react-icons/bs";

const SecondsCounter = ({ seconds }) => {
    
    const formatted = seconds.toString().padStart(6, '0').split('');

    return (
        <div className="big-counter d-flex justify-content-center align-items-center gap-2 fs-1">
            <div><BsClock /></div>
            {formatted.map((digit, index) => (
                <div key={index} className="digit-box">{digit}</div>
            ))}
        </div>
    );
};

export default SecondsCounter;
