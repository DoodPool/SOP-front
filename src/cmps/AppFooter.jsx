import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsMediumLayout from '../customHooks/useIsMediumLayout.js'

export function AppFooter() {
    const isMediumLayout = useIsMediumLayout()

    return (
        <section className="footer">
            {!isMediumLayout && <svg className="footer-decor" viewBox="0 25 1727 58" fill="none" preserveAspectRatio="none">
                <path fill="#000" d="M0 0h1727v42L864 58l10.5-16L0 58V0Z"></path>
            </svg>}
            <footer className="app-footer">
                <article>
                    <p>Monster Hunter</p>
                    <p>Smash or Pass</p>
                    {!isMediumLayout && <div className="logo-container">
                        {/* <img className="logo" src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740058022/SOP-Moms/pjb3s2iocw7t9heuat3z.png" alt="rai-pfp" /> */}
                        <img className="logo" src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764246/qq1kjglbnwbixj4f7cmr.png" alt="rai-pfp" />
                    </div>}
                </article>

                <p className="credit">Made by - DoodPool</p>

                <div className="social-links-container">
                    {/* <img src="https://res.cloudinary.com/dwdt2yrid/image/upload/v1740052796/SOP-Moms/xkegay6ata9avcl3hs4r.jpg" alt="rai-pfp" /> */}
                    <img src="https://res.cloudinary.com/dvcavuvzw/image/upload/v1742764247/mvlkuzmjobhvq9cyihi5.jpg" alt="rai-pfp" />

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