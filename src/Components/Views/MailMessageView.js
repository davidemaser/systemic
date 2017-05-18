/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import FromUser from 'material-ui/svg-icons/communication/contact-mail';
import FromUserName from 'material-ui/svg-icons/av/recent-actors';
import ReceivedDate from 'material-ui/svg-icons/action/today';
import ReceivedSubject from 'material-ui/svg-icons/action/subject';
import UserChip from "../UserChip";
class MailMessageView extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,
      type:this.props.type,
      ccVisible:true
    };

    this.changeTypeView = this.changeTypeView.bind(this);
    this.changeCCView = this.changeCCView.bind(this);
  }

  changeTypeView(){
    this.state.type === 'received' ? this.setState({type:'sent'}) : this.setState({type:'received'});
  }

  changeCCView(){
    this.state.ccVisible === true ? this.setState({ccVisible:false}) : this.setState({ccVisible:true});
  }

  renderCcFields(data){
    let ccArray = [];
    let d;
    for(d in data){
      ccArray.push(<div key={d} className="cc-item"><UserChip label={data[d]}/></div>)
    }

    return ccArray;
  }

  renderMailView(type){
    let rootNode = this.props.nodes['root'];
    let mailNode = this.props.nodes['mail'];
    let mailData = this.state.data[rootNode][mailNode];
    mailData = type === 'received' ? mailData['received'] : mailData['sent'];
    let mailArray = [];
    let m;
    for(m in mailData){
      mailArray.push(
        <List>
        <div key={m} className="mail-block">
          <ListItem primaryText={this.state.type} onClick={this.changeTypeView} leftIcon={<ContentInbox />} />
          <ListItem primaryText={mailData[m].from} leftIcon={<FromUser />} />
          {this.state.ccVisible === true ? <ListItem onClick={this.changeCCView} primaryText={this.renderCcFields(mailData[m].cc)} leftIcon={<FromUserName />} /> : null}
          <Divider />
          <ListItem primaryText={mailData[m].date} leftIcon={<ReceivedDate />} />
          <Divider />
          <ListItem primaryText={mailData[m].subject} leftIcon={<ReceivedSubject />} />
          <div className="mail-item content" dangerouslySetInnerHTML={{__html: mailData[m].content}}></div>
        </div>
        </List>
      )
    }
    return mailArray;
  }

  render(){
    return(
      <div className="mail-view">
        {this.renderMailView(this.state.type)}
      </div>
    )
  }
}

export default MailMessageView;