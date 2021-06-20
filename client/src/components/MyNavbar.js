import React, { useState } from 'react';
import {Nav,Navbar,Form,Button,FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const MyNavbar=({parentCallback})=>{
  const [word,setWord]=useState('')

    return(
        <Navbar fixed='top' className="navbar" expand="lg">
        <Navbar.Brand ><Link to='/'>Könyvtár</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to='/books'>Könyvek</Link></Nav.Link>
            <Nav.Link><Link to='/insertnewbook'>Új könyv</Link></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl onChange={(e)=>setWord(e.target.value)} type="text" placeholder="kulcsszavas keresés" className="mr-sm-2" value={word} />
            <Button onClick={()=>{parentCallback(word)}} className="btn-search">Szűrés</Button>
          </Form>
          
        </Navbar.Collapse>
      </Navbar>
    )
}