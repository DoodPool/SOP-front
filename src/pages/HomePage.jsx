// import React from 'react'
import { utilService } from '../services/util.service'
import { useNavigate, useParams } from 'react-router-dom'

export function HomePage() {

    const navigate = useNavigate()

    function startGame() {
        navigate('/monster/101')
    }

    return (
        <section className='home-page main-container'>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum corrupti, deserunt laudantium ut quaerat beatae doloribus culpa inventore ducimus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum corrupti, deserunt laudantium ut quaerat beatae doloribus culpa inventore ducimus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum corrupti, deserunt laudantium ut quaerat beatae doloribus culpa inventore ducimus!</p>
                <button onClick={startGame}>start</button>
            </div>
        </section >
    )
}