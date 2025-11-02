import React from 'react';

const CustomerCard = (props) => {
    const colorClasses = {
        blue: "bg-blue-500 hover:bg-blue-600",
        purple: "bg-purple-500 hover:bg-purple-600",
        green: "bg-green-500 hover:bg-green-600",
    };
    return (
        <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        style={{
            backgroundImage: `url(${props.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
        <div className="p-6 flex-1">
            <div className="text-sm font-semibold text-gray-500 mb-2">{props.number}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{props.title}</h3>
            <p className="text-gray-600 text-sm">{props.description}</p>
        </div>
        <div className={`p-4 text-white text-center font-medium ${colorClasses[props.color]} rounded-b-2xl cursor-pointer transition-colors`}>
            {props.label} →
        </div>
        </div>
    );
}

export default CustomerCard;