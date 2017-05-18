/**
 * Created by David Maser on 18/05/2017.
 */
import React, { Component } from 'react';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';

class CalendarComponent extends Component {
  state = {
    date: moment()
  };

  render() {
    return (
      <Calendar
        onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
        onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
        date={this.state.date}
        onPickDate={(date) => console.log(date)}
      />
    );
  }
}

export default CalendarComponent;