import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import routes from '../routes'
import { useEffect, useState } from 'react'

export function AppHeader({ onToggleMenu }) {
    const navigate = useNavigate()
    const location = useLocation()
    const [dynamicClass, setDynamicClass] = useState(false)

    useEffect(() => {
        setHeaderClass()
    }, [location.pathname])

    function setHeaderClass() {
        let path = location.pathname
        if (path.includes('monsters') || path.includes('results')) {
            setDynamicClass('fixed')
        } else {
            setDynamicClass('sticky')
        }
    }

    return (
        <header className={`app-header flex space-between align-center header ${dynamicClass}`}>
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