import React, {Component} from 'react';
import PanelView from "./Components/Layout/PanelView";
import Request from 'react-http-request';
import ActionButton from "./Components/ActionButton";
import {List, ListItem} from 'material-ui/List';
import ContentTasks from 'material-ui/svg-icons/action/assignment';
import ContentBookmarks from 'material-ui/svg-icons/action/bookmark';
import ContentSettings from 'material-ui/svg-icons/action/settings';
import Calendar from 'material-ui/svg-icons/action/today';
import UserIcon from 'material-ui/svg-icons/social/person';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentAlerts from 'material-ui/svg-icons/alert/add-alert';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import BottomNav from "./Components/Layout/BottomNav";
import HeadBar from "./Components/Layout/HeadBar";

const nodes={
  root:'service',
  user:'user',
  mail:'messages',
  tasks:'tasks'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:this.props.dataUrl,
      viewPort: false,
      dataList:null,
      mail:'received',
      floorVisible:'hidden',
      activeSection:'Messages',
      model:'mailMessage',
      showMenu:true
    };
  }

  updateDataInState(d){
    this.setState({dataList:d});
  }

  handleClicked(args) {
    switch(args){
      case 'mail-received':
        this.setState({mail:'received',model:'mailOverview',activeSection:'Messages',showMenu:true,floorVisible:'hidden'});
        break;
      case 'mail-sent':
        this.setState({mail:'received',model:'mailMessage',activeSection:'Messages',showMenu:true,floorVisible:'hidden'});
        break;
      case 'user-settings':
        this.setState({model:'user',activeSection:'User Settings',showMenu:false});
        break;
      case 'app-settings':
        this.setState({activeSection:'App Settings'});
        break;
      case 'tasks':
        this.setState({activeSection:'Tasks',showMenu:false,floorVisible:'visible'});
        break;
      default:
        this.setState({mail:'received',model:'mail',activeSection:'Messages'});
        break;
    }
    console.log(args,this.state)
  }

  showFloorMenu(){
    this.state.floorVisible === 'hidden' ? this.setState({floorVisible:'visible'}) : this.setState({floorVisible:'hidden'});
  }

  render() {
    return (
      <div className="App">
        <section id="action"><ActionButton/></section>
        <section id="nav">
          <List>
            <ListItem primaryText="Inbox" onClick={()=>{this.handleClicked('mail-received')}} leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Sent mail" onClick={()=>{this.handleClicked('mail-sent')}} leftIcon={<ContentSend />} />
            <ListItem primaryText="User Settings" onClick={()=>{this.handleClicked('user-settings')}} leftIcon={<UserIcon />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentTasks />} />
            <ListItem primaryText="Tasks" onClick={()=>{this.handleClicked('tasks')}} leftIcon={<Calendar />} />
            <ListItem primaryText="Alerts" leftIcon={<ContentAlerts />} />
          </List>
          <Divider />
          <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Bookmarks" rightIcon={<ContentBookmarks />} />
            <ListItem primaryText="Settings" onClick={()=>{this.handleClicked('app-settings')}} rightIcon={<ContentSettings />} />

            <Divider />
            <ListItem primaryText={this.state.floorVisible === 'hidden' ? 'Show Footer Menu' : 'Hide Footer Menu'} onClick={()=>{this.showFloorMenu()}} />
          </List>
        </section>
        <section id="main">
          <Request url={this.state.src} method='get' accept='application/json' verbose={false} model={this.state.model}>
          {
            ({error, result, loading}) => {
              if (loading) {
                return <div>loading...</div>;
              } else if (error) {
                return <div>Woh hey hey hey wait a second...</div>;
              } else {
                return(
                  <div>
                  <HeadBar section={this.state.activeSection} showMenu={this.state.showMenu}/>
                  <div className="app-core-view">
                    <PanelView default={true} type={this.state.mail} nodes={nodes} model={this.state.model} data={result.body}/>
                  </div>
                  </div>
                )
              }
            }
          }
        </Request>
        </section>
        <section id="floor" className={this.state.floorVisible}><BottomNav/></section>
      </div>
    );
  }
}

export default App;
