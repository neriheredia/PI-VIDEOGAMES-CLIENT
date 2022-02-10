import React, { useState } from 'react'
import './search.scss';
import { useDispatch } from 'react-redux'
import { getByName, loadingFunctionFalse, loadingFunctionTrue } from '../../redux/actions'
import Loading from '../loading/Loading';

const OnSearch = ({ setCurrentPage }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        if (name === '') {
            e.preventDefault()
            alert('No se puede enviar formulario vacio')
        } else {
            e.preventDefault()
            dispatch(loadingFunctionTrue())
            setLoading(true)
            dispatch(getByName(name))
                .then(response => {
                    setLoading(false)
                    dispatch(loadingFunctionFalse())
                })
                .catch(error => console.log(error))
            setCurrentPage(1)
            setName('')
        }
    }

    return (
        <>
            <form className='formSearch' onSubmit={handleSubmit}>
                {
                    loading && loading ? (
                        <>
                            <div className='buscandoJuego' style={{ color: 'white' }} >Searching...</div>
                        </>
                    )
                        : (
                            <>
                                <input
                                    className='inputSearch'
                                    type="text"
                                    placeholder='Search Game...'
                                    value={name}
                                    onChange={handleChange}
                                />
                                <button className='btnSearch' >SEARCH</button>
                            </>
                        )
                }
            </form>
        </>
    )
}

export default OnSearch
