import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Jeva ohsiha 2017
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Index</NavItem>
          <NavItem eventKey={2} href="#">Link (maybe documentation later)</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header;
