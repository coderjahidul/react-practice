import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default Counter