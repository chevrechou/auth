import logo from '../logo.svg';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Redirect
} from "react-router-dom";
import { logout } from '../actions/auth';
import Login from './Login';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import Dashboard from './Dashboard';

class Homepage extends Component {

  render() {
    const { signedIn, onLogout, history, name} = this.props;
    const cookie_key = 'namedOFCookie';

    const isAuth = read_cookie(cookie_key);
    // console.log("in?", this.props, isAuth);
    // const token = JSON.parse(localStorage.getItem('user-tokens')?.signedIn) || null;
    const referer=this.props.location.state?.referer.pathname || '/dashboard';
    // const isAuthenticated = token || false;
    console.log("in?", this.props.signedIn);

    return ((signedIn) ? <Redirect to={referer} /> :
    // return (
      <div>
        Homepage Page
        <Login
          signedIn={signedIn}
          history={history}
          referer={referer}
        />
        <div>
          {signedIn ? <div>
            " IN "
            {name}
          </div> : "OUT"}
        </div>
      </div>

    );


  }
}

const mapStateToProps = state => ({
  name: state.auth.name,
  signedIn:state.auth.signedIn



});

const mapDispatchToProps = dispatch => ({
  onLogout:() => dispatch(logout())

});


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
