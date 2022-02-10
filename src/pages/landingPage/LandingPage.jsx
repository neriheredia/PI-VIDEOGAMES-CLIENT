import React from 'react'
import './landingPage.scss';
import bg1 from '../../assets/bg2.jpg'
import OnButton from '../../components/buttonIngreso/OnButton';
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
            <div className='ladingPage'>
                <img src={bg1} alt="bg1" />
                <div className='containLanding'>
                    <h1 data-testid='title' >VIDEO GAME</h1>
                    <Link to='/home' className='link' >
                        <OnButton data-testid='onButton' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LandingPage
