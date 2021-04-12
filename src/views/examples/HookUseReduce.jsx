import React, { useReducer } from 'react'

import SectionTitle from '../../components/SectionTitle'
import Title from '../../components/Title'

const initialValue = {
    count: 0,
    user: null
}

function reduce(state, action) {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 }
        case 'dec':
            return { count: state.count - 1 }
        case 'login':
            return { ...state, user: { name: action.payload || 'vazio' } }
    }
}

export default props => {

    const [state, dispatch] = useReducer(reduce, initialValue)

    return (

        <div>
            <SectionTitle title='Hook UseReduce' description='Uma alternativa para o useState,
            usado para a manipulação de objetos
            com objetos'/>

            <div className="card">
                <div className="card-header">
                    <Title title='Exercício #01 - Contador usando o reduce' />
                </div>
                <div className="card-body">
                    
                    {state.user ?
                        <span>{state.user.name}</span>
                        : <span>Sem usuário</span>}

                    <h2>{state.count}</h2>

                    <button className="btn btn-success mr-2" onClick={
                        () => dispatch({ type: 'inc' })
                    }>+1</button>
                    <button className="btn btn-success" onClick={
                        () => dispatch({ type: 'dec' })
                    }>-1</button>
                    <button className="btn btn-success ml-2" onClick={
                        () => dispatch({ type: 'login', payload: 'Maria' })
                    }>Nome</button>
                </div>
            </div>

        </div>

    )
}