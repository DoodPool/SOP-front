import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadMonsters } from '../store/monster.actions.js'
import { useNavigate } from 'react-router'

export function MonsterIndex() {
    const monsters = useSelector(storeState => storeState.monsterModule.monsters)
    const navigate = useNavigate()

    useEffect(() => {
        loadMonsters()
    }, [])

    function onMonster(id) {
        navigate(`/monster/${id}`)
    }

    return (
        <div>
            <main>
                <ul className="monster-list clean-list">
                    {monsters.map(monster =>
                        <li className="monster-preview" key={monster.id} onClick={() => onMonster(monster.id)}>
                            {/* {monster.isHidden && <img src="https://tiermaker.com/images/chart/chart/final-bosses-tier-list-monster-hunter-171616/1stgen-questionmarkiconpng.png" alt="" />}
                            {monster.isHidden && <h3>???</h3>} */}

                            {/* {!monster.isHidden && <img className={`${"mon-" + monster.id}`} src={monster.iconImg} alt="" />}
                            {!monster.isHidden && <h3>{monster.name}</h3>} */}
                            <img className={`${"mon-" + monster.id}`} src={monster.iconImg} alt="" />
                            <h3>{monster.name}</h3>
                        </li>)}
                </ul>
            </main>
        </div>
    )
}