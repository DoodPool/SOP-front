import { useEffect, useState } from 'react'
import { utilService } from '../services/util.service'
import { useNavigate, useParams } from 'react-router-dom'
import { monsterService } from '../services/monster.service.local'
import { loadCount, updateMonster } from '../store/monster.actions'
import { SopCounter } from '../cmps/SopCounter'

export function MonsterDetails() {

    const navigate = useNavigate()
    const params = useParams()

    const [currMonster, setCurrMonster] = useState(null)
    let [currId, setCurrId] = useState(params.monsterId)

    useEffect(() => {
        loadMonster()
        loadCount()
    }, [currId])

    async function loadMonster() {
        try {
            const monster = await monsterService.getById(currId)
            // if (!monster) return navigate('/monster')
            // console.log('mon', monster);

            setCurrMonster(monster)
        } catch (err) {
            console.log('Had issues loading monster', err)
            navigate('/monsters')
        }
    }

    async function setSopChoice(choice) {
        let updatedMon = { ...currMonster, 'sopChoice': choice }
        if (updatedMon.isHidden) {
            updatedMon.isHidden = !updatedMon.isHidden
        }

        // console.log('updatedMon', updatedMon);
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
        <section className='details-container'>
            <SopCounter />

            <div className='main-info'>
                {/* <div className='monster-name'>
                    {currMonster.game === 'MHW' && <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />}
                    {currMonster.game === 'MHWIB' && <img className='game-logo' src="../src/assets/img/MHWIB.png" alt="mhwib" />}
                </div> */}
                <h1>{currMonster.game}: {currMonster.name}</h1>

                <img className='curr-monster' src={currMonster.iconImg} alt="" />

                <div className='sop-btns'>
                    <button className={`btn smash-btn ${currMonster.sopChoice === "smash" ? " smash-choice" : ""}`} onClick={() => setSopChoice('smash')}>Smash</button>
                    <button className={`btn pass-btn ${currMonster.sopChoice === "pass" ? " pass-choice" : ""}`} onClick={() => setSopChoice('pass')}>Pass</button>
                </div>
            </div>
        </section >
    )
}