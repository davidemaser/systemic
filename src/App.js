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
      floorDefault:'hidden',
      activeSection:'Messages'
    };
  }

  handleClicked(args) {
    switch(args){
      case 'mail-received':
        this.setState({mail:'received',activeSection:'Messages'});
        break;
      case 'mail-sent':
        this.setState({mail:'sent',activeSection:'Messages'});
        break;
      case 'user-settings':
        this.setState({activeSection:'User Settings'});
        break;
      case 'app-settings':
        this.setState({activeSection:'App Settings'});
        break;
      case 'tasks':
        this.setState({activeSection:'Tasks'});
        break;
      default: null;
    }
    console.log(args,this.state.mail)
  }

  showFloorMenu(){
    this.state.floorDefault === 'hidden' ? this.setState({floorDefault:'visible'}) : this.setState({floorDefault:'hidden'});
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
            <ListItem primaryText={this.state.floorDefault === 'hidden' ? 'Show Footer Menu' : 'Hide Footer Menu'} onClick={()=>{this.showFloorMenu()}} />
          </List>
        </section>
        <section id="main">
          <Request url={this.state.src} method='get' accept='application/json' verbose={true}>
          {
            ({error, result, loading}) => {
              if (loading) {
                return <div>loading...</div>;
              } else if (error) {
                return <div>Woh hey hey hey wait a second...</div>;
              } else {
                return(
                  <div>
                  <HeadBar section={this.state.activeSection}/>
                  <div className="app-core-view">
                    <PanelView default={true} type={this.state.mail} nodes={nodes} model="mail" data={result.body}/>
                    <PanelView default={true} nodes={nodes} model="user" data={result.body}/>
                  </div>
                  </div>
                )
              }
            }
          }
        </Request>
        </section>
        <section id="floor" className={this.state.floorDefault}><BottomNav/></section>
      </div>
    );
  }
}

export default App;
