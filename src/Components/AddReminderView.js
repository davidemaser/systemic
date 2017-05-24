/**
 * Created by David Maser on 23/05/2017.
 */
import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import UserList from "./UserList";
import DatePickerView from "./DatePicker";
import TaskStatusView from "./Views/TaskStatusView";
import TaskTagView from "./Views/TaskTagView";
import TaskPriorityView from "./Views/TaskPriorityView";

class AddReminderView extends Component{
  constructor(props){
    super(props);
    console.log(this.props.data);
    this.state={
      show:this.props.show,
      tags:[],
      data:this.props.data,
      config:this.props.config
    };
  }

  buildForm(){
    const formItems = [
      {
        type:'text',
        label:'Title',
        id:'title'
      },
      {
        type:'date',
        label:'Date',
        id:'date',
        default:new Date().getDay()
      },{
        type:'priority'
      }
    ];
    let formArray = [];
    let f;
    for (f in formItems) {
      switch (formItems[f].type) {
        case 'text':
          formArray.push(
            <div key={f} className="reminder-add-view-row">
              <TextField
                hintText="Input"
                floatingLabelText={formItems[f].label}
              />
            </div>);
          break;
        case 'date':
          formArray.push(
            <div key={f} className="reminder-add-view-row">
              <DatePickerView label={formItems[f].label}/>
            </div>
          );
          break;
        case 'status':
          formArray.push(
            <TaskStatusView config={this.props.config}/>
          );
          break;
        case 'tags':
          formArray.push(
            <TaskTagView config={this.props.config}/>
          );
          break;
        case 'priority':
          formArray.push(
            <TaskPriorityView config={this.props.config}/>
          );
          break;
        default:
          formArray.push(
            <div key={f} className="reminder-add-view-row">
              <TextField
                hintText="Input"
                floatingLabelText={formItems[f].label}
              />
            </div>);
      }
    }

    return formArray;
  }

  render(){
    return(
        <div className="reminder-add-view">
          <div className="reminder-add-form">
          {this.buildForm()}
          </div>
          <div className="reminder-add-users"><UserList title="Assign To" config={this.props.config}/></div>
        </div>
    )
  }
}

export default AddReminderView;