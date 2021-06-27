import logo from '../logo.svg';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {
  Nav,
  Navbar, 
  NavItem, 
  NavDropdown, 
  MenuItem,
  Form,
  Button,
  FormControl
} from "react-bootstrap";

import "./Header.scss";
import "reactjs-navbar/dist/index.css";

class Header extends Component {
  render() {
    const { signedIn, history } = this.props;

    return (
      <>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/test">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  name: state.auth.name,
  signedIn: state.auth.signedIn



});

const mapDispatchToProps = dispatch => ({


});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
