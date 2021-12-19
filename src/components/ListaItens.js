import React from 'react'
import { Link } from 'react-router-dom'

const listaItens = (route, { id, name }, deletar, buttonInfo) => {
  return (
    <tr key={id.toString()} className="text-center align-middle">
      <td className="mx-auto">{id}</td>
      <td>{name}</td>
      <td className="d-flex justify-content-around">
        <button className="btn btn-danger" onClick={() => deletar(id)}>
          Remover
        </button>
        <Link to={route + id} className="btn btn-warning">
          {buttonInfo}
        </Link>
      </td>
    </tr>
  )
}

export default listaItens
