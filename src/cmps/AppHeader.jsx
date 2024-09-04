import { Link, NavLink } from 'react-router-dom'
import routes from '../routes'

export function AppHeader() {

    return (
        <header className="app-header">

            {/* <nav>
                {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}
            </nav> */}

            <h1>My App</h1>
        </header>
    )
}