import { useEffect, useState } from 'react'
import { utilService } from '../services/util.service'
import { useNavigate, useParams } from 'react-router-dom'
import { monsterService } from '../services/monster.service.local'
import { updateMonster } from '../store/monster.actions'

export function MonsterDetails() {

    const navigate = useNavigate()
    const params = useParams()

    const [currMonster, setCurrMonster] = useState(null)
    let [currId, setCurrId] = useState(params.monsterId)

    useEffect(() => {
        loadMonster()
    }, [currId])

    async function loadMonster() {
        try {
            const monster = await monsterService.getById(currId)
            // if (!monster) return navigate('/monster')
            // console.log('mon', monster);
            
            setCurrMonster(monster)
        } catch (err) {
            console.log('Had issues loading monster', err)
            navigate('/monster')
        }
    }

    async function setSopChoice(choice) {
        const updatedMon = { ...currMonster, 'sopChoice': choice }
        console.log('updatedMon', updatedMon);
        await updateMonster(updatedMon)

        let nextId = ++currId
        setCurrId(nextId.toString())
        navigate(`/monster/${nextId}`)
    }

    // async function setNextMonsterId() {
    //     const nextMonId = +params.monsterId + 1
    //     setCurrId(nextMonId)
    // }

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