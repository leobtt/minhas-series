import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import listaItens from '../../components/ListaItens'

const Generos = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/genres').then((res) => {
      setData(res.data.data)
    })
    return () => {}
  }, [])

  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Genêros</h1>
        <div className="alert alert-warning" role="alert">
          Você não possui genêros listadas.
        </div>
        <Link className="p-2 mb-2 btn btn-primary" to="/generos/novo">
          Novo Genêro
        </Link>
      </div>
    )
  }

  const deletar = (id) => {
    axios.delete('/api/genres/' + id).then((res) => {
      const filtrado = data.filter((item) => item.id !== id)
      setData(filtrado)
    })
  }

  return (
    <div className="container">
      <div className="mt-4 mb-4 px-4 d-flex justify-content-between">
        <h1>Genêros</h1>
        <Link className="p-2 mb-2 btn btn-primary" to="/generos/novo">
          Novo Genêro
        </Link>
      </div>
      <table className="table table-dark table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col">Id</th>
            <th scope="col">Genêro</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => listaItens('/generos/', item, deletar))}
        </tbody>
      </table>
    </div>
  )
}

export default Generos
