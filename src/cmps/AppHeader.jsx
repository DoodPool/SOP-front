import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import routes from '../routes'
import { useEffect, useState } from 'react'

export function AppHeader({ onToggleMenu, inHome }) {
    const navigate = useNavigate()
    const location = useLocation()
    const [dynamicClass, setDynamicClass] = useState(false)

    useEffect(() => {
        setHeaderClass()
    }, [location.pathname])

    function setHeaderClass() {
        let path = location.pathname
        if (path.includes('monster') || path.includes('results') || path === '/') {
            setDynamicClass('fixed')
        } else {
            setDynamicClass('sticky')
        }
    }

    return (
        <header className={`app-header flex space-between align-center header ${dynamicClass}`}>
            {!inHome && <button className='header-btn pointer' onClick={() => navigate('/')}>Home</button>}
            {inHome && <button className='header-btn unavailable'>Reset</button>}

            {/* <nav>
                <p className='pointer'>Game selector |</p>
                <p className='pointer' onClick={() => navigate('/monster')}>Monster list |</p>
                <p className='pointer'>Results</p>
            </nav> */}

            <button className='header-btn pointer' onClick={() => onToggleMenu(true)}>Menu</button>
        </header>
    )
}