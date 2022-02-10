import React from 'react'
import './cardGameFavorite.scss';
// import { useDispatch } from 'react-redux';
// import { removeFavorite } from '../../redux/actions';
import { Link } from 'react-router-dom';


const CardGameFavorite = ({ name, img, id, genres }) => {
    // const dispatch = useDispatch()
    console.log(name)
    console.log(id)
    console.log(genres)
    console.log(img)
    return (
        <>
            {/* <div className='contentCardFavorite'> */}
            <div className='cardGameFavorite'>
                <img src={img} alt='test' />
                <div className="contentCardFavorite">
                    <h2>{name}</h2>
                    <h3>{genres?.map(e => (<span>{e.name}</span>))}</h3>
                </div>
                <Link className='link' to={`/videogame/${id}`}>
                    <div onClick={() => {
                        // dispatch(removeFavorite(id))
                    }} className="detailFavorite">DETAIL</div>
                </Link>
            </div>
            {/* </div> */}
        </>
    )
}

export default CardGameFavorite
