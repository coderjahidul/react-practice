
import React, { useRef } from "react";
const FocusInput = () => {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}

export default FocusInput