import React from 'react';
import './viewers.css';

function Viewers() {
    return (
        <div className="component__viewers">
            <div className="wrap__img__viewer">
                <img className='img__viewer' src='/images/viewers-disney.png' />
                {/* <video src="/video/1564674844-disney.mp4"></video> */}
            </div>
            <div className="wrap__img__viewer">
                <img className='img__viewer' src='/images/viewers-pixar.png' />
                {/* <video src="/video/1564676714-pixar.mp4"></video> */}
            </div>
            <div className="wrap__img__viewer">
                <img className='img__viewer' src='/images/viewers-marvel.png' />
               {/*  <video src="/video/1564676115-marvel.mp4"></video> */}
            </div>
            <div className="wrap__img__viewer">
                <img className='img__viewer' src='/images/viewers-starwars.png' />
                {/* <video src="/video/1608229455-star-wars.mp4"></video> */}
            </div>
            <div className="wrap__img__viewer">
                <img className='img__viewer' src='/images/viewers-national.png' />
                {/* <video className='video_l' autoPlay loop={true} playsInline={true}>
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                </video> */}
            </div>
        </div>
    )
}

export default Viewers