const addEvent = (event) => (dispatch, getState) => {
    
    console.log('event:', event)
    // if (!signedIn) {
        dispatch({ type: "ADD_EVENT", event });
    // }
    return ;
};
const removeEvent = (event) => (dispatch, getState) => {
        dispatch({ type: "REMOVE_EVENT", event });


};
 
const getScheduledEvents = (date) => (dispatch, getState) => {
    
    // console.log(""+date)
    dispatch({
            type: "GET_EVENTS", 
            date
        })
    

};
export {
    addEvent,
    removeEvent,
    getScheduledEvents,
};