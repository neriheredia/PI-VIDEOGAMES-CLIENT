import React from 'react';
import './filterReating.scss';
import { useDispatch } from 'react-redux';
import { filterRating } from '../../redux/actions';

/* FUNCIONANDO BIEN */
const FilterReating = ({ setCurrentPage }) => {
    const dispatch = useDispatch()

    const handleFilterRating = (e) => {
        e.preventDefault()
        dispatch(filterRating(e.target.value))
        setCurrentPage(1)
    }

    return (
        <>
            {/* FUNCIONANDO BIEN */}
            <select className='filterInput' onChange={handleFilterRating} >
                <option value="best">Best Rating</option>
                <option value="worst">Worst Rating</option>
            </select>
        </>);
};

export default FilterReating;
