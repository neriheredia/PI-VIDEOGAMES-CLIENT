import React from 'react'
import './home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getGames, getGenres, getPlatforms, loadingFunctionFalse } from '../../redux/actions'
import FilterPlatforms from '../../components/filterPlatforms/FilterPlatforms'
import FilterAlfabetico from '../../components/filterAlfabetico/FilterAlfabetico'
import FilterReating from '../../components/filterRating/FilterReating'
import CreatedFilter from '../../components/filterCreated/CreatedFilter'
import FilterGenres from '../../components/filterGenres/FilterGenres'
import Paginado from '../../components/pagination/Pagination'
import Loading from '../../components/loading/Loading'
import Navbar from '../../components/navbar/Navbar'
import CardsGames from '../cardsGames/CardsGames'
import ResetGames from '../../components/resetGames/ResetGames'


const Home = () => {
    //ALL GAMES FUNCIONANDO
    const dispatch = useDispatch()
    const allVideoGames = useSelector(state => state.oneGames)
    const loading1 = useSelector(state => state.loading)

    /* PAGINADO */   /* FUNCIONANDO BIEN */
    const [currentPage, setCurrentPage] = useState(1)
    const [videoGamePerPage] = useState(12);
    const indexLastVideoGames = currentPage * videoGamePerPage
    const indexFirstVideoGames = indexLastVideoGames - videoGamePerPage

    const currentVideoGames = allVideoGames.slice(indexFirstVideoGames, indexLastVideoGames)

    useEffect(() => {
        dispatch(getGames())
            .then(response => {
                dispatch(loadingFunctionFalse())
            })
            .catch(error => console.log(error))
        dispatch(getGenres())
        dispatch(getPlatforms())
    }, [dispatch])

    return (<>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="contenedorDelHome">
            {
                loading1 ?
                    (
                        <>
                            <Loading />
                        </>
                    )
                    :
                    (
                        <>
                            <div className="filterAndOrders">
                                <div className="topFiltersOrder">
                                    <ResetGames />
                                    <FilterPlatforms
                                        setCurrentPage={setCurrentPage}
                                    />
                                    <FilterAlfabetico
                                        setCurrentPage={setCurrentPage}
                                    />
                                    <FilterReating
                                        setCurrentPage={setCurrentPage}
                                    />
                                    <FilterGenres
                                        setCurrentPage={setCurrentPage}
                                    />
                                    <CreatedFilter
                                        setCurrentPage={setCurrentPage}
                                    />
                                </div>
                                <div className="bottonFiltersOrder">
                                    <Paginado
                                        currentPage={currentPage}
                                        videoGamePerPage={videoGamePerPage}
                                        allVideoGames={allVideoGames.length}
                                        setCurrentPage={setCurrentPage}
                                    />
                                </div>
                            </div>
                            <CardsGames
                                currentVideoGames={currentVideoGames}
                            />
                        </>
                    )}
        </div>

    </>
    )
}

export default Home
