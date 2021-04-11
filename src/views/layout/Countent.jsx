import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../examples/Home'
import HookUseEffect from '../examples/HookUseEffect'
import HookUseReduce from '../examples/HookUseReduce'
import HookUseRef from '../examples/HookUseRef'
import HookUseState from '../examples/HookUseState'

export default props => {

    return (
        <div className='container'>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/usestate'>
                    <HookUseState />
                </Route>
                <Route path='/useeffect'>
                    <HookUseEffect />
                </Route>
                <Route path='/useref'>
                    <HookUseRef />
                </Route>
                <Route path='/usereduce'>
                    <HookUseReduce />
                </Route>
            </Switch>
        </div>
    )
}