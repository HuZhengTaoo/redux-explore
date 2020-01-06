import React, {useEffect,useState,useRef} from 'react';

function HookTimer () {
  const [timer,setTimer] = useState(0)
  const intervalRef = useRef()
  useEffect(()=>{
    const intervalRef = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    },1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  },[])
  return (
    <div>
      hook timer - {timer}
      <button onClick={()=>clearInterval(intervalRef.current)}>clear hook timer</button>
    </div>
  )
}