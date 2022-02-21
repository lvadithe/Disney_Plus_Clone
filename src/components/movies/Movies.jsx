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
                {
                    movies?.map((movie) => (
                        <div className="wrap__movie" key={movie.id}>
                            <img className='img__movie' src={movie.cardImg}  />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies