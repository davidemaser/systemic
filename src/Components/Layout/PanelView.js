/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
import MailMessageView from "../Views/MailMessageView";
import UserView from "../Views/UserView";
import CalendarView from "../Views/CalendarView";

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
      mail:<div className="view app-mail"><MailMessageView type={this.state.type} nodes={this.props.nodes} data={this.state.data}/></div> ,
      user:<div className="view app-user"><UserView nodes={this.props.nodes} data={this.state.data}/></div> ,
      calendar:<div className="view app-mail"><CalendarView nodes={this.props.nodes} data={this.state.data}/></div>,
      tasks:<div className="view app-tasks">tasks here</div>
    };

    return modelObj[this.state.model]
  }

  render(){
    return(
        this.buildView()
    )
  }
}

export default PanelView;