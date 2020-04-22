import React from 'react'
import { Link } from 'react-router-dom'

import nineImage from '../img/9.jpg'
import tenImage from '../img/10.jpg'

const TechPage = () => {   
    const cards = [
        {
            title: 'Уроци по информационни технологии за 9 клас',
            content: null,
            image: nineImage,
            path: '/tech/level/9'
        },
        {
            title: 'Уроци по информационни технологии за 10 клас',
            content: null,
            image: tenImage,
            path: '/tech/level/10'
        }
    ]

    return (
        <div className="container">
            <h1>Информационни технологии</h1>
            <div className="row">
                {cards.map((card, id) => {
                    return (
                        <div className="col s12 m6" key={id}>
                            <h4 className="header">{card.title}</h4>
                            <div className="card horizontal small">
                                <div className="card-image">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>Последно качени уроци:</p>
                                        <ul>
                                            <li>1</li>
                                        </ul>
                                    </div>
                                    <div className="card-action">
                                        <Link to={card.path}>Отвори</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TechPage
