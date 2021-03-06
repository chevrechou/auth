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
import Header from './Header';
import { getScheduledEvents } from '../actions/schedule';
import EventCalendar from './EventCalendar';
import EventModal from './EventModal';
class Dashboard extends Component {
  state={
    showEventModal:false,
    date:""
  }
  onClickDay = (value) =>{
    this.setState({
      showEventModal:true,
      date:""+value
    });
    this.props.getEvents(this.state.date);//.then(events =>console.log(events));
  }
  onModalClose = () => {
    this.setState({
      showEventModal:false,
      date:"",
    })
  }
  render() {
    const { signedIn, history, name, events} = this.props;
    const { showEventModal, date } = this.state;
    console.log(events)
    return (
      <div>Dash Page
        <EventModal 
          show={showEventModal} 
          onModalClose={this.onModalClose}
          date={date}/>
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
            <EventCalendar  onClickDay={this.onClickDay}/>
        </div>
        </div>


      </div>


    );
  }
}

const mapStateToProps = state => ({
  name: state.auth.name,
  signedIn: state.auth.signedIn,
  events:state.scheduleReducer.events,


});

const mapDispatchToProps = dispatch => ({
  getEvents:(value) => dispatch(getScheduledEvents(value))

});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
