import './index.css'

import ReactDOM from 'react-dom'
import React from 'react'
import Provider from 'react-redux'

import App from './components/basicos/App'

import {createStore} from 'redux';

function reducer(state = 0, action){
    switch(action.type){
        case 'INCREMENTAR':
            return state + 1
        case 'DECREMENTAR':
            return state - 1
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe( () => console.log( store.getState() ))
store.dispatch(  {type: 'INCREMENTAR', paramentro: 3})

const el = document.getElementById('root')

/* <Provider store={store}>
<App/>
</Provider> */

ReactDOM.render(
                    <App/>
                
    , el)