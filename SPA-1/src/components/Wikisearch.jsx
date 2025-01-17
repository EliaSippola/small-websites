import { useEffect, useState } from "react";

async function searchFromWiki(search) {

    const url = "http://localhost:4000/wikisearch/api/" + encodeURIComponent(search);

    const data = await fetch(url).catch((e) => {});
    if (data == undefined) {
        return {status: "noConnection"};
    }
    const parsed = await data.json();
    return parsed;

}

export default function Wikisearch() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {

        if (search.length < 1) {
            setData({status: ""});
            return;
        }

        searchFromWiki(search).then((data) => {
            if (data.status) {
                setData({status: data.status});
            } else if (data.query == null) {
                setData({status: ""});
            } else {
                setData({title: data.query.pages[0].title, text: data.query.pages[0].extract, status: "received"});
            }
        });

    }, [search]);

    const debounce = (cbFn, delay) => {

        let Id = null;
        return (...args) => {
            clearTimeout(Id);
            Id = setTimeout(() => {
                cbFn.apply(null, args);
            }, delay);
        }

    }

    const handleChange = debounce(e => {
        setSearch(e.target.value);
    }, 500);

    return (
        <>
            <input type="text" placeholder="Search" value={value} onChange={(e) => {handleChange(e); setValue(e.target.value)}} />
            {data.status == "received" ? (
                    <>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </>
                ) : data.status == "noConnection" ? (
                    <p>No connection to backend server (SRV-1). Start the server to use wiki!</p>
                ) : (
                    <p>Search to see data</p>
                )
            }
        </>
    )

}