import React from 'react'
import './header.css';

function Header() {
    return (
        <nav className='container__nav'>
            <img src='/images/logo.svg' className='logo' />
            <div className="nav__menu">
                <a>
                    <img src='/images/home-icon.svg' alt='h' className='nav__icon' />
                    <span className='nav__icon_title'>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' alt='s' className='nav__icon' />
                    <span className='nav__icon_title'>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' alt='w' className='nav__icon' />
                    <span className='nav__icon_title'>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' alt='o' className='nav__icon' />
                    <span className='nav__icon_title'>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' alt='m' className='nav__icon' />
                    <span className='nav__icon_title'>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' alt='s' className='nav__icon' />
                    <span className='nav__icon_title'>SERIES</span>
                </a>
            </div>
            <img src='/images/Me-e.jpeg' className="user__logo"  />
        </nav>
    )
}

export default Header