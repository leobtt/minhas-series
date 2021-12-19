import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NovaSerie = () => {
  const [form, setForm] = useState([])
  const [genre, setGenre] = useState([])
  const [sucess, setSucess] = useState(false)

  useEffect(() => {
    axios.get('/api/genres').then((res) => setGenre(res.data.data))
  }, [])

  const add = () => {
    axios.post('/api/series', form).then((res) => {
      setSucess(true)
    })
  }

  let navigate = useNavigate()
  const onchange = (field) => (evt) => {
    setForm({
      ...form,
      [field]: evt.target.value,
    })
  }

  if (sucess) {
    navigate('/series', { replace: true })
  }

  return (
    <div>
      <div className="bg-dark bg-gradient text-white text-center py-3 conatiner-fluid">
        <h1>Novo Serie</h1>
      </div>
      <div className="container mt-3" style={{ 'max-width': '600px' }}>
        <form>
          <div className=" form-group flex-grow-1">
            <label className="ps-1" htmlFor="name">
              Nome
            </label>
            <input
              value={form.name}
              onInput={onchange('name')}
              type="text"
              placeholder="Nome da série"
              className="form-control"
              id="name"
            />
          </div>

          <div className=" form-group flex-grow-1 mt-2">
            <label className="ps-1" htmlFor="genre_id">
              Genêro
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={form.genre_id}
              onChange={onchange('genre_id')}
            >
              {genre.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex pt-3 pb-3 px-1">
            <label htmlFor="status">Status:</label>
            <div className="form-check mx-3">
              <input
                onChange={onchange('status')}
                className="form-check-input"
                name="status"
                type="radio"
                value="ASSISTIDO"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Assistido
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={onchange('status')}
                className="form-check-input"
                name="status"
                type="radio"
                value="PARA_ASSISTIR"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Para assistir
              </label>
            </div>
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
    </div>
  )
}

export default NovaSerie
