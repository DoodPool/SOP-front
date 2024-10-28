import { HomePage } from './pages/HomePage.jsx'
import { MonsterIndex } from './pages/MonsterIndex.jsx'
import { MonsterDetails } from './pages/MonsterDetails.jsx'
import { SopResults } from './pages/SopResults.jsx'
import { ExtraChallenge } from './pages/ExtraChallenge.jsx'

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
    {
        path: 'results',
        component: <SopResults />,
        label: 'Results'
    },
    {
        path: 'challenge',
        component: <ExtraChallenge />,
        label: 'Challenge'
    },
]

export default routes