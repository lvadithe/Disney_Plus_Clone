import React from 'react'
import { selectMovies } from '../../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import './movies.css';

function Movies() {
    const movies = useSelector(selectMovies);

    console.log("This is movies", movies)

    return (
        <div className="container__movies">
            <h4>Recommended for you</h4>
            <div className="content__movies">
                <div className="wrap__movie">
                    <img className='img__movie' src="https://www.elsoldemexico.com.mx/gossip/omg/m9gewp-los-simpson.jpg/ALTERNATES/LANDSCAPE_1140/los%20simpson.jpg" alt="" />
                </div>
                <div className="wrap__movie">
                    <img className='img__movie' src="https://www.elsoldemexico.com.mx/gossip/omg/m9gewp-los-simpson.jpg/ALTERNATES/LANDSCAPE_1140/los%20simpson.jpg" alt="" />
                </div>
                <div className="wrap__movie">
                    <img className='img__movie' src="https://www.elsoldemexico.com.mx/gossip/omg/m9gewp-los-simpson.jpg/ALTERNATES/LANDSCAPE_1140/los%20simpson.jpg" alt="" />
                </div>
                <div className="wrap__movie">
                    <img className='img__movie' src="https://www.elsoldemexico.com.mx/gossip/omg/m9gewp-los-simpson.jpg/ALTERNATES/LANDSCAPE_1140/los%20simpson.jpg" alt="" />
                </div>
                <div className="wrap__movie">
                    <img className='img__movie' src="https://www.elsoldemexico.com.mx/gossip/omg/m9gewp-los-simpson.jpg/ALTERNATES/LANDSCAPE_1140/los%20simpson.jpg" alt="" />
                </div>
                <div className="wrap__movie">
                    <img className='img__movie' src="https://www.elsoldemexico.com.mx/gossip/omg/m9gewp-los-simpson.jpg/ALTERNATES/LANDSCAPE_1140/los%20simpson.jpg" alt="" />
                </div>
                <div className="wrap__movie">
                    <img className='img__movie' src="https://www.elsoldemexico.com.mx/gossip/omg/m9gewp-los-simpson.jpg/ALTERNATES/LANDSCAPE_1140/los%20simpson.jpg" alt="" />
                </div>
                <div className="wrap__movie">
                    <img className='img__movie' src="https://www.elsoldemexico.com.mx/gossip/omg/m9gewp-los-simpson.jpg/ALTERNATES/LANDSCAPE_1140/los%20simpson.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Movies