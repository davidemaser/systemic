/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';

class CalendarView extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data
    }
  }

  render(){
    return(
      <div className="calendar-view">
        {JSON.stringify(this.state.data)}
      </div>
    )
  }
}

export default CalendarView;