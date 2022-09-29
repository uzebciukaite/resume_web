import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
const Toolbar = () => {




  return (
      <Navbar sticky="top" variant="dark"  className='navbar-dark '  expand="md" >
            <Container className='d-flex'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="d-flex w-100 justify-content-end gap-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contacts">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
   
  )
}

export default Toolbar