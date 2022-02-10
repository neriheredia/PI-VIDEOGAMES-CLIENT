import React from 'react'
import { Link } from 'react-router-dom';
import Ninja from '../../assets/ninja.png';
import './pageError.scss';

const PageError = () => {
    return (
        <>
            <div className="contentPageError">
                <h5 className='titlePageNotFound'>Page Not Found!</h5>
                <img className='ninjaNotFound' src={Ninja} alt="ninja" />
                <Link className='link' to='/home'>
                    <div className='buttonPageNotFound'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        HOME
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PageError