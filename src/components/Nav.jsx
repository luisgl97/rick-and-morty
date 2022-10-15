import React from 'react'

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Nav = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Rick and Morty
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
