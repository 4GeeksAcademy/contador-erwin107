import React, { useEffect, useState } from "react"; 
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container text-center mt-5">
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default Home;

