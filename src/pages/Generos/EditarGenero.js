import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'

const EditarGenero = () => {
  const [name, setName] = useState('')
  const [sucess, setSucess] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/genres/${id}`).then((res) => {
      setName(res.data.name)
    })
  }, [id])

  const onchange = (evt) => {
    setName(evt.target.value)
  }

  const add = () => {
    axios
      .put('/api/genres/' + id, {
        name,
      })
      .then((res) => {
        setSucess(true)
      })
  }

  if (sucess) {
    return <Navigate to="/generos" />
  }

  return (
    <div className="container">
      <h1>Alterar Genêro {name}</h1>
      <form>
        <div className=" form-group flex-grow-1">
          <label htmlFor="name">Nome</label>
          <input
            defaultValue={name}
            onInput={onchange}
            type="text"
            placeholder="Nome do genêro"
            className="form-control"
          />
        </div>
        <button
          type="button"
          onClick={add}
          className="ms-auto p-2 m-1 btn btn-primary"
        >
          Alterar
        </button>
      </form>
    </div>
  )
}

export default EditarGenero
