import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NovoGenero = () => {
  const [name, setName] = useState('')
  const [sucess, setSucess] = useState(false)

  const add = () => {
    axios
      .post('/api/genres', {
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
    navigate('/generos', { replace: true })
  }

  return (
    <div>
      <div className="bg-dark bg-gradient text-white text-center py-3 conatiner-fluid">
        <h1>Novo genêro</h1>
      </div>
      <div className="container mt-3" style={{ 'max-width': '600px' }}>
        <form>
          <div className=" form-group flex-grow-1">
            <label className="ps-1" htmlFor="name">
              Nome
            </label>
            <input
              value={name}
              onInput={onchange}
              type="text"
              placeholder="Nome do genêro"
              className="form-control"
              id="name"
            />
          </div>
          <button
            type="button"
            onClick={add}
            className="p-2 mt-2 btn btn-primary"
          >
            Adicionar
          </button>
        </form>
      </div>
    </div>
  )
}

export default NovoGenero
