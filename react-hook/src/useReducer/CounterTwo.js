// 29 complex state & action
import React,{useReducer} from 'react'

const initialState = {
  firstCounter : 0,
  secondCounter : 10
}
const reducer = (state,action) => {
  switch(action.type){
    case 'increment':
      return {...state,firstCounter: state.firstCounter + action.value}
    case 'decrement':
      return {...state,firstCounter: state.firstCounter - action.value}
    case 'increment2':
      return {...state,firstCounter: state.firstCounter + action.value}
    case 'decrement2':
      return {...state,firstCounter: state.firstCounter - action.value}
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
      <div>Count:{count.firstCounter}</div>
      <div>Count2:{count.secondCounter}</div>
      <button onClick={()=> dispatch({type: 'increment',value:1})}>+1</button>
      <button onClick={()=> dispatch({type: 'decrement',value:1})}>-1</button>
      <button onClick={()=> dispatch({type: 'increment',value:5})}>+5</button>
      <button onClick={()=> dispatch({type: 'decrement',value:5})}>-5</button>
      <button onClick={()=> dispatch({type: 'increment2',value:5})}>+5</button>
      <button onClick={()=> dispatch({type: 'decrement2',value:5})}>-5</button>
      <button onClick={()=> dispatch({type: 'reset'})}>reset</button>
    </div>
  )
}
export default CounterOne