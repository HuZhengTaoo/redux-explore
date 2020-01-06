import React, {useState,useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

// 父子组件的时候，当修改props属性，所有相关的子组件都会重新渲染一遍

function ParentComponent(){
  const [age,setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age]) 

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  },[salary])

  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count text='Age' count={age} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  )

}

export default ParentComponent