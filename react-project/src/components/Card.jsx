function Card({user, age}) {
    return(
        <div className="card">
            <h1>{user}</h1>
            <h2>I am {age} years old</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eos.</p>
        </div>
    );
}

export default Card;