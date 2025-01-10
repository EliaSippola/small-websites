import React, { useState } from "react";

// represents Luokka2.js component

const Funk2 = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="marg">
            <h1>Funktiopohjainen laskuri:</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Klikedi klik</button>
        </div>
    )
}

export default Funk2;