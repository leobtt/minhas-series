import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import { Badge } from 'reactstrap'

const EditarSerie = () => {
  const [form, setForm] = useState('')
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState([])
  const [mode, setMode] = useState('OPEN')
  const [genre, setGenre] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/series/${id}`).then((res) => {
      setData(res.data)
      setForm(res.data)
    })
  }, [id])

  useEffect(() => {
    axios.get('/api/genres').then((res) => {
      setGenre(res.data.data)
    })
  }, [])

  const onchange = (field) => (evt) => {
    setForm({
      ...form,
      [field]: evt.target.value,
    })
  }

  const add = () => {
    axios.put('/api/series/' + id, form).then((res) => {
      setSuccess(true)
    })
  }

  if (success) {
    return <Navigate to="/series" />
  }

  // header background
  const masterHeader = {
    height: '50vh',
    minHeight: '500px',
    backgroundImage: `url('${data.background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div>
      <header style={masterHeader}>
        <div className="h-100" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className="h-100 container">
            <div className="row h-100 align-items-center">
              <div className="col-3">
                <img
                  src={form.poster}
                  alt={form.name}
                  className="img-fluid img-thumbnail"
                />
              </div>
              <div className="col-8">
                <h1 className="font-weight-light text-white">{form.name}</h1>
                <span className="text-white ps-1">
                  {' '}
                  Genêro: {form.genre_name}
                </span>
                <div className="lead text-white mt-2">
                  {form.status === 'ASSISTIDO' && (
                    <Badge className="bg-success text-white">Assistido</Badge>
                  )}
                  {form.status === 'PARA_ASSISTIR' && (
                    <Badge className="bg-warning text-dark">
                      Não assistido
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <button
          type="button"
          className="btn-primary"
          onClick={() => setMode('OPEN')}
        >
          Editar
        </button>
      </div>
      {mode === 'OPEN' && (
        <div className="container">
          <h1>Alterar Série {form.name}</h1>
          <pre>{JSON.stringify(form)}</pre>
          <form>
            <div className=" form-group flex-grow-1">
              <label htmlFor="name" className="px-1 mt-3">
                Nome
              </label>
              <input
                defaultValue={form.name}
                onInput={onchange('name')}
                type="text"
                placeholder="Nome da série"
                className="form-control"
              />
            </div>
            <div className=" form-group flex-grow-1">
              <label htmlFor="comments" className="px-1 mt-3">
                Comentários
              </label>
              <input
                defaultValue={form.comments}
                onInput={onchange('comments')}
                type="text"
                placeholder="Comentários"
                className="form-control"
              />
            </div>
            <div className=" form-group flex-grow-1">
              <label htmlFor="genre_id" className="px-1 mt-3">
                Genêro
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={onchange('genre_id')}
              >
                {genre.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    selected={parseInt(item.id) === parseInt(form.genre_id)}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex">
              <label htmlFor="status" className="px-1 mt-4">
                Status:
              </label>
              <div className="form-check px-5 mt-4">
                <input
                  onClick={onchange('status')}
                  className="form-check-input"
                  type="radio"
                  name="status"
                  value="ASSISTIDO"
                />
                <label className="form-check-label" htmlFor="assistido">
                  Assistido
                </label>
              </div>
              <div className="form-check px-4 mt-4">
                <input
                  onClick={onchange('status')}
                  className="form-check-input"
                  type="radio"
                  name="status"
                  value="PARA_ASSISTIR"
                />
                <label className="form-check-label" htmlFor="paraAssistir">
                  Para assistir
                </label>
              </div>
            </div>

            <button
              type="button"
              onClick={add}
              className="ms-auto p-2 m-1 btn btn-primary"
            >
              Alterar
            </button>
            <button
              type="button"
              onClick={() => setMode('CLOSE')}
              className="ms-auto p-2 m-1 btn btn-danger text-white"
            >
              Cancelar edição
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default EditarSerie
