import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="grid grid-cols-2 items-center mb-6 bg-gray-100 p-4 rounded-xl shadow">
            <div className="text-2xl font-bold">Logo</div>

            <nav className="flex gap-6 justify-end">
            <Link className="text-blue-600 hover:text-blue-800" to="/">Home</Link>
            <Link className="text-blue-600 hover:text-blue-800" to="/about">About</Link>
            <Link className="text-blue-600 hover:text-blue-800" to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar