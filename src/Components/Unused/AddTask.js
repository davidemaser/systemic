/**
 * Created by David Maser on 23/05/2017.
 */
import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddTask extends Component{
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
            <div key={f} className="form-view-row">
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
        <div className="form-view" onClick={this.props.onClick}>
          <RaisedButton label="Add Task" primary={true} onClick={this.props.onClick} />
          {this.props.show === true ?
          <div className="form-view-modal">
            <div className="modal-filter">&nbsp;</div>
            <div className="modal-content">
              {this.buildForm()}
            </div>
          </div>:null}
        </div>
    )
  }
}

export default AddTask;