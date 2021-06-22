import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Login from './Login';
import './Dashboard.css';
import Calendar from 'react-calendar';


class Dashboard extends Component {
  render() {
    const { signedIn, history, name } = this.props;

    console.log("ijjn.jkgn?", this.props)
    return (
      <div>Dash Page
        <div>
          <Login signedIn={signedIn} history={history} />
        </div>
        <div>

          <button onClick={() => history.push('/')}> go hom</button>
          <button onClick={() => history.push('/test')}> TEST</button>

        </div>
        <div>
          {signedIn ? <div> name: {name}</div>  : "OUT"}
        </div>
        <Container fluid="md" >
          <Row>
            <Col sm>GMAIL</Col>
            <Col sm>Coba</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
        <div>
           <Calendar/>
        </div>

      </div>


    );
  }
}

const mapStateToProps = state => ({
  name: state.auth.name,
  signedIn: state.auth.signedIn



});

const mapDispatchToProps = dispatch => ({


});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
