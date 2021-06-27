import {initState} from './index.js';

const scheduleReducer = (state = initState, action) => {
    switch (action.type) {
       
        case "ADD_EVENT":
            const event=action.event;
            return {
                ...state,
                ...state.schedule.push(event)
            };

        case "REMOVE_EVENT":
            const event_toRemove=action.event;

            return {
                ...state,
                ...state.schedule.filter(event => event.id != event_toRemove.id)

            };
        case "GET_EVENTS":
            const date=action.date;
            return {
                ...state,
                events: [...state.schedule],
            };
        default:
            return state;
    }
}
export default scheduleReducer;
