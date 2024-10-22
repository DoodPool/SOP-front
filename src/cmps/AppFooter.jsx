import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AppFooter() {

    return (
        <footer className="app-footer footer">
            <img className="logo" src="../src/assets/img/mh-logo.png" alt="rai-pfp" />

            <p>Made by DoodPool</p>

            <div className="social-links-container">
                <img src="../src/assets/img/rai-pfp.jpg" alt="rai-pfp" />

                <div className="links clean-list flex justify-center">
                    <a href="https://www.youtube.com/@WreckitRai"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                    <a href=""><FontAwesomeIcon icon="fa-brands fa-discord" /></a> {/* Need url from rai */}
                    <a href="https://www.twitch.tv/wreckitrai"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
                </div>
            </div>
        </footer>
    )
}