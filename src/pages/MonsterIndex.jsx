import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadMonsters, addMonster, updateMonster } from '../store/monster.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
// import { monsterService } from '../services/monster.service.js'

export function MonsterIndex() {

    const monsters = useSelector(storeState => storeState.monsterModule.monsters)

    useEffect(() => {
        loadMonsters()
    }, [])

    // async function onAddMonster() {
    //     const monster = monsterService.getEmptyMonster()
    //     monster.vendor = prompt('Vendor?')
    //     try {
    //         const savedMonster = await addMonster(monster)
    //         showSuccessMsg(`Monster added (id: ${savedMonster._id})`)
    //     } catch (err) {
    //         showErrorMsg('Cannot add monster')
    //     }        
    // }

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

    return (
        <div>
            <h3>Monsters App</h3>
            <main>
                <ul className="monster-list">
                    {monsters.map(monster =>
                        <li className="monster-preview" key={monster.id}>
                            <h1>{monster.name}</h1>
                            <p>Game: {monster.game}</p>
                            <img src={monster.iconImg} alt="" />
                        </li>)
                    }
                </ul>
            </main>
        </div>
    )
}