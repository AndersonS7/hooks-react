import React, { useState } from 'react'

import SectionTitle from '../../components/SectionTitle'
import Title from '../../components/Title'

export default props => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Sem nome')

    return (
        <div>
            <SectionTitle title='Hook UseState' description='Usado para controlar o estado 
            da aplicação'/>

            <div className='card'>
                <div className='card-header'>
                    <Title title='Exercício #01 - Contador símples' />
                </div>
                <div className='card-body'>
                    <h3 className='text-primary'>{count}</h3>
                    <div>
                        <button className="btn btn-success mr-2" onClick={
                            () => setCount(count - 1)
                        }>-1</button>
                        <button className="btn btn-success" onClick={
                            () => setCount(count + 1)
                        }>+1</button>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="card">
                <div className="card-header">
                    <Title title='Exercício #02 - Input símples' />
                </div>
                <div className="card-body">
                    <h2>{name}</h2>
                    <input type="text" className='form-control' id="exampleInputEmail1" value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}