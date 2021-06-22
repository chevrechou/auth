
const signIn = (name) => (dispatch, getState) => {
    const {  signedIn } = getState().auth;
    console.log('in', signedIn, name, getState().auth)
    if (!signedIn) {
        dispatch({ type: "SIGN_IN", name:name });
    }
    return ;
};
const logout = () => (dispatch, getState) => {
    const { name, signedIn } = getState().auth;
    console.log('out', signedIn, name, getState().auth)
    if (signedIn) {
        dispatch({ type: "SIGN_OUT"});
    }
    return ;
};
const loadUser = () => (dispatch, getState) => {
    const user = localStorage.getItem('user-tokens');
    const isAuth = user?.signedIn || false;
    if (isAuth) {
        dispatch({ type: "FETCH", user: user.name });
    }

    // return ;
};
export {
    signIn,
    logout,
    loadUser
};
