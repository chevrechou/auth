import logo from '../logo.svg';
import './App.scss';
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
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './Homepage';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Dashboard from './Dashboard';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import Test from './Test';
import { loadUser } from '../actions/auth';
import Header from './Header';


class App extends Component {
  componentDidMount() {
    const cookie_key = 'namedOFCookie';

    delete_cookie(cookie_key);
    this.props.fetchUser();
    console.log("fff")

  }
  render() {
    const { signedIn }= this.props;
    return (
      <Router >
        {signedIn &&<Header/>}
        <Switch>

          <Route exact path="/"
            component={Homepage}/>
          {/* <ProtectedRoute  path={"/"} component={Homepage} /> */}

          <ProtectedRoute exact path="/dashboard" component={Dashboard} />

          <ProtectedRoute exact path="/test" component={Test} />
          <Redirect from="*" to="/"  />
</Switch>
      </Router>


    );
  }
}
const mapStateToProps = state => ({
  name:state.auth.name,
  signedIn: state.auth.signedIn



});

const mapDispatchToProps = dispatch => ({
  fetchUser:() => dispatch(loadUser())
});

export default  connect(mapStateToProps, mapDispatchToProps)(App);
