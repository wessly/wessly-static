import React from "react";
import { Link } from "react-router-dom";

import mathImage from "../img/geometry-1044090_1920.jpg";
import itImage from "../img/monitor-1307227_1920.jpg";

const Home = () => {

    const cards = [
        {
            title: "Математика",
            content: null,
            image: mathImage,
            path: "/math",
        },
        {
            title: "Информационни технологии",
            content: null,
            image: itImage,
            path: "/tech",
        },
    ];

    return (
        <div className="home">
            <div className="row container content">
                {cards.map((card, id) => {
                    return (
                        <Link to={card.path} key={id}>
                            <div className="col s12 m6">
                                <div className="card hoverable">
                                    <div className="card-image">
                                        <img
                                            src={card.image}
                                            alt="math-background"
                                        />
                                        <span className="card-title custom-card-title">
                                            {card.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Home
