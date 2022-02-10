import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterGenre, getGenres } from '../../redux/actions';

/* FUNCIONANDO BIEN */
const FilterGenres = ({ setCurrentPage }) => {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.allGenres)

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    const handleGenreFilter = (e) => {
        dispatch(filterGenre(e.target.value))
        setCurrentPage(1)
    }
    return (
        <>
            {/* FUNCIONANDO BIEN */}
            <select className='filterInput' onChange={(e) => handleGenreFilter(e)}>
                <option value="all">Genres</option>
                {
                    genres && genres.map(g => (
                        <option key={g.name} value={g.name} >{g.name}</option>
                    ))
                }
            </select>
        </>
    )
};

export default FilterGenres;
