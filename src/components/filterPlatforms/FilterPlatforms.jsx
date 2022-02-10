import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPlatforms, getPlatforms } from '../../redux/actions';

/* FUNCIONANDO BIEN */
const FilterPlatforms = ({ setCurrentPage }) => {
    const dispatch = useDispatch()
    const platforms = useSelector(state => state.platforms)

    useEffect(() => {
        dispatch(getPlatforms())
    }, [dispatch])

    const handleFilterPlatforms = (e) => {
        dispatch(filterPlatforms(e.target.value))
        setCurrentPage(1)
    }

    return (
        <>
            {/* FUNCIONANDO BIEN */}
            <select className='filterInput' onChange={(e) => handleFilterPlatforms(e)} >
                <option value="all">All Platforms</option>
                {
                    platforms && platforms.map(e => (
                        <option key={e.name} value={e.name} >{e.name}</option>
                    ))
                }
            </select>
        </>
    );
};

export default FilterPlatforms;
