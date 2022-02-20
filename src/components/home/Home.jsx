import React from 'react'
import ImgSlider from '../imgSlider/ImgSlider';
import Viewers from '../viewers/Viewers';

/* ========================= IMPORTANT =========================== */

import './home.css';

function Home() {
    return (
        <div className="container__home">
            <ImgSlider />
            <Viewers />
        </div>
    )
}

export default Home