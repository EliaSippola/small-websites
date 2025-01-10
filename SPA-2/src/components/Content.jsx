import { useState } from "react";
import Counter from "./Counter";

const Content = () => {

    const [amount, setAmount] = useState(0);

    return(
        <div className="content">
            <button onClick={() => setAmount(amount + 1)}>Times clicked: {amount}</button>
            <Counter />
            <Counter />
        </div>
    )
}

export default Content;