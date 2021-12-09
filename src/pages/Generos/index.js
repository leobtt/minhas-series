import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Generos = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/genres').then((res) => setData(res.data.data))
  }, [])
  return (
    <div>
      <h1>Genêros</h1>
      <pre>{JSON.stringify(data)}</pre>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Genêro</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}

export default Generos
