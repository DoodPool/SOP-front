// import React from 'react'
import { utilService } from '../services/util.service'
import { useNavigate, useParams } from 'react-router-dom'

export function HomePage() {

    const navigate = useNavigate()
    const params = useParams()

    function test() {
        navigate('/monster/101')
        console.log('somthing')
    }

    return (
        <section>
            <button onClick={test}>start</button>
        </section >
    )
}