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
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          Minhas séries
        </NavbarBrand>
        <NavbarToggler onClick={acionar} />
        <Collapse isOpen={open} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/generos">
                Genêros
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Header
