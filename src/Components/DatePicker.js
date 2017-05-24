/**
 * Created by David Maser on 24/05/2017.
 */
import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';

class DatePickerView extends Component {
  constructor(props){
    super(props);
    this.state={
      autoOk: true
    }
  }

  render() {
    return (
      <div>
        <DatePicker floatingLabelText={this.props.label}
                    autoOk={this.state.autoOk}
                    hintText={this.props.label}
                    container="inline"/>
      </div>
    )
  }
}

export default DatePickerView;