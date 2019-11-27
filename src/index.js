import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import configureStore from './store/configStore';
import {stateInitialPost} from './action/postAction'
const store=configureStore()
// console.log(store.getState())
store.dispatch(stateInitialPost())
const ele=(<Provider store={store}>
    <App/>
</Provider>)

ReactDOM.render(ele, document.getElementById('root'));

