import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderTitleStyle from '../../components/HeaderTitleStyle'

import listaItens from '../../components/ListaItens'

const Series = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/series').then((res) => {
      setData(res.data.data)
    })
    return () => {}
  }, [])

  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Séries</h1>
        <div className="alert alert-warning" role="alert">
          Você não possui séries listadas.
        </div>
        <Link className="p-2 mb-2 btn btn-primary" to="/series/novo">
          Novo Série
        </Link>
      </div>
    )
  }

  const deletar = (id) => {
    axios.delete('/api/series/' + id).then((res) => {
      const filtrado = data.filter((item) => item.id !== id)
      setData(filtrado)
    })
  }

  return (
    <div>
      <HeaderTitleStyle title="Séries" pathway="series" />

      <div className="container mt-3">
        <table className="table table-dark table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">Id</th>
              <th scope="col">Série</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => listaItens('/series/', item, deletar, 'Info'))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Series
