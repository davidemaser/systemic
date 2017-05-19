/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
import MailMessageView from "../Views/MailMessageView";
import UserView from "../Views/UserView";
import CalendarView from "../Views/CalendarView";
import MailView from "../Views/MailView";

class PanelView extends Component{
  constructor(props){
    super(props);
    this.state={
      model:this.props.model || null,
      data:this.props.data || null,
      type:this.props.type
    };
  }

  buildView(){
    const modelObj = {
      mailMessage:<div className="view app-mail-message"><MailMessageView type={this.state.type} nodes={this.props.nodes} data={this.state.data}/></div> ,
      mailOverview:<div className="view app-mail"><MailView type={this.state.type} nodes={this.props.nodes} data={this.state.data}/></div> ,
      user:<div className="view app-user"><UserView nodes={this.props.nodes} data={this.state.data}/></div> ,
      calendar:<div className="view app-mail"><CalendarView nodes={this.props.nodes} data={this.state.data}/></div>,
      tasks:<div className="view app-tasks">tasks here</div>
    };

    return modelObj[this.state.model]
  }

  render(){
    return(
      <div>
        {this.buildView()}
      </div>
    )
  }
}

export default PanelView;