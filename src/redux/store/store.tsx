import {createStore, applyMiddleware} from 'redux';
import dataReducer from '../reducers/reducer'
import thunk from 'redux-thunk';

const store  = createStore(
    dataReducer,
    applyMiddleware(thunk)
)

export default store;