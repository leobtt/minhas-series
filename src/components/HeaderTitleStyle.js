import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTitleStyle = ({ title, pathway }) => {
  return (
    <div className="bg-dark bg-gradient text-white text-center py-1 conatiner-fluid">
      <div className="container">
        <div className="mt-4 mb-4 px-4 d-flex justify-content-between">
          <h1>{title}</h1>
          <Link
            className="pt-2 px-4 mb-2 me-2 btn btn-primary"
            to={`/${pathway}/novo`}
          >
            Adicionar {title}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderTitleStyle
