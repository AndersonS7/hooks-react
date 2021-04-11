import React from 'react'
import './SectionTitle.css'

export default props => {

    return(
        <div className='SectionTitle'>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
        </div>
    )
}