import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'

const Header = () => {
  const [open, setOpen] = useState(false)

  const acionar = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Navbar className="" color="light" light expand="md">
        <div className="container d-md-flex ">
          <div className="d-flex justify-content-between align-items-center">
            <NavbarBrand className="p-2 me-auto" tag={Link} to="/">
              Minhas séries
            </NavbarBrand>
            <NavbarToggler className="" onClick={acionar} />
          </div>
          <Collapse className="" isOpen={open} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem className="p-3 text-center">
                <NavLink tag={Link} to="/series">
                  Séries
                </NavLink>
              </NavItem>

              <NavItem className="p-3 text-center">
                <NavLink tag={Link} to="/generos">
                  Genêros
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Header
