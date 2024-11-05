import { useEffect } from "react"
import { loadSopList } from "../store/monster.actions"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

export function SopResults() {
    const smashList = useSelector(storeState => storeState.monsterModule.smashList)
    const passList = useSelector(storeState => storeState.monsterModule.passList)
    const navigate = useNavigate()

    useEffect(() => {
        loadSopList()
        console.log('smashList', smashList);
        console.log('passList', passList);
    }, [])

    function onMonster(id) {
        navigate(`/monster/${id}`)
    }

    return (
        <section className="results-container">
            <article>
                <div className="result-header">
                    <h2>Smash List</h2>
                    <p>Total: {smashList.length}</p>
                </div>
                <ul className="choice-list clean-list">
                    {smashList.map(monster =>
                        <li className="monster-preview pointer" key={monster.id} onClick={() => onMonster(monster.id)}>
                            <img src={monster.iconImg} alt="" />
                            <h3>{monster.name}</h3>
                        </li>)}
                </ul>
            </article>
            <article>
                <div className="result-header">
                    <h2>Pass Pist</h2>
                    <p>Total: {passList.length}</p>
                </div>
                <ul className="choice-list clean-list">
                    {passList.map(monster =>
                        <li className="monster-preview pointer" key={monster.id} onClick={() => onMonster(monster.id)}>
                            <img src={monster.iconImg} alt="" />
                            <h3>{monster.name}</h3>
                        </li>)}
                </ul>
            </article>
        </section >
    )
}