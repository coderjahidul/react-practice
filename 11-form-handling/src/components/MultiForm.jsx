import React, { useState } from 'react'

function MultiForm() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        gender: "male"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">MultiForm</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username */}
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-gray-600 mb-1">Username</label>
                    <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-gray-600 mb-1">Password</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col">
                    <label htmlFor="gender" className="text-gray-600 mb-1">Gender</label>
                    <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
                </form>
            </div>
        </div>

    );
}

export default MultiForm