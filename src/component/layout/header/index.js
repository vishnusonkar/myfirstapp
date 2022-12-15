import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from 'react'

const Header = () => {
  return (
    <Navbar bg="info" variant="danger">
      <Container>
        <img
          src="https://i.ytimg.com/vi/NaXX4VpoQIw/sddefault.jpg"
          alt=""
          className="card_imgNavBar"
        />
        <Navbar.Brand>
          <h4>My Collections</h4>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            <b>Home</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/tech">
            <b>Programming Language</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/webseries">
            <b>Web Series</b>
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/book">
            <b>Books</b>
          </Nav.Link> */}
          <Nav.Link as={Link} to="/users">
            <b>User</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/albums">
            <b>Albums</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/comments">
            <b>Comments</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/todos">
            <b>Todos</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/posts">
            <b>Posts</b>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header