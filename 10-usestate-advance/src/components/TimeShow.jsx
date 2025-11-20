import React, { useEffect, useState } from "react";

const TimeShow = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <h2>Current Time: {time}</h2>
};

export default TimeShow