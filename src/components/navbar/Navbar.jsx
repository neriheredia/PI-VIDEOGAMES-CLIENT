import React from 'react'
import { Link } from 'react-router-dom';
import OnSearch from '../onSearch/OnSearch';
import './navbar.scss';

const Navbar = ({ setCurrentPage }) => {
    return (
        <div className='topBar'>
            <div className="topLeft">
                <Link className='link' to='/home' >
                    <h2 className='logoImg'>VIDEO GAME</h2>
                </Link>
            </div>
            <div className="topCenter">
                <div className="topCenterSearch">
                    <Link className='link' to='/home'>
                        <h5 className='itemLink'  >Home</h5>
                    </Link>
                    <Link className='link' to='/newGame'>
                        <h5 className='itemLink'  >Create</h5>
                    </Link>
                </div>
            </div>
            <div className="topRight">
                <OnSearch setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}

export default Navbar
