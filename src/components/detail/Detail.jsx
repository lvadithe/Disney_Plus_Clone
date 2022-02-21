import React from 'react';
import './detail.css';

function Detail() {
    return (
        <div className="container__detail">
            <div className="background__component">
                <img className='img__detail' src="https://i.blogs.es/212d48/ascenso-skywalker/1024_2000.jpeg" alt="" />
            </div>
            <div className="title">
                <img className='img__title' src="/images/Daco.png" alt="" />
            </div>
            <div className="controls__detail">
                <button className="play__button">
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </button>
                <button className="triler__button">
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </button>
                <button className="add__button">
                    <span className='icon__add'>+</span>
                </button>
                <button className="group__watch__button">
                    <img src="/images/group-icon.png" alt="" />
                </button>
            </div>
            <div className="subtitle">
                2019 - 7m - Family - Fantasy - Kids - animation
            </div>
            <div className="description">
                Star Wars, conocida también en español como La guerra de las galaxias,
                es una franquicia compuesta primordialmente de una serie de películas concebidas
                por el cineasta estadounidense George Lucas en la década de 1970, y producidas y
                distribuidas por The Walt Disney Company a partir de 2012.
            </div>
        </div>
    )
}

export default Detail