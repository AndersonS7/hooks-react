import React, { useRef } from 'react'

import SectionTitle from '../../components/SectionTitle'
import Title from '../../components/Title'


export default props => {

    function add(){
        console.log(myEle.current)
    }
    const myEle = useRef()

    return (
        <div>
            <SectionTitle title='Hook UseRef' description='Pega o elemento 
                da aplicação'/>

            <div className='card'>
                <div className="card-header">
                    <Title title='Exercício #01 - Pegano elemento com o useRef' />
                </div>
                <div className="body">
                    <h3 ref={myEle}>Teste com o Ref</h3>
                    <button className='btn btn-success' onClick={add}>Teste</button>
                </div>
            </div>
        </div>
    )
}