import React, {useState, useEffect} from 'react'

function HookMouse () {

  const [y,setY] = useState(0)
  const [x,setX] = useState(0)

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove',logMousePosition)
    // return () => {
    //   window.removeEventListener('mousemove',logMousePosition)
    // }
  },[])

 const logMousePosition = e => {
    setY(e.clientY)
    setX(e.clientX)
  }

  return (
    <div>
      Hooks x - {x}  y - {y}
    </div>
  )
}

export default HookMouse