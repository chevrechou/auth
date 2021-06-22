import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, signedIn, ...rest }) => (
  <Route {...rest} render={(props) => (
    signedIn === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/",
        state: {
          referer: props.location
        }
      }} />
  )} />
)


const mapStateToProps = state => ({
  signedIn: state.auth.signedIn
})

export default connect(mapStateToProps)(ProtectedRoute)