import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router"

export function ExtraChallenge() {
    const navigate = useNavigate()

    return (
        <section className="letter-container">
            <span className="decore-upper"></span>
            <h1>Extra challenge</h1>
            <div className="challenge-container">
                <div className="challenge-imgs">
                    {/* <img src="https://res.cloudinary.com/dlnkzbe0y/image/upload/v1731269016/MH-sop/bhvafywuwlflixamfo93.png" alt="challenge-img" /> */}
                    {/* <img src="../src/assets/img/sop-img.png" alt="challenge-img" /> */}
                    <img className="main-img" src="../src/assets/img/sop-img2.png" alt="challenge-img" />
                    {/* <img src="https://static.wikia.nocookie.net/monsterhunter/images/7/72/MH3icon-Helm.png" alt="challenge-img" /> */}
                    <h2>Layered Set</h2>
                    <div className="layered-set">
                        <article>
                            <img src="https://static.wikia.nocookie.net/monsterhunter/images/7/72/MH3icon-Helm.png" alt="" />
                            <p>Hare Band</p>
                        </article>
                        <article>
                            <img src="https://static.wikia.nocookie.net/monsterhunter/images/2/23/MH3icon-Plate.png" alt="" />
                            <p>Buff Body</p>
                        </article>
                        <article>
                            <img src="https://static.wikia.nocookie.net/monsterhunter/images/a/a1/MH3icon-Gauntlets.png/" alt="" />
                            <p>Gala Suit</p>
                        </article>
                        <article>
                            <img src="https://static.wikia.nocookie.net/monsterhunter/images/7/76/MH3icon-Waist.png" alt="" />
                            <p>Buff Body</p>
                        </article>
                        <article>
                            <img src="https://static.wikia.nocookie.net/monsterhunter/images/5/5b/MH3icon-Leggings.png" alt="" />
                            <p>Gala Suit</p>
                        </article>
                    </div>
                </div>
                <article className="challenge-txt">
                    {/* <div className="greeting"> */}
                    <p>Greetings hunter,</p>
                    <p>We&apos;ve noticed your interest in certain monster… attributes.</p>
                    <p>As members of the Reproductive Behaviour Study Group, we&apos;d like to invite you to participate in a special hunting expedition.</p>
                    <p>To keep things simple, the expedition will focus on the monsters you&apos;ve… noticed.</p>
                    <p>We follow certain clothing and hunting guidelines and they are as follow:</p>
                    {/* </div> */}

                    <ul>
                        <li>All monsters in your smash list are now your targets</li>
                        <li>You may only use the Juicy Well-done Hammer (not layered).</li>
                        <li>You're free to use any armour and skills, excluding fatty gear.</li>
                        <li>If possible, hunt the tempered version of the monster.</li>
                        <li>Multiplayer hunts are allowed if you wish to team up.</li>
                    </ul>

                    <p>One of our members will provide you with further details soon.</p>
                    <p>Happy hunting!</p>
                    {/* <button onClick={() => navigate('/results')}>Results <span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span></button> */}
                </article>
            </div>
            <span className="decore-lower"></span>
        </section >
    )
}

// Now go and beat them with you meat
// Greetings hunter,
// we have noticed you looking at certain monsters… attributes. We from the reproductive behaviour study group would like to invite you to join us for a special hunting expedition, and to keep it simple you can hunt the monsters you have… noticed.
// we follow certain clothing and hunting guidelines and they are as follows:
// All monsters that you said smash to are now your target.
// You are only allowed to use the Juicy Well-done Hammer (not layered).
// You're free to use any armour and skills, excluding fatty gear.
// If it's possible hunt the tempered version of the monster
// You can also do hunts in multiplayer if you choose to
// one of our members will send you further details

// {/* <li>we follow certain clothing</li>  playboi armour layered */}
// {/* <p>Hare Band</p> */}
// {/* <p>Buff Body</p> */}
// {/* <p>Gala Suit</p> */}
// {/* <p>Buff Body</p> */}
// {/* <p>Gala Suit</p> */}