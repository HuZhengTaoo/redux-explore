import React,{useContext} from 'react'
import {CountContext} from '../../App'
export default function ComponentF (){
  const countContext = useContext(CountContext)
  return(
    <div>
      ComponentF {countContext.countState}
      <button onClick={()=> countContext.countDispatch('increment')}>+</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>-</button>
      <button onClick={()=> countContext.countDispatch('reset')}>reset</button>
    </div>
  )
}