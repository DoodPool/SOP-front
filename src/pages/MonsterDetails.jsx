import { useEffect, useState } from 'react'
import { utilService } from '../services/util.service'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { monsterService } from '../services/monster.service.local'
import { loadCount, updateMonster, setCurrMonster } from '../store/monster.actions'
import { SopCounter } from '../cmps/SopCounter'
import { useSelector } from 'react-redux'
import useIsMediumLayout from '../customHooks/useIsMediumLayout'

export function MonsterDetails() {
    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation()
    const isMediumLayout = useIsMediumLayout()

    const currMonster = useSelector(storeState => storeState.monsterModule.currMonster)
    const [currId, setCurrId] = useState(params.monsterId)

    useEffect(() => {
        setCurrId(params.monsterId)
        loadMonster()
        loadCount()

    }, [params.monsterId, currId])

    async function loadMonster() {
        try {
            await setCurrMonster(currId)
        } catch (err) {
            console.log('Had issues loading monster', err)
            // navigate('/challenge')
            navigate('/results')
        }
    }

    async function setSopChoice(choice) {
        try {
            let updatedMon = { ...currMonster, 'sopChoice': choice }
            if (updatedMon.isHidden) {
                updatedMon.isHidden = !updatedMon.isHidden
            }
            await updateMonster(updatedMon)

            let nextId = +params.monsterId
            nextId++
            setCurrId(nextId.toString())
            navigate(`/monster/${nextId}`)
        } catch (err) {
            console.log('Had issues setting sop choices', err)
        }
    }


    // function onPrev() {
    //     let nextId = --currId
    //     setCurrId(nextId.toString())
    //     navigate(`/monster/${nextId}`)
    // }

    // function onNext() {
    //     let nextId = ++currId
    //     setCurrId(nextId.toString())
    //     navigate(`/monster/${nextId}`)
    // }

    if (!currMonster) return <div>loading...</div>
    return (
        <section className='details-container'>
            <SopCounter isMediumLayout={isMediumLayout} />

            <div className='main-info'>
                {/* <div className='monster-name'>
                    {currMonster.game === 'MHW' && <img className='game-logo' src="../src/assets/img/MHW.webp" alt="mhW" />}
                    {currMonster.game === 'MHWIB' && <img className='game-logo' src="../src/assets/img/MHWIB.png" alt="mhwib" />}
                </div> */}
                <h1>{currMonster.game}: {currMonster.name}</h1>

                <img className='curr-monster' src={currMonster.iconImg} alt="" />

                <div className='sop-btns'>
                    {/* <button onClick={() => onPrev()}>Prev</button> */}
                    <button className={`btn smash-btn ${currMonster.sopChoice === "smash" ? " smash-choice" : ""}`} onClick={() => setSopChoice('smash')}>Smash</button>
                    <button className={`btn pass-btn ${currMonster.sopChoice === "pass" ? " pass-choice" : ""}`} onClick={() => setSopChoice('pass')}>Pass</button>
                    {/* <button onClick={() => onNext()}>Next</button> */}
                </div>
            </div>
        </section >
    )
}