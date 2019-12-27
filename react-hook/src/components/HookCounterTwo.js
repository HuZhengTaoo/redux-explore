import React ,{useState} from 'react'

function HookCounterTwo(){
  const initialState = 0
  const [count,setCount] = useState(initialState)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++){
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <>
      Count:{count}
      <button onClick={()=>setCount(initialState)}>reset</button>
      <button onClick={()=>setCount(prevCount => prevCount +1)}>increment</button>
      <button onClick={()=>setCount(prevCount => prevCount -1)}>decrement</button>
      <button onClick={incrementFive}>+5</button>
    </>
  )
}

export default HookCounterTwo