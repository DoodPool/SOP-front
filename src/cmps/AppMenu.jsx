import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import useIsMobile from "../customHooks/useIsMobile";

export function AppMenu({ onToggleMenu }) {
    const navigate = useNavigate()
    const isMobile = useIsMobile()

    function onHome() {
        navigate('/')
        onToggleMenu(false)
    }

    function onMonsterList() {
        navigate('/monsters')
        onToggleMenu(false)
    }

    function onResults() {
        navigate('/results')
        onToggleMenu(false)
    }

    function onChallenge() {
        navigate('/challenge')
        onToggleMenu(false)
    }

    return (
        <section className="menu-container fade-in-2 flex column fixed h-full w-full bg-dark clr-light">
            <div className="menu-header flex space-between">
                <h1 className="pointer" onClick={() => onHome()}>Home</h1>
                <button className="pointer" onClick={() => onToggleMenu(false)}>X</button>
            </div>

            <nav className="flex column">
                {/* <img className="mh6-logo" src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740052778/SOP-Moms/xfwbjkzmhmwtmcicyxew.webp" alt="mh6-logo" /> */}
                <img className="mh6-logo" src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764249/ik7xw16twvigv7lcxici.webp" alt="mh6-logo" />

                <p className="pointer" onClick={() => onMonsterList()}>Monster list</p>
                <p className="pointer" onClick={() => onResults()}>results</p>
                {!isMobile && <p className="unavailable-btn">Extra Challenge</p>}
            </nav>

            <div className="links clean-list flex justify-center">
                <a href="https://www.youtube.com/@WreckitRai"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                <a href="https://discord.gg/cmftvxSzMK"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                <a href="https://www.twitch.tv/wreckitrai"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
            </div>
        </section>
    )
}
