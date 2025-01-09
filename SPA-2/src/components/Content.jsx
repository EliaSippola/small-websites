import { useState } from "react";

const Content = () => {

    const [amount, setAmount] = useState(0);

    return(
        <div className="content">
            <button onClick={() => setAmount(amount + 1)}>Times clicked: {amount}</button>
        </div>
    )
}

export default Content;