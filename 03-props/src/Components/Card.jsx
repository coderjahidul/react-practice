import React from 'react';

const Card = ({name, designation, website, image}) => {
    return(
        <div className="card">
            <img
            src={image}
            alt={name}
            />
            <h1>{name}</h1>
            <p>{designation}</p>
            <p>{website}</p>
            <button>Follow</button>
        </div>
    );
}

export default Card;