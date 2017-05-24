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

class AddTaskView extends Component{
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
        label:'Start Date',
        id:'start',
        default:new Date().getDay()
      },{
        type:'date',
        label:'End Date',
        id:'end',
        default:new Date().getDay()
      },{
        type:'status'
      },{
        type:'tags'
      },{
        type:'priority'
      },{
        type:'select',
        label:'priority',
        values:this.state.data,
        id:'assigner',
        class:''
      }
    ];
    let formArray = [];
    let f;
    for (f in formItems) {
      switch (formItems[f].type) {
        case 'text':
          formArray.push(
            <div key={f} className="task-add-view-row">
              <TextField
                hintText="Input"
                floatingLabelText={formItems[f].label}
              />
            </div>);
          break;
        case 'date':
          formArray.push(
            <div key={f} className="task-add-view-row">
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
      }
    }

    return formArray;
  }

  render(){
    return(
        <div className="task-add-view">
          <div className="task-add-form">
          {this.buildForm()}
          </div>
          <div className="task-add-users"><UserList type='table' title="Assign To" config={this.props.config}/></div>
          {/*UserList can be table or dropdown*/}
        </div>
    )
  }
}

export default AddTaskView;