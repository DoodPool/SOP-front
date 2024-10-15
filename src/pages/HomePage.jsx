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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus deserunt vero eum et, quod natus incidunt eius libero illum harum hic dolore enim qui numquam excepturi illo voluptatum. Molestias velit enim aperiam ad doloribus fugit blanditiis ratione, eaque numquam. Vitae optio doloribus vero a soluta? Explicabo eius, adipisci aliquid quisquam velit distinctio dolorum eveniet, perferendis laboriosam excepturi consequatur? Sit praesentium ad deserunt molestiae, hic nesciunt veritatis quaerat natus. Vero.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus deserunt vero eum et, quod natus incidunt eius libero illum harum hic dolore enim qui numquam excepturi illo voluptatum. Molestias velit enim aperiam ad doloribus fugit blanditiis ratione, eaque numquam. Vitae optio doloribus vero a soluta? Explicabo eius, adipisci aliquid quisquam velit distinctio dolorum eveniet, perferendis laboriosam excepturi consequatur? Sit praesentium ad deserunt molestiae, hic nesciunt veritatis quaerat natus. Vero.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus deserunt vero eum et, quod natus incidunt eius libero illum harum hic dolore enim qui numquam excepturi illo voluptatum. Molestias velit enim aperiam ad doloribus fugit blanditiis ratione, eaque numquam. Vitae optio doloribus vero a soluta? Explicabo eius, adipisci aliquid quisquam velit distinctio dolorum eveniet, perferendis laboriosam excepturi consequatur? Sit praesentium ad deserunt molestiae, hic nesciunt veritatis quaerat natus. Vero.</p>
                <button onClick={startGame}>start</button>
            </div>
        </section >
    )
}