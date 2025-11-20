import React, { useRef } from 'react'

function UncontrolledForm() {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", nameRef.current.value);
        console.log("Email: ", emailRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" ref={nameRef}/>
            <input type="email" placeholder="Email" ref={emailRef}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm