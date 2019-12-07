import {BUY_CAKE} from './cakeTypes'
const initialState = {
  numOfCakes : 10
}

const cakeReducer = (state= initialState,actions)=>{
  switch(actions.type){
    case BUY_CAKE:return{
      ...state,
      numOfCakes:state.numOfCakes - 1
    }
    default:return state
  }
}
export default cakeReducer