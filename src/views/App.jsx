import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Countent from './layout/Countent'
import Menu from './layout/Menu'
import './App.css'

export default props => {

    return (
        <div className='App'>
            <Router>
                <Menu />
                <Countent />
            </Router>
        </div>
    )
}