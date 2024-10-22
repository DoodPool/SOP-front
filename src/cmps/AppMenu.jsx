import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AppMenu() {

    return (
        <section className="fade-in-2 flex column fixed h-full w-full bg-dark clr-light">
            <h1 class="pointer">Home</h1>

            <nav class="flex column">
                <p>Game selector</p>
                <p>Monster list</p>
                <p>results</p>
            </nav>

            <div className="links clean-list flex justify-center">
                <a href="https://www.youtube.com/@WreckitRai"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                <a href=""><FontAwesomeIcon icon="fa-brands fa-discord" /></a> {/* Need url from rai */}
                <a href="https://www.twitch.tv/wreckitrai"><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
            </div>
        </section>
    )
}