import { HomePage } from './pages/HomePage.jsx'
import { MonsterIndex } from './pages/MonsterIndex.jsx'
import { MonsterDetails } from './pages/MonsterDetails.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: 'monster',
        component: <MonsterIndex />,
        label: 'Monsters'
    },
    {
        path: 'monster/:monsterId',
        component: <MonsterDetails />,
        label: 'MonsterDetails'
    },
]

export default routes