import logo from '../logo.svg';
import './App.css';
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
import Login from './Login';

class Test extends Component {
  render() {
    const { signedIn, history } = this.props;

    console.log("ijjn.jkgn?", this.props)
    return (
      <div>TEST Page

        <div>

          <button onClick={() => history.push('/dashboard')}> Dash</button>

        </div>
        <div>
          {signedIn? " IN " : "OUT"}
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


export default connect(mapStateToProps, mapDispatchToProps)(Test);
