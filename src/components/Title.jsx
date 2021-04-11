import React from 'react'

import './Title.css'

export default props => {
    return(
        <div className='Title'>
            <h2>{props.title}</h2>
        </div>
    )
}