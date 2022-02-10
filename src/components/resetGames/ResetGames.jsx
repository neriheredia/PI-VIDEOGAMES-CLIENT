import React from 'react';
import './resetGames.scss';
import { useDispatch } from 'react-redux';
import { resetAllGames } from '../../redux/actions';

/* FUNCIONANDO BIEN */
const ResetGames = () => {
    const dispatch = useDispatch()

    const resetAllGamesClick = () => {
        dispatch(resetAllGames())
    }

    return (
        <>
            {/* FUNCIONANDO BIEN */}
            <div
                className='allResetGamesButton'
                onClick={resetAllGamesClick}
            >
                All
            </div>
        </>
    );
};

export default ResetGames;
