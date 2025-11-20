import React, { useState } from 'react'

function FormExample(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", name, "Email: ", email);
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4 mt-10"
        >
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
                Contact Form
            </h2>

            <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-600 mb-1">
                Full Name:
                </label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600 mb-1">
                Email Address:
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Submit
            </button>
        </form>

    );
}

export default FormExample