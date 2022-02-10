import React, { useState } from 'react';
import './createdFilter.scss';
import { useDispatch } from 'react-redux';
import { filterCreatedDataBase } from '../../redux/actions';

/* FUNCIONANDO BIEN */
const CreatedFilter = ({ setCurrentPage }) => {
    const dispatch = useDispatch()
    const [checkCreated, setCheckCreated] = useState(true);

    const handleCreated = (e) => {
        if (checkCreated === false) {
            dispatch(filterCreatedDataBase(e.target.value))
            setCheckCreated(true)
            setCurrentPage(1)
        } else {
            dispatch(filterCreatedDataBase(e.target.value))
            setCheckCreated(false)
            setCurrentPage(1)
        }
    }

    return (
        <>
            {/* FUNCIONANDO BIEN */}
            <label className='titleCheck' > Created Games</label>
            <input className='inputCheck' type="checkbox" onChange={(e) => handleCreated(e)} value={checkCreated} />
        </>
    );
};

export default CreatedFilter;
