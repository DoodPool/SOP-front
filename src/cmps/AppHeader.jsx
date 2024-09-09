import { Link, NavLink, useNavigate } from 'react-router-dom'
import routes from '../routes'

export function AppHeader() {

    const navigate = useNavigate()
    return (
        <header className="app-header flex space-between align-center">
            <div className='logo pointer' onClick={() => navigate('/')}>
                <h1>monster hunter</h1>
                <p><span>Smash</span> or <span>Pass</span></p>
            </div>

            <nav>
                <p className='pointer'>Game selector |</p>
                <p className='pointer' onClick={() => navigate('/monster')}>Monster list |</p>
                <p className='pointer'>Results</p>
            </nav>
            
            <div>
                <p>Wiggler pic Wiggler pic</p>
            </div>
        </header>
    )
}