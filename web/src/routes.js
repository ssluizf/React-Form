import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

import Home from './pages/Home'

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Redirect from='*' to='/' />
        </BrowserRouter>
    )
}

export default Routes