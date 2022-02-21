import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import './detail.css';

function Detail() {
    const { id } = useParams();
    const [state, setState] = useState();

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "movies", id), (doc) => {
            //console.log("Current data: ", doc.data());
            setState(doc.data())

        });

    }, [])

    return (
        <div className="container__detail">
            {
                state && (
                    <>
                        <div className="background__component">
                            <img className='img__detail' src={state.backgroundImg} alt="" />
                        </div>
                        <div className="title">
                            <img className='img__title' src={state.titleImg} alt="" />
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
                            {state.subTitle}
                        </div>
                        <div className="description">
                            {state.description}
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Detail