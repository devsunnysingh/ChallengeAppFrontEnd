import { useState } from "react";

function Greeting({ name, initialMessage }) {
    const [message, setMessage] = useState(initialMessage);

    return (
        <div>
            <h2>Hello, {name}</h2>
            <p>{message}</p>
            <button onClick={() => {
                setMessage("goodbye");
            }}>
                Change Message
            </button>
        </div>
    );
}

export default Greeting;
