/**
 * Created by David Maser on 23/05/2017.
 */
import React,{Component} from 'react';
import TextField from 'material-ui/TextField';

class AddTaskView extends Component{
  constructor(props){
    super(props);
    console.log(this.props.data);
    this.state={
      show:this.props.show,
      tags:[],
      data:this.props.data
    };
  }

  buildForm(){
    const formItems = [
      {
        type:'date',
        label:'start',
        id:'start',
        default:new Date().getDay()
      },{
        type:'text',
        label:'label',
        id:'assigner'
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
      }
    }

    return formArray;
  }

  render(){
    return(
        <div className="task-add-view">
          {this.buildForm()}
        </div>
    )
  }
}

export default AddTaskView;