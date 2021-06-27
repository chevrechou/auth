import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = ({onClickDay}) => {
    // const {onClickDay}= this.props;
    return <Calendar  
            value={new Date()}
            onClickDay={(value) => onClickDay(value)}/>

}
export default EventCalendar;
