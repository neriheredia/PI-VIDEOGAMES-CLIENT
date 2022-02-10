import React from 'react';
import './detailGame.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../redux/actions';
import Loading from '../../components/loading/Loading';
import Navbar from '../../components/navbar/Navbar';

const DetailGame = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const { id } = useParams()
    const [loading, setLoading] = useState(true);
    const details = useSelector(state => state.detail[0])

    useEffect(() => {

        dispatch(getDetail(id))
            .then((response) => {
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [dispatch, id])
    console.log(id);

    useEffect(() => {
        let res = document.getElementById('resumen')
        if (res) res.innerHTML = details.description
    })
    // const desALimpiar = details.description
    // console.log(desALimpiar);
    // const description = desALimpiar.replace('<>', ' ')

    return (
        <>
            <Navbar />
            {loading ? (<><Loading /> </>) : (
                <>
                    <div className='contentDetail'>
                        <img className='fondoDetail' src={details.background_image} alt="img" />
                        <div className="contentLeft">
                            <h3 className='titleDetail' > {details.name} </h3>
                            <div className="labelContent">
                                <h4 className='labelDetail' >Release Date: </h4>
                                <p className='labelTextDetail'  > {details.released} </p>
                            </div>
                            <div className="labelContent">
                                <h4 className='labelDetail' >Rating: </h4>
                                <p className='labelTextDetail' > {details.rating} </p>
                            </div>
                            <div className="labelContent">
                                <h4 className='labelDetail' >Platforms: </h4>
                                <p className='labelTextDetail' > {details.platforms.map(e => e.name + ', ')} </p>
                            </div>
                            <h4 className='titleDetailDescription' >Description: </h4>
                            <br />
                            <p className='descriptionDetail' id='resumen' >
                            </p>
                        </div>
                        <div className="contentRigth">
                            <img src={details.background_image} alt="" width="500px" height="300px" />
                        </div>

                    </div>
                </>
            )
            }
        </>
    );
};

export default DetailGame;
