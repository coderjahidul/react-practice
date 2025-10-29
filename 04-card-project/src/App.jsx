import React from 'react';
import Card from './components/Card';
import User from './components/User';
import data from './components/data.json';

const App = () => {
    return (
        <div className="parent">
            {data.map((item) => (
                <Card
                    key={item.id}
                    company={item.company}
                    logo={item.logo}
                    posted={item.posted}
                    title={item.title}
                    tags={item.tags}
                    salary={item.salary}
                    location={item.location}
                />
            ))}
        </div>
    );
}

export default App;