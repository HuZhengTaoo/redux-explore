// 19 simple state & action
import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state,action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function CounterOne () {
  const [count,dispatch] = useReducer(reducer,initalState)
  return (
    <div>
      <div>Count:{count}</div>
      <button onClick={()=> dispatch('increment')}>+</button>
      <button onClick={()=> dispatch('decrement')}>-</button>
      <button onClick={()=> dispatch('reset')}>reset</button>
    </div>
  )
}
export default CounterOne