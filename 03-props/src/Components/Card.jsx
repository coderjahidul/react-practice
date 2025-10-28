import React from 'react';

const Card = (props) => {
    return(
        <div className="card">
            <img
            src={props.image}
            alt={props.name}
            />
            <h1>{props.name}</h1>
            <p>{props.designation}</p>
            <p>{props.website}</p>
            <button>Follow</button>
        </div>
    );
}

export default Card;