// import React from 'react'
import { utilService } from '../services/util.service'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoCarousel } from '../cmps/LogoCarousel';
import { onResetMonsters } from '../store/monster.actions';

export function HomePage() {

    const navigate = useNavigate()

    function startGame() {
        navigate('/monster/101')
    }

    return (
        <section className='home-page'>
            <article className='sop-logo'>
                <p>Monster Hunter</p>
                <p>Smash or Pass</p>
                <div className="logo-container">
                    <img className="logo" src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1731277505/MH-sop/hpvoo2i5r1ae7jhyd6xk.png" alt="rai-pfp" />
                </div>
            </article>

            <div className='home-footer'>
                <LogoCarousel />

                <div className='home-btns-container'>
                    <div onClick={startGame} className='start-btn-container pointer'>
                        <img src="https://www.monsterhunter.com/wilds/assets/img/icon/scroll.png" alt="" />
                        <button className='pointer'>start</button>
                        <img src="https://www.monsterhunter.com/wilds/assets/img/icon/scroll.png" alt="" />
                    </div>
                    <button className='reset-btn pointer' onClick={(ev) => onResetMonsters(ev)}>Reset</button>
                </div>

                <div className="social-links-container">
                    <img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1731269010/MH-sop/e5hkelfwun1gtyy9iydl.jpg" alt="rai-pfp" />

                    <div className="links clean-list flex justify-center">
                        <a href="https://www.youtube.com/@WreckitRai"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        <a href="https://discord.gg/cmftvxSzMK"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                        <a href="https://www.twitch.tv/wreckitrai"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
                    </div>
                </div>
            </div>

            <div className='vid-filter'></div>
            <div className='video-container'>
                <video src="https://res.cloudinary.com/dlnkzbe0y/video/upload/v1731589185/MH-sop/cvsag3zzvl6w7x6ydrku.mp4" type="video/mp4" autoPlay muted playsInline loop></video>
            </div>
        </section >
    )
}