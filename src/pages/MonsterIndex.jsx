import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadMonsters, addMonster, updateMonster } from '../store/monster.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { SopCounter } from '../cmps/SopCounter.jsx'
import { useNavigate } from 'react-router'
// import { monsterService } from '../services/monster.service.js'

export function MonsterIndex() {

    const monsters = useSelector(storeState => storeState.monsterModule.monsters)
    const navigate = useNavigate()

    useEffect(() => {
        loadMonsters()
    }, [])

    async function onUpdateMonster(monster) {
        const price = +prompt('New price?')
        const monsterToSave = { ...monster, price }
        try {
            const savedMonster = await updateMonster(monsterToSave)
            showSuccessMsg(`Monster updated, new price: ${savedMonster.price}`)
        } catch (err) {
            showErrorMsg('Cannot update monster')
        }
    }

    function onMonster(id) {
        navigate(`/monster/${id}`)
    }

    return (
        <div>
            <main>
                <ul className="monster-list clean-list">
                    {monsters.map(monster =>
                        <li className="monster-preview" key={monster.id} onClick={() => onMonster(monster.id)}>
                            <img src={monster.iconImg} alt="" />
                            <h3>{monster.name}</h3>
                        </li>)}
                </ul>
            </main>
        </div>
    )
}