import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AppFooter() {

    return (
        <section className="footer">
            <svg className="footer-decor" viewBox="0 25 1727 58" fill="none" preserveAspectRatio="none">
                <path fill="#000" d="M0 0h1727v42L864 58l10.5-16L0 58V0Z"></path>
            </svg>
            <footer className="app-footer">
                <article>
                    <p>Monster Hunter</p>
                    <p>Smash or Pass</p>
                    {/* <img className="logo" src="../src/assets/img/mh6-logo.webp" alt="rai-pfp" /> */}
                </article>

                <p className="credit">Made by - DoodPool</p>

                <div className="social-links-container">
                    <img src="../src/assets/img/rai-pfp.jpg" alt="rai-pfp" />

                    <div className="links clean-list flex justify-center">
                        <a href="https://www.youtube.com/@WreckitRai"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        <a href="https://discord.gg/cmftvxSzMK"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                        <a href="https://www.twitch.tv/wreckitrai"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
                    </div>
                </div>
            </footer>
        </section>
    )
}