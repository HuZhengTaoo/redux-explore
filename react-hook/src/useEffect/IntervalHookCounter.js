import React,{useEffect,useState} from 'react'

function IntervalHookCounter () {
  const [count,setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount+1)
  }
  useEffect(()=>{
    // function doSomething () {
    //   console.log(someProp)
    // }
    // doSomething()
    console.log('setState')
    const interval = setInterval(tick,1000)
    return () => {
      clearInterval(interval)
    }
  },[count])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter