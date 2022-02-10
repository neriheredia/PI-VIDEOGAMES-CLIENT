import React from 'react';
import { useDispatch } from 'react-redux';
import { filterAlfabetico } from '../../redux/actions';

/* FUNCIONANDO BIEN */
const FilterAlfabetico = ({ setCurrentPage }) => {
    const dispatch = useDispatch()

    const handleFilterAlfabetico = (e) => {
        e.preventDefault()
        dispatch(filterAlfabetico(e.target.value))
        setCurrentPage(1)
    }

    return (
        <>
            {/* FUNCIONANDO BIEN */}
            <select className='filterInput' onChange={handleFilterAlfabetico} >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </>
    );
};

export default FilterAlfabetico;
