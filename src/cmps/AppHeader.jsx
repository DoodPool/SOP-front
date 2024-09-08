import { Link, NavLink, useNavigate } from 'react-router-dom'
import routes from '../routes'

export function AppHeader() {

    const navigate = useNavigate()
    return (
        <header className="app-header">

            {/* <nav>
                {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}
            </nav> */}

            <h1 className='pointer' onClick={() => navigate('/')}>My App</h1>
        </header>
    )
}