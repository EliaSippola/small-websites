import { useEffect, useState } from "react";

export default function News() {

    const [news, setNews] = useState(undefined);

    const fetchNews = async () => {
        const res = await fetch('http://localhost:4001/news/api', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            setNews(undefined);
            return;
        } else {
            const json = await res.json();
            setNews(json);
        }
    }

    const createNews = async () => {
        const res = await fetch('http://localhost:4001/news/api', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });
        if (res.ok) {
            setValues({title: '', text: ''});
            fetchNews();
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);

    const [values, setValues] = useState({title: '', text: ''});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createNews();
    }

    return (
        <div className="news-body">
            <div className="news-container">{news ? news.map((data) => {
                return(
                <div className="news-card" key={data.id}>
                    <h2>{data.title}</h2>
                    <hr />
                    <p>{data.text}</p>
                </div>
                )
            }) : <>No news!</>}</div>
            <div className="news-sidebar">
                <h2>Create new news</h2>
                <hr />
                <form onSubmit={handleSubmit} onReset={() => setValues({title: '', text: ''})}>
                    <input type="text" name="title" placeholder="title" value={values.title} onChange={handleChange} required/>
                    <textarea name="text" placeholder="text" value={values.text} onChange={handleChange} required></textarea>
                    <input type="submit" name="submit" value="Create" />
                    <input type="reset" name="reset" value="Reset" />
                </form>
            </div>
        </div>
    )

}