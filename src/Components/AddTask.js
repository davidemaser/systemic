/**
 * Created by David Maser on 23/05/2017.
 */
import React,{Component} from 'react';
import TextField from 'material-ui/TextField';

class AddTask extends Component{
  constructor(props){
    super(props);
    console.log(this.props.data);
    this.state={
      show:false,
      tags:[],
      data:this.props.data
    }
  }

  buildForm(){
    const formItems = [
      {
        type:'date',
        label:'start',
        id:'start',
        default:new Date().getDay()
      },{
        type:'hidden',
        label:null,
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
            <div className="form-view-row">
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
      this.state.show === true ?
        <div className="form-view">
          {this.buildForm()}
        </div>:null
    )
  }
}

export default AddTask;