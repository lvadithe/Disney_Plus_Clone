import React, { useEffect } from 'react'
import { onSnapshot, collection } from 'firebase/firestore';
import {useDispatch} from 'react-redux';

import {setMovies} from '../../features/movie/movieSlice'
import ImgSlider from '../imgSlider/ImgSlider';
import Movies from '../movies/Movies';
import Viewers from '../viewers/Viewers';
import db from '../../firebase';
import './home.css';
/* ========================= IMPORTANT =========================== */




function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        onSnapshot(collection(db, 'movies'), (snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            dispatch(setMovies(tempMovies));
        })
    }, [])

    return (
        <div className="container__home">
            <ImgSlider />
            <Viewers />
            <Movies />
        </div>
    )
}

export default Home