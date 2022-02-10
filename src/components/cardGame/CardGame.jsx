import React from 'react'
import { Link } from 'react-router-dom';
import './game.scss';

const CardGame = ({ name, img, id, genres }) => {
    return (
        <div className='cardGame'>
            <img src={img} alt='test' />
            <div className="contentCard">
                <h2>{name}</h2>
            </div>
            <Link className='link' to={`/videogame/${id}`} >
                <div className="detailContent">
                    <span>DETAIL</span>
                </div>
            </Link>
            <div className='genresCardGame'>{genres?.map(g => <span className='itemGeresCard' key={g.name}>{g.name}</span>)}</div>
        </div>
    )
}

export default CardGame
