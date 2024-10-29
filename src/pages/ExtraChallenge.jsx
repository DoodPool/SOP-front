import { useNavigate } from "react-router"

export function ExtraChallenge() {
    const navigate = useNavigate()

    return (
        <section className="challenge-container">
            <h1>Extra challenge</h1>
            <article className="rules">
                <p>Now go and beat them with you meat</p>
                <ul>
                    <li>
                        All monsters that you said smash to are now your target.<br />
                        you use the meat hammer to hunt them
                    </li>
                    <li>Not the layered meat hammer, but the actual meat hammer</li>
                    <li>You're free to use any armour and skills</li>
                    <li>If possible you hunt the tempered version of the monster</li>
                </ul>
                <p>-CodingCorvus</p>
                <button onClick={() => navigate('/results')}>Results</button>
            </article>
            <img src="../src/assets/img/challenge-img.png" alt="rai-pfp" />
        </section >
    )
}