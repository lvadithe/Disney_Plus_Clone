import React from 'react';
import './viewers.css';

function Viewers() {
  return (
    <div className="component__viewers">
        <div className="wrap__img__viewer">
            <img className='img__viewer' src='/images/viewers-disney.png' />
        </div>
        <div className="wrap__img__viewer">
            <img className='img__viewer' src='/images/viewers-pixar.png' />
        </div>
        <div className="wrap__img__viewer">
            <img className='img__viewer' src='/images/viewers-marvel.png' />
        </div>
        <div className="wrap__img__viewer">
            <img className='img__viewer' src='/images/viewers-starwars.png' />
        </div>
        <div className="wrap__img__viewer">
            <img className='img__viewer' src='/images/viewers-national.png' />
        </div>
    </div>
  )
}

export default Viewers