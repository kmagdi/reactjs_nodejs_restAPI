import React from 'react';
import {Nav,Navbar,Form,Button,FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const MyNavbar=()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to='/'>Könyvtár</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to='/books'>Books</Link></Nav.Link>
            <Nav.Link><Link to='/insertnewbook'>Insert new book</Link></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}