import logo from '../logo.svg';
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
import './Dashboard.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Header from './Header';

class Dashboard extends Component {
  render() {
    const { signedIn, history, name } = this.props;
    return (
      <div>Dash Page
        <Header/>
        <div>
          <Login signedIn={signedIn} history={history} />
        </div>
        <div>

          <button onClick={() => history.push('/')}> go hom</button>
          <button onClick={() => history.push('/test')}> TEST</button>

        </div>
        <div>
          <div> name: {name}</div>
        </div>
        <div className="dashboard_container">
          <Container fluid="md" className="dashboard_menu">
          <Row>
            <Col sm>GMAIL</Col>
            <Col sm>Coba</Col>
          </Row>
          <Row>
            <Col sm>Brebeuf</Col>
            <Col sm>Moudo</Col>
          </Row>
        </Container>
        <div>
            <Calendar value={new Date()} />
        </div>
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
