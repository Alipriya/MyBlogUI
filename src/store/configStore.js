import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import postReducer from '../reducer/postReducer'
import commentReducer from '../reducer/commentReducer'
import authorReducer from '../reducer/authorReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        post:postReducer,
        comment:commentReducer,
        author:authorReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore