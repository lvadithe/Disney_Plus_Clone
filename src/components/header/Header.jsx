import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserphoto, setSignOut, setUserLogin } from '../../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import './header.css';
import { async } from '@firebase/util';

function Header() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);
    const userPhote = useSelector(selectUserphoto);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/')
            }
        })
    }, [])

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                let user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                console.log(result)
                navigate('/')
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    function handleSignOut() {
        signOut(auth).then(() => {
            dispatch(setSignOut())
            navigate('/login')
        }).catch((error) => {
            alert('Error Detected')
        });
    }


    return (
        <nav className='container__nav'>
            <img src='/images/logo.svg' className='logo' />
            {
                !userName ? (
                    <div className="login__container">
                        <div onClick={signIn} className="login__btn">Login</div>
                    </div>
                ) : (
                    <>
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
                        <img onClick={handleSignOut} src='/images/Me-e.jpeg' className="user__logo" />
                    </>
                )
            }
        </nav>
    )
}

export default Header