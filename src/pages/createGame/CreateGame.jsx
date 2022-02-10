import React, { useState } from 'react';
import './createGame.scss';
import bgImg from '../../assets/bg1.jpg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createVideoGame, getGenres, getPlatforms } from '../../redux/actions';
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/loading/Loading'

function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "Name requerid"
    }

    if (!input.description) {
        errors.description = "Complete description"
    }

    if (!input.rating || input.rating > 5 || input.rating < 0) {
        errors.rating = "Rating valid 0 - 5"
    }

    if (!/[0-9]{2,2}-[0-9]{2,2}-[0-9]{4,4}/.test(input.released)) {
        errors.released = "Format error (dd-mm-yyyy)"
    } else {
        errors.released = ""
    }

    if (input.platforms.length < 1) {
        errors.platforms = "Enter platforms"
    } else {
        errors.platforms = ""
    }

    if (input.genres < 1) {
        errors.genres = "Enter genres"
    } else {
        errors.platforms = ""
    }
    return errors
}

const CreateGame = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    /* TRAIGO DEL REDUX LOS DATOS DE LAS PLATFORMS Y LOS GNRES */
    const allGenres = useSelector(state => state.allGenres)
    const allPlatforms = useSelector(state => state.platforms)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    /* CREO EL ESTADO PARA EL FORMULARIO */
    const [input, setInput] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        background_image: "",
        genres: [],
        platforms: [],
    });

    /* TOMANDO VALUES DE LOS INPUTS */
    const handleInputChange = (e) => {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    /* SEND FORMULARIO */
    const handleSubmit = (e) => {
        if (input.name === '') {
            e.preventDefault()
            alert('Completar correctamente el formulario!!')
        } else {
            e.preventDefault()
            dispatch(createVideoGame(input))
            alert('Video Game Creado!!!!')
            setInput({
                name: "",
                description: "",
                released: "",
                rating: "",
                background_image: "",
                genres: [],
                platforms: [],
            })
            navigate('/home')
        }

    }

    /* SELECCIONANDO VALORES DE LAS PLATAFORMAS */
    const handleSelectPlatforms = (e) => {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
        setErrors(validate({
            ...input,
            [e.target.platforms]: e.target.value
        }))
    }

    /* SELECCIONANDO VALORES DE LOS GENRES */
    const handleSelectGenres = (e) => {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    /* ELIMINANDO LOS VALORES DE LAS PLATAFORMA SELECCIONADOS */
    const handlePlatformsDelete = (param) => {
        setInput({
            ...input,
            platforms: input.platforms.filter(plat => plat !== param)
        })
    }
    const handleGenresDelete = (param) => {
        setInput({
            ...input,
            genres: input.genres.filter((genre) => genre !== param)
        })
    }

    useEffect(() => {
        setLoading(true)
        dispatch(getGenres())
        dispatch(getPlatforms())
            .then(response => {
                setLoading(false)
            })
    }, [dispatch])

    console.log(input);

    return (
        <>
            <Navbar />
            <div className='contentImgForm'>
                {
                    loading ?
                        (
                            <>
                                <Loading />
                            </>
                        )
                        :
                        (
                            <>
                                <img src={bgImg} alt="" />
                                <div className="contentForm">
                                    <h2 className='titleForm'>CREATE GAME</h2>
                                    <form className='formCreate' onSubmit={(e) => handleSubmit(e)} >
                                        <div className='left'>
                                            <div className="contentInput">
                                                <label className='labelForm' >Name</label>
                                                <input
                                                    type="text"
                                                    name='name'
                                                    className='inputFormCreate'
                                                    placeholder='Name Game ...'
                                                    value={input.name}
                                                    requerid
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                                {
                                                    errors.name && (
                                                        <p className='msjErrorForm'> {errors.name} </p>
                                                    )
                                                }
                                            </div>
                                            <div className="contentInput">
                                                <label className='labelForm' htmlFor="">Rating</label>
                                                <input
                                                    type="number"
                                                    name='rating'
                                                    min='0'
                                                    max='5'
                                                    className='inputFormCreate'
                                                    placeholder='Rating 0 - 5'
                                                    value={input.rating}
                                                    requerid
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                                {
                                                    errors.rating && (
                                                        <p className='msjErrorForm'> {errors.rating} </p>
                                                    )
                                                }
                                            </div>
                                            <div className="contentInput">
                                                <label className='labelForm' htmlFor="">Release Date</label>
                                                <input
                                                    type="text"
                                                    name='released'
                                                    className='inputFormCreate'
                                                    placeholder='dd/mm/yyyy'
                                                    value={input.released}
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                                {
                                                    errors.released && (
                                                        <p className='msjErrorForm'> {errors.released} </p>
                                                    )
                                                }
                                            </div>
                                            <div className="contentInput">
                                                <label className='labelForm' htmlFor="">Image</label>
                                                <input
                                                    type="url"
                                                    name='background_image'
                                                    className='inputFormCreate'
                                                    placeholder='Insert URL'
                                                    value={input.background_image}
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                            </div>
                                            <div className="contentInput">
                                                <label className='labelForm' htmlFor="">Description</label>
                                                <input
                                                    type="textarea"
                                                    name='description'
                                                    className='inputFormCreate'
                                                    placeholder='Description of the video game...'
                                                    value={input.description}
                                                    requerid
                                                    onChange={(e) => handleInputChange(e)}
                                                />
                                                {
                                                    errors.description && (
                                                        <p style={{ marginTop: '20px' }} className='msjErrorForm'> {errors.description} </p>
                                                    )
                                                }
                                            </div>
                                            {
                                                (errors.name || errors.description || errors.rating || errors.platforms || errors.released || errors.genres) ?
                                                    <p className='msjErrorForm'>Complete all the fields of the form</p>
                                                    :
                                                    <>
                                                        <button
                                                            className='btnSubmitForm'
                                                            type="submit"
                                                        >
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            CREATE
                                                        </button>
                                                    </>
                                            }
                                        </div>
                                        <div className='rigth'>
                                            <div className='contentSelectForm' >
                                                <label className='labelPlatforms' >Platforms</label>
                                                <select className='inputSelectFrom'
                                                    onChange={(e) => handleSelectPlatforms(e)}>
                                                    {
                                                        allPlatforms?.map(p => (
                                                            <option key={p.name} value={p.name} >{p.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <div className='contentOptionsSelectForm'>
                                                    {
                                                        input.platforms?.map(pla => (
                                                            <li className='itemsOptionsSelectForm' >
                                                                {pla}
                                                                <button
                                                                    className='btnCloseOptionSelectForm'
                                                                    type='button'
                                                                    onClick={() => handlePlatformsDelete(pla)}
                                                                >
                                                                    X
                                                                </button>
                                                            </li>
                                                        ))
                                                    }
                                                </div>
                                                {
                                                    errors.platforms && (
                                                        <p className='msjErrorForm'> {errors.platforms} </p>
                                                    )
                                                }
                                            </div>
                                            <div className='contentSelectForm' >
                                                <label className='labelGenres' >Genres</label>
                                                <select className='inputSelectFrom' onChange={(e) => handleSelectGenres(e)}>
                                                    {
                                                        allGenres.map(g => (
                                                            <option key={g.name} value={g.name} >{g.name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <div className='contentOptionsSelectForm'>
                                                    {
                                                        input.genres?.map(gen => (
                                                            <li className='itemsOptionsSelectForm'>
                                                                {gen}
                                                                <button
                                                                    className='btnCloseOptionSelectForm'
                                                                    type='button'
                                                                    onClick={() => handleGenresDelete(gen)}
                                                                >
                                                                    X
                                                                </button>
                                                            </li>
                                                        ))
                                                    }
                                                </div>
                                                {
                                                    errors.genres && (
                                                        <p className='msjErrorForm'> {errors.genres} </p>
                                                    )
                                                }
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </>
                        )
                }
            </div >
        </>
    );
};

export default CreateGame;
