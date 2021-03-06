import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

//暴露store 
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

