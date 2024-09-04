import { useEffect, useState } from 'react'
import { utilService } from '../services/util.service'
import { useNavigate, useParams } from 'react-router-dom'
import { monsterService } from '../services/monster.service.local'
import { updateMonster } from '../store/monster.actions'

export function MonsterDetails() {

    const navigate = useNavigate()
    const params = useParams()

    const [currMonster, setCurrMonster] = useState(null)

    useEffect(() => {
        loadMonster()
    }, [params.monsterId])

    async function loadMonster() {
        try {
            const monster = await monsterService.getById(params.monsterId)
            // if (!monster) return navigate('/monster')
            console.log('mon', monster);

            setCurrMonster(monster)
        } catch (err) {
            console.log('Had issues loading monster', err)
            navigate('/monster')
        }
    }

    async function setSopChoice(choice) {
        try {
            console.log('choice', choice);
            let monsterToSave = {...currMonster}
            monsterToSave.sopChoice = choice
            updateMonster(monsterToSave)
            // console.log('compare:', currMonster, monsterToSave);
            // console.log('monsterToSave', monsterToSave);
            
            // const monster = await monsterService.getById(params.monsterId)
        } catch (err) {
            console.log('Had issues loading monster', err)
            navigate('/monster')
        }
    }

    // function test() {
    //     navigate('/monster/101')
    // }

    if (!currMonster) return <div>loading...</div>
    return (
        <section>
            <div>
                <h1>{currMonster.name}</h1>
                <p>Game: {currMonster.game}</p>
                <p>choice: {currMonster.sopChoice}</p>
                <img src={currMonster.iconImg} alt="" />
            </div>

            <button onClick={() => setSopChoice('smash')}>Smash</button>
            <button onClick={() => setSopChoice('pass')}>pass</button>
        </section >
    )
}