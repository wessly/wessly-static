import React from 'react'
import { Link } from 'react-router-dom'

import nineImage from '../img/9.jpg'
import tenImage from '../img/10.jpg'

<<<<<<< HEAD:src/pages/MathPage.js
const MathPage = () => {   
=======
export default function Math() {
>>>>>>> 9a9b9cf6a0da4964da1308fef05993c15b0ecf2b:src/Components/Math.js
    const cards = [
        {
            title: 'Уроци по математика за 9 клас',
            content: null,
            image: nineImage,
            path: '/math/level/9'
        },
        {
            title: 'Уроци по математика за 10 клас',
            content: null,
            image: tenImage,
            path: '/math/level/10'
        }
    ]

    return (
        <div className="container">
            <h1>Математика</h1>
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

export default MathPage
