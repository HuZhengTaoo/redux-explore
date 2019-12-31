// 12-14 
import React , {useEffect,useState} from 'react'
import axios from 'axios'

function DataFetching () {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
      })
      .catch()
  })
  return (
    <div></div>
  )
}

export default DataFetching