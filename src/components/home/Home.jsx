import React from 'react'
import ImgSlider from '../imgSlider/ImgSlider';
import Movies from '../movies/Movies';
import Viewers from '../viewers/Viewers';

/* ========================= IMPORTANT =========================== */

import './home.css';

function Home() {
    return (
        <div className="container__home">
            <ImgSlider />
            <Viewers />
            <Movies />
        </div>
    )
}

export default Home