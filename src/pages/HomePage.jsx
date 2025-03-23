// import React from 'react'
import { utilService } from '../services/util.service'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoCarousel } from '../cmps/LogoCarousel';
import { onResetMonsters } from '../store/monster.actions';
import useIsMediumLayout from '../customHooks/useIsMediumLayout';
import useIsMobile from '../customHooks/useIsMobile';

export function HomePage() {

    const navigate = useNavigate()
    const isMediumLayout = useIsMediumLayout()
    const isMobile = useIsMobile()

    function startGame() {
        navigate('/monster/101')
    }

    return (
        <section className='home-page'>
            <article className='sop-logo'>
                <p>Monster Hunter</p>
                <p>Smash or Pass</p>
                {!isMediumLayout && <div className="logo-container">
                    {/* <img className="logo" src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740058022/SOP-Moms/pjb3s2iocw7t9heuat3z.png" alt="rai-pfp" /> */}
                    <img className="logo" src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764246/qq1kjglbnwbixj4f7cmr.png" alt="rai-pfp" />
                </div>}
            </article>
            <div className='home-footer'>

                {!isMediumLayout && <LogoCarousel />}

                <div className='home-btns-container'>
                    <div onClick={startGame} className='start-btn-container pointer'>
                        {!isMobile && <img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764247/eliwodku3romv4vm5jyn.png" alt="" />}
                        <button className='pointer'>start</button>
                        {!isMobile && <img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764247/eliwodku3romv4vm5jyn.png" alt="" />}
                    </div>
                    <button className='reset-btn pointer' onClick={(ev) => onResetMonsters(ev)}>Reset</button>
                </div>

                {!isMediumLayout && <div className="social-links-container">
                    {/* <img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740052796/SOP-Moms/xkegay6ata9avcl3hs4r.jpg" alt="rai-pfp" /> */}
                    <img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764247/mvlkuzmjobhvq9cyihi5.jpg" alt="rai-pfp" />

                    <div className="links clean-list flex justify-center">
                        <a href="https://www.youtube.com/@WreckitRai"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        <a href="https://discord.gg/cmftvxSzMK"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                        <a href="https://www.twitch.tv/wreckitrai"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
                    </div>
                </div>}
            </div>

            {!isMobile && <div className='vid-filter'></div>}
            {!isMobile && <div className='video-container'>
                {/* <video src="https://res.cloudinary.com/dwdt2yrid/video/upload/v1740058050/SOP-Moms/kcqfqlnncqqmkalsz8dz.mp4" type="video/mp4" autoPlay muted playsInline loop></video> */}
                <video src="https://res.cloudinary.com/dvcavuvzw/video/upload/v1742764284/wajc5naszkukehqqm75s.mp4" type="video/mp4" autoPlay muted playsInline loop></video>
            </div>}
        </section >
    )
}