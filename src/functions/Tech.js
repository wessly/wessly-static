import React, { useState, useEffect } from "react";

function Tech() {
    const [lessons, setLessions] = useState([]);

    useEffect(() => {
        fetch("https://hn.algolia.com/api/v1/search?query=redux")
            .then((response) => response.json())
            .then((res) => {
                setLessions(res.hits);
            });
    }, []);

    return (
        <div>
            <h3>It's tech!</h3>
            <ul>
                {lessons.length > 0 &&
                    lessons.map((item) => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Tech;
