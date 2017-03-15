import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, NavItem, Jumbotron, Grid, Row, Col, PageHeader} from 'react-bootstrap';

class Navi extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Jumbotron>
              <Nav bsStyle="tabs">
                <NavItem eventKey={1} href="/">Index</NavItem>
                <NavItem eventKey={2} href="/content1">Content 1</NavItem>
                <NavItem eventKey={3} href="/content2">Content 2</NavItem>
              </Nav>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <PageHeader>Kahvituoppi <small>Slowly but steadily</small></PageHeader>
          </Col>
        </Row>
      </Grid>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Jumbotron>
              <div>
                This will be content. Öriööriririrörir
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    )
  }
}

module.exports = {Navi, Header, Content};
