import { useEffect, useState } from "react";

export default function Donuts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setData(data.Donitsit))
        .catch(err => console.error('Error loading json data:', err));
    }, []);

    return (
        <div className='data'>
        <h1>Donuts</h1>
        {data.map(val => (
            <div key={val.id}>
            <h2>{val.nimi}</h2>
            <img src={val.img} alt={val.nimi} />
            <p>Const per one: {val.hinta}</p>
            <h3>Fillings:</h3>
            <ul>
                {val.taytteet.tayte.map(t => (
                <li key={t.id}>{t.type}</li>
                ))}
            </ul>
            <h3>Extra fillings:</h3>
            <ul>
                {val.lisatayte.map(t => (
                <li key={t.id}>{t.type}</li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    )

}