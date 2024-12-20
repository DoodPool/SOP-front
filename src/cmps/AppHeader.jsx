import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import routes from '../routes'
import { useEffect, useState } from 'react'
import { onResetMonsters } from '../store/monster.actions'

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
            {inHome && <div></div>}

            <button className='header-btn pointer' onClick={() => onToggleMenu(true)}>Menu</button>
        </header>
    )
}