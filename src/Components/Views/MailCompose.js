/**
 * Created by David Maser on 23/05/2017.
 */
import React,{Component} from 'react';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

const mailRows = [
  {
    type:'text',
    label:'TO',
    default:'Something'
  },
  {
    type:'text',
    label:'CC',
    default:'Something'
  },
  {
    type:'text',
    label:'BCC',
    default:'Something'
  },
  {
    type:'textarea',
    label:'MESSAGE',
    default:'Enter your message'
  }
];
class MailCompose extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,
      type:this.props.type,
      ccVisible:true
    }
  }

  buildMailForm(){
    let mailArray = [];
    let m;
    for(m in mailRows){
      if(mailRows[m].type === 'text'){
        mailArray.push(<div key={m} className="mail-compose-row">
          <TextField
            hintText={mailRows[m].default}
            floatingLabelText={mailRows[m].label}
          />
        </div>)
      }else if(mailRows[m].type === 'textarea'){
        mailArray.push(<div key={m} className="mail-compose-row message">
          <TextField
            hintText={mailRows[m].default}
            floatingLabelText={mailRows[m].label}
            multiLine={true}
            rows={10}
          />
        </div>)
      }else if(mailRows[m].type === 'separator'){
        mailArray.push(<Divider key={m} />)
      }
    }
    return mailArray;
  }
  render(){
    return(
      <List>
        <div className="mail-compose-block">
          {this.buildMailForm()}
        </div>
      </List>
    )
  }
}

export default MailCompose;