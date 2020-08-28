import React from 'react';
import * as ReactBootStrap from "react-bootstrap";


const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="info" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"  style={{textAlign:'center', fontFamily:'Pangolin',fontSize:'30px'}}>CourseChora</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <ReactBootStrap.Nav.Link to="/features">
    <ReactBootStrap.Nav.Link href="/course">Courses</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link to="/pricing">
    <ReactBootStrap.Nav.Link href="/pricing">Pricing</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link to="/instructor">
    <ReactBootStrap.Nav.Link href="/instructor">Instructors</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;