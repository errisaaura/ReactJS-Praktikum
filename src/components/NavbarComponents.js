import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap' 


export default class NavbarComponents extends Component {
  render() {
    return (
      <div>
        <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Perhitungan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Bmi">Bmi</Nav.Link>
            <Nav.Link href="/Bank">Cicilan Bank</Nav.Link>
            <Nav.Link href="/HargaAkhir">Harga Akhir</Nav.Link>
            <NavDropdown title="Konversi" id="basic-nav-dropdown">
              <NavDropdown.Item href="/toDecimal">to Decimal</NavDropdown.Item>
              <NavDropdown.Item href="/toBiner">to Biner</NavDropdown.Item>
              <NavDropdown.Item href="/toOktal">to Oktal</NavDropdown.Item>
              <NavDropdown.Item href="/toHexadecimal">to Hexadecimal</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}
