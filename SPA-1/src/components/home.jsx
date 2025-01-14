import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div>
            <h2>Home page</h2>
            <p>This is a home page, duh!</p>
            <div className="photos-flex">
                <img src="./kuva1.jpg" alt="pg1" draggable={false} />
                <img src="./kuva2.jpg" alt="pg2" draggable={false} />
                <img src="./kuva3.jpg" alt="pg3" draggable={false} />
            </div>

            <br />

            <FontAwesomeIcon icon="fa-solid fa-user" />

        </div>
    )
};