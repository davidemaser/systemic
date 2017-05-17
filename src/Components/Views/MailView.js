/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
class MailView extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,
      type:'received'
    };

    this.changeTypeView = this.changeTypeView.bind(this);
  }

  changeTypeView(){
    this.state.type === 'received' ? this.setState({type:'sent'}) : this.setState({type:'received'});
  }

  renderCcFields(data){
    let ccArray = [];
    let d;
    for(d in data){
      ccArray.push(<div key={d} className="cc-item">{data[d]}</div>)
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
        <div key={m} className="mail-block">
          <div className="mail-item type" onClick={this.changeTypeView}>{this.state.type}</div>
          <div className="mail-item from">{mailData[m].from}</div>
          <div className="mail-item cc">{this.renderCcFields(mailData[m].cc)}</div>
          <div className="mail-item date">{mailData[m].date}</div>
          <div className="mail-item subject">{mailData[m].subject}</div>
          <div className="mail-item content">{mailData[m].content}</div>
        </div>
      )
    }
    return mailArray;
  }

  render(){
    return(
      <div className="mail-view">
        {this.renderMailView('received')}
      </div>
    )
  }
}

export default MailView;