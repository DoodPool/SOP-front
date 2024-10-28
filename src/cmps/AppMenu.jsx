import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

export function AppMenu({ onToggleMenu }) {
    const navigate = useNavigate()

    function onHome() {
        navigate('/')
        onToggleMenu(false)
    }

    function onMonsterList() {
        navigate('/monster')
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
                <p className="pointer" onClick={() => onMonsterList()}>Monster list</p>
                <p className="pointer" onClick={() => onResults()}>results</p>
                <p className="pointer" onClick={() => onChallenge()}>Extra Challenge</p>
            </nav>

            <div className="links clean-list flex justify-center">
                <a href="https://www.youtube.com/@WreckitRai"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                <a href=""><FontAwesomeIcon icon="fa-brands fa-discord" /></a> {/* Need url from rai */}
                <a href="https://www.twitch.tv/wreckitrai"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
            </div>
        </section>
    )
}
