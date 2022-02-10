import React from 'react'
import CardGame from '../../components/cardGame/CardGame';
import Loading from '../../components/loading/Loading';
import './cardsGames.scss';

const CardsGames = ({ currentVideoGames }) => {

    return (
        <>{
            !currentVideoGames ? (
                <>
                    <Loading />
                </>
            ) :
                (
                    <div className='contentCards'>
                        {currentVideoGames && currentVideoGames.map(e => (
                            <CardGame
                                key={e.id}
                                id={e.id}
                                name={e.name}
                                img={e.background_image}
                                rating={e.rating}
                                createdDb={e.createdDb}
                                genres={e.genres}
                            />
                        ))}
                    </div>
                )
        }
        </>
    )

}

export default CardsGames