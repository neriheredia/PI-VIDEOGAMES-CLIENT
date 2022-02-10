import React from 'react'
import './pagination.scss';


export default function Paginado({ videoGamePerPage, allVideoGames, setCurrentPage, currentPage }) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(allVideoGames / videoGamePerPage); i++) {
        pageNumber.push(i)
    }

    /* FUNCIONANDO BIEN */
    const pagination = (page) => {
        setCurrentPage(page)
    }

    const handleClickPrev = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    const handleClickNext = () => {
        if (currentPage !== Math.ceil(allVideoGames / videoGamePerPage)) setCurrentPage(currentPage + 1)
    }

    return (
        <>
            {/* FUNCIONANDO BIEN */}
            <button className='btnPrev' style={{ cursor: 'pointer' }} onClick={() => handleClickPrev()}></button>
            {
                pageNumber.map(number =>
                    <h5
                        className={`liContentPagination ${currentPage === number ? 'active' : ''}`}
                        onClick={() =>
                            pagination(number)}
                        key={number}
                        id={number}
                    >
                        {number}
                    </h5>
                )
            }
            <button className='btnNext' style={{ cursor: 'pointer' }} onClick={() => handleClickNext()}></button>
        </>

    )
}