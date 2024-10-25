import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { AppMenu } from './cmps/AppMenu'
import { useSelector } from 'react-redux'
import { toggleMenu } from './store/system.actions'

export function RootCmp() {
    const isMenuOpen = useSelector((storeState) => storeState.systemModule.isMenuOpen)

    function onToggleMenu(toggle) {
        // console.log('toggle', toggle)
        toggleMenu(toggle)
    }

    return (
        <section>
            {isMenuOpen && <AppMenu onToggleMenu={onToggleMenu} />}
            <div className='app-container'>
                <AppHeader onToggleMenu={onToggleMenu} />
                {/* <div className='side-bar'>side var</div> */}
                {/* <div className='main'>main</div> */}
                <main className='main'>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    </Routes>
                </main>
                <AppFooter className='footer' />
            </div>
        </section>
    )
}


