import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Countent from './layout/Countent'
import Menu from './layout/Menu'


export default props => {

    return (
        <Router>
            <Menu />
            <Countent />
        </Router>
    )
}