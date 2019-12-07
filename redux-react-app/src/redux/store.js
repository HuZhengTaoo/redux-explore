import {createStore} from 'redux'
import cakeReducer from './cake/cakeRudecer'
const store = createStore(cakeReducer)
export default store