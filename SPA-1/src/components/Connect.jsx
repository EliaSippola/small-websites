import { useState } from "react"

export default function Connect() {

    const [data, setData] = useState({name: '', phone: '', text: ''});

    const handlechange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="connect-form">
            <h2>Send message</h2>
            <form onSubmit={(e) => e.preventDefault()} onReset={() => setData({name: '', phone: '', text: ''})}>
                <input type="text" value={data.name} placeholder="Name" name="name" onChange={handlechange} />
                <input type="text" value={data.phone} placeholder="Phone" name="phone" onChange={handlechange} />
                <textarea value={data.text} placeholder="Message" name="text" onChange={handlechange} rows={3} />
                <div>
                    <input type="submit" value="Send" />
                    <input type="reset" value="Reset" />
                </div>
            </form>
        </div>
    )
};