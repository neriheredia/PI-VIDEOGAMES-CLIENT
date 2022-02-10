import React from 'react';
import './favoriteGames.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardGameFavorite from '../../components/cardGameFavorite/CardGameFavorite';
import { getFavorite } from '../../redux/actions';
import Navbar from '../../components/navbar/Navbar';

const FavoriteGames = () => {
    const dispatch = useDispatch()
    const gameFavorite = useSelector(state => state.favoriteGame)

    useEffect(() => {
        dispatch(getFavorite())
    }, [dispatch])


    console.log(gameFavorite);
    return (
        <>
            <Navbar />
            <div className='contentFavoritesCards'>
                <div className='topFavorite'>
                    <h5 className='returnBtnHomeFavorite'>FAVORITES</h5>
                </div>
                <div className='bottonFavorite'>
                    {gameFavorite && gameFavorite.map(favorite => (
                        <CardGameFavorite
                            key={favorite.id}
                            name={favorite.name}
                            img={favorite.img}
                            id={favorite.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FavoriteGames;
