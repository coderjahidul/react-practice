import React from 'react';
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="logo" />
            </div>
            <div className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;