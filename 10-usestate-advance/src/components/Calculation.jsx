import React, { useMemo, useState } from "react";

const Calculation = () => {
    const [count, setCount] = useState(0);

    const expensive = useMemo(() => {
        console.log('Calculating...');
        return count * 2;
    }, [count]);

    return (
        <div>
            <h3>Result: {expensive}</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={() => setCount(count + 1)}>➕ Increase</button>
        </div>
    );
}

export default Calculation;