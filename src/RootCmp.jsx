import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { AppMenu } from './cmps/AppMenu'
import { useSelector } from 'react-redux'
import { toggleMenu } from './store/system.actions'
import Background from './cmps/Background'
import backgroundFragment from './assets/shaders/nonsenseBc.frag'

export function RootCmp() {
    const location = useLocation()
    const isMenuOpen = useSelector((storeState) => storeState.systemModule.isMenuOpen)
    let [inHome, setInHome] = useState(null)

    useEffect(() => {
        setIsInHome()

    }, [location.pathname])

    function setIsInHome() {
        let isHome = false
        if (location.pathname === '/') isHome = true
        setInHome(isHome)
    }

    function onToggleMenu(toggle) {
        // console.log('toggle', toggle)
        toggleMenu(toggle)
    }

    return (
        <section>
            {isMenuOpen && <AppMenu onToggleMenu={onToggleMenu} />}
            <div className='app-container'>
            {!inHome && <Background backgroundFragment={backgroundFragment} />}
                {!inHome && <AppHeader onToggleMenu={onToggleMenu} />}
                {/* <div className='side-bar'>side var</div> */}
                {/* <div className='main'>main</div> */}
                <main className='main'>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    </Routes>
                </main>
                {!inHome && <AppFooter className='footer' />}
            </div>
        </section>
    )
}


