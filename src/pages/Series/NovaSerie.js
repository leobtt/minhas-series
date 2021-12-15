import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NovaSerie = () => {
  const [name, setName] = useState('')
  const [sucess, setSucess] = useState(false)

  const add = () => {
    axios
      .post('/api/series', {
        name,
      })
      .then((res) => {
        setSucess(true)
      })
  }

  let navigate = useNavigate()
  const onchange = (evt) => {
    setName(evt.target.value)
  }

  if (sucess) {
    navigate('/series', { replace: true })
  }

  return (
    <div className="container">
      <h1>Novo Serie</h1>
      <form>
        <div className=" form-group flex-grow-1">
          <label htmlFor="name">Nome</label>
          <input
            value={name}
            onInput={onchange}
            type="text"
            placeholder="Nome da série"
            className="form-control"
            id="name"
          />
        </div>
        <button
          type="button"
          onClick={add}
          className="ms-auto p-2 m-1 btn btn-primary"
        >
          Adicionar
        </button>
      </form>
    </div>
  )
}

export default NovaSerie
