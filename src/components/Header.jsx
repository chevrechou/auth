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
import Navbar from "reactjs-navbar";

import "./Header.scss";
import "reactjs-navbar/dist/index.css";

class Header extends Component {
  render() {
    const { signedIn, history } = this.props;

    return (
        <div>
            <Navbar
            menuItems={[
                {
                  title: "Administration",
                  icon: '',
                  isAuth: true,
                  onClick: () => {
                    // What you want to do...
                    alert("Its coffee time...");
                  }
                }
              ]}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Header);
