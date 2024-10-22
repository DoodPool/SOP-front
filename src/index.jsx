import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HashRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { RootCmp } from './RootCmp'
import './assets/styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <RootCmp />
    </Router>
  </Provider>
)
