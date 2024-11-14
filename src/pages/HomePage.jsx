// import React from 'react'
import { utilService } from '../services/util.service'
import { useNavigate, useParams } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function HomePage() {

    const navigate = useNavigate()

    function startGame() {
        navigate('/monster/101')
    }

    return (
        <section className='home-page'>
            <div className='nav-slide'></div>

            {/* <Marquee>
                <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />
                <img className='game-logo' src="../src/assets/img/MHWIB.png" alt="mhwib" />
                <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />
                <img className='game-logo' src="../src/assets/img/MHWIB.png" alt="mhwib" />
                <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />
                <img className='game-logo' src="../src/assets/img/MHWIB.png" alt="mhwib" />
                <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />
                <img className='game-logo' src="../src/assets/img/MHWIB.png" alt="mhwib" />
                <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />
                <img className='game-logo' src="../src/assets/img/MHWIB.png" alt="mhwib" />
                <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />
                <img className='game-logo' src="../src/assets/img/MHWIB.png" alt="mhwib" />
                <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />
            </Marquee> */}

            <div className='home-footer'>
                <article>
                    <p>Monster Hunter</p>
                    <p>Smash or Pass</p>
                    <div className="logo-container">
                        <img className="logo" src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1731277505/MH-sop/hpvoo2i5r1ae7jhyd6xk.png" alt="rai-pfp" />
                    </div>
                </article>

                <button onClick={startGame}>start</button>

                {/* <div className="links clean-list flex justify-center">
                    <a href="https://www.youtube.com/@WreckitRai"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                    <a href="https://discord.gg/cmftvxSzMK"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                    <a href="https://www.twitch.tv/wreckitrai"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
                </div> */}
            </div>

            <div className='video-container'>
                <video src="https://res.cloudinary.com/dlnkzbe0y/video/upload/v1731589185/MH-sop/cvsag3zzvl6w7x6ydrku.mp4" type="video/mp4" autoPlay muted playsInline loop></video>
            </div>
        </section >
    )
}