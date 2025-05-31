import React from "react";

const SecondsCounter = (props) => {
    const seconds = props.seconds;

    return (
        <div className="big-counter d-flex justify-content-center align-items-center bg-dark text-white fs-1 p-3">
            <i className="far fa-clock me-3"></i>
            {String(seconds).padStart(6, '0').split('').map((digit, index) => (
                <div key={index} className="digit-box mx-1">
                    {digit}
                </div>
            ))}
        </div>
    );
};

export default SecondsCounter;
