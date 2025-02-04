import { useEffect, useState } from "react";
import { Icon, IconButton } from '@mui/material';
import { Edit, Delete, Save, Cancel } from "@mui/icons-material";

export default function News() {

    const [news, setNews] = useState(undefined);
    const [current, setCurrent] = useState({id: 0, title: '', text: ''});

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

    const deleteNews = async (id) => {

        await fetch('http://localhost:4001/news/api/' + id , {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        // filter deleted record out
        setNews(news.filter((dt) => {
            return dt.id != id;
        }))
    }

    const editNews = async (data) => {

        await fetch('http://localhost:4001/news/api/' + data.id , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        await fetchNews();
        handleCancel();
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

    const handleSelect = (data) => {
        setCurrent({id: data.id, title: data.title, text: data.text});
    }

    const handleModifyChange = (e) => {
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        })
    }

    const handleCancel = () => {
        setCurrent({id: 0, title: '', text: ''});
    }

    return (
        <div className="news-body">
            <div className="news-container">{news ? news.map((data) => {
                return(
                    <div className="news-card" key={data.id}>
                        {current.id == data.id ? 
                        <form onSubmit={(e) => {e.preventDefault(); editNews(current);}}>
                            <div>
                                <input className='h2-like' type="text" value={current.title} onChange={(e) => handleModifyChange(e)} name="title" required />
                                {/* <input type="submit" value="save" /> */}
                                <IconButton type="submit" color="success"><Save /></IconButton>
                                {/* <button type="button" onClick={() => handleCancel()}>cancel</button> */}
                                <IconButton onClick={(e) => {e.preventDefault(); handleCancel();}} color="error"><Cancel /></IconButton>
                            </div>
                            <hr />
                            <textarea className='p-like' value={current.text} onChange={(e) => handleModifyChange(e)} name="text" required />
                        </form>
                        :
                        <>
                            <div>
                                <h2>{data.title}</h2>
                                {/* <button onClick={() => handleSelect(data)}>edit</button> */}
                                <IconButton onClick={() => handleSelect(data)} color="success"><Edit /></IconButton>
                                {/* <button onClick={() => deleteNews(data.id)}>delete</button> */}
                                <IconButton onClick={() => deleteNews(data.id)} color="error"><Delete /></IconButton>
                            </div>
                            <hr />
                            <p>{data.text}</p>
                        </>
                        }
                    <p className="news-card-dates">Created: {new Date(data.created_at).toLocaleString()} | Last updated: {new Date(data.updated_at).toLocaleString()}</p>
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