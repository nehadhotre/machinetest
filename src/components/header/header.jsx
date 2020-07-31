import React, { Component } from "react";
import {Navbar,Nav,Form,Button,FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
class Header extends Component{
    constructor(props){
        super(props);

    }
    render(){
      return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link 
          as={Link}to="/home">Home</Nav.Link>
           <Nav.Link 
          as={Link}to="/task">Task</Nav.Link>
           <Nav.Link 
          as={Link}to="/user">User</Nav.Link>
        </Nav>
       
        <Nav inline>
        
          <Nav.Link 
          as={Link}to="/login">Login</Nav.Link>
        </Nav>
      </Navbar>

      )
    }
}
export default Header;