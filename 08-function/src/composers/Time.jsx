import React, {useEffect, useState } from "react";

const TimeDisplay = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer); // cleanup
    },[]);

    return <h2>Current Time: {time}</h2>
}

export default TimeDisplay