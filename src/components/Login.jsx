import logo from '../logo.svg';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Form, Button} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { signIn, logout } from "../actions/auth";
class Login extends Component {
    state = {
        name:"",
    }

    handleLogin = (e) => {
        const {   submitLogin, history, onLogout, referer } = this.props;


        const { name } = this.state;
        // console.log(this.state.name)
        const signedIn = true;
        localStorage.setItem('user-tokens', JSON.stringify({ name, signedIn }));

        submitLogin(name);
        history.push(referer);

    }
    handleLogout = () => {
        const { onLogout } = this.props;


        localStorage.removeItem("user-tokens");

        onLogout();
    }
    render() {
        const { signedIn, onLogout } = this.props;
        // console.log(signedIn)
        return !signedIn ?
            <div>
                <Form onSubmit={this.handleLogin}>
                    <label>Name</label>
                    <input name="name" type="text" onChange={(e) => this.setState({
                        name:e.target.value
                    })
                    } ></input>
                    <Button type="submit">
                        Login
                    </Button>
                </Form>

            </div>
                 :<button onClick={() => onLogout()}> Sign out </button>




  }
}

const mapStateToProps = state => ({
    // name: state.auth.name,
    // signedIn:state.auth.signedIn


});

const mapDispatchToProps = dispatch => ({
    submitLogin: (name) => dispatch(signIn(name)),
    onLogout:() => dispatch(logout())


});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
