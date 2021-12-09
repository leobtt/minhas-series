import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('/api').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <h1>home</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default Home
