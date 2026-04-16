import React from 'react'
import Container from 'react-bootstrap/Container';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
     <BootstrapNavbar className="top-bar bg-dark">
      <Container>
        <BootstrapNavbar.Brand href="/" className='topbar-logo text-white'>Employee Management</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse className="justify-content-end">
         <Link to={'/Loginpage'}> <Button variant="primary">Add New</Button> </Link>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
