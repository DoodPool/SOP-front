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
                    <div className="logo-container">
                        <img className="logo" src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1731277505/MH-sop/hpvoo2i5r1ae7jhyd6xk.png" alt="rai-pfp" />
                    </div>
                </article>

                <p className="credit">Made by - DoodPool</p>

                <div className="social-links-container">
                    <img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1731269010/MH-sop/e5hkelfwun1gtyy9iydl.jpg" alt="rai-pfp" />

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