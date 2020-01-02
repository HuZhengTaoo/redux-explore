import React,{useContext} from 'react'
import {CountContext} from '../../App'
export default function ComponentA (){
  const countContext = useContext(CountContext)
  return(
    <div>
      ComponentA {countContext.countState}
      <button onClick={()=> countContext.countDispatch('increment')}>+</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>-</button>
      <button onClick={()=> countContext.countDispatch('reset')}>reset</button>
    </div>
  )
}