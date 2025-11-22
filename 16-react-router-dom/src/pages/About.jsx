import React from "react";

const About = () => {
    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white shadow-lg p-8 rounded-xl max-w-xl">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">
                    About Page
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed">This is the About page of your website. You can add your company details, mission, or personal profile here.</p>
            </div>
        </div>
    );
};

export default About;