import React from 'react'
import { Link } from "react-router-dom";

export default props => {

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link text-light'>Início</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/usestate' className='nav-link text-light'>UseState</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/useeffect' className='nav-link text-light'>UseEffect</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/useref' className='nav-link text-light'>UseRef</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/usereduce' className='nav-link text-light'>UseReduce</Link>
                </li>
            </ul>
        </nav>
    )
}