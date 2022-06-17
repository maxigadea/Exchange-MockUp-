import reducer from '../Reducer/index.js'
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'



const middlewareEnhancer = applyMiddleware( thunk)
const composedEnhancers = compose(middlewareEnhancer)

export const Store = createStore(reducer, composedEnhancers)