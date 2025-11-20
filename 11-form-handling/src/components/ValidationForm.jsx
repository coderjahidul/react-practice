import React, { useState } from 'react'

function ValidationForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Please enter a valid email address");
        } else {
            setError("");
            alert("Form submitted successfully!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            {error && <p style={{ color: "red"}}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}

export default ValidationForm