import React from 'react';
import data from '../data.json';
import CustomerCard from './CustomerCard';
const CustomerSegmentation = () => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
                        Target Audience
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Prospective customer segmentation
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl">
                        Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <CustomerCard
                            key={index}
                            number={item.number}
                            title={item.title}
                            description={item.description}
                            label={item.label}
                            color={item.color}
                            bgImage={item.bgImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomerSegmentation