import { Link, NavLink, useNavigate } from 'react-router-dom'
import routes from '../routes'

export function AppHeader({ onToggleMenu }) {

    const navigate = useNavigate()
    return (
        <header className="app-header flex space-between align-center header">
            <button className='header-btn pointer' onClick={() => navigate('/')}>Home</button>

            {/* <nav>
                <p className='pointer'>Game selector |</p>
                <p className='pointer' onClick={() => navigate('/monster')}>Monster list |</p>
                <p className='pointer'>Results</p>
            </nav> */}

            <button className='header-btn pointer' onClick={() => onToggleMenu(true)}>Menu</button>
        </header>
    )
}