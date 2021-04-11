import React, { useEffect, useState } from 'react'

import SectionTitle from '../../components/SectionTitle'
import Title from '../../components/Title'


export default props => {

    const [count, setCount] = useState(0)
    useEffect(function(){
        if(count > 10){
            alert('O contador passou de 10')
            // essa mensagem será chamada assim que o contador ultrapassar 10
        }
    },[count])

    return (
        <div>
            <SectionTitle title='Hook UseEffects' description='Usando o useEffects para desparar 
            eventos quando ouver reações em outros componentes'/>

            <div className='card'>
                <div className="card-header">
                    <Title title='Exercício #01 - Desparando eventos' />
                </div>
                <div className="card-body">
                    <h2>{count}</h2>
                    <button className="btn btn-success mr-2" onClick={
                        () => setCount(count - 1)
                    } >-1</button>
                    <button className="btn btn-success" onClick={
                        () => setCount(count + 1)
                    }>+1</button>
                </div>
            </div>
        </div>
    )
}