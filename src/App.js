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
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentAlerts from 'material-ui/svg-icons/alert/add-alert';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import BottomNav from "./Components/Layout/BottomNav";
import HeadBar from "./Components/Layout/HeadBar";
import LeftNav from "./Components/Layout/LeftNav";

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
      model:'mailOverview',
      showMenu:true,
      actionMenu:'on-screen',
      actionSubMenu:'mail',
      bottomNavItem:'default'
    };
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
    this.showFloorMenu = this.showFloorMenu.bind(this);
  }

  handleActionClick(e){
    let actionHandle = e.currentTarget.getAttribute('data-key-route');
    actionHandle !== null && actionHandle !== undefined ? this.handleClicked(actionHandle) : null;
  }

  handleClicked(args) {
    switch(args){
      case 'mail-received':
        this.setState({mail:'received',model:'mailOverview',activeSection:'Messages',showMenu:true,floorVisible:'hidden',bottomNavItem:'default',actionMenu:'on-screen',actionSubMenu:'mail'});
        break;
      case 'mail-compose':
        this.setState({mail:'received',model:'mailCompose',activeSection:'Messages',showMenu:true,floorVisible:'hidden',bottomNavItem:'default',actionMenu:'on-screen'});
        break;
      case 'mail-sent':
        this.setState({mail:'received',model:'mailMessage',activeSection:'Messages',showMenu:true,floorVisible:'hidden',bottomNavItem:'default',actionMenu:'off-screen'});
        break;
      case 'user-settings':
        this.setState({model:'user',activeSection:'User Settings',showMenu:true,floorVisible:'hidden',bottomNavItem:'default',actionMenu:'off-screen'});
        break;
      case 'app-settings':
        this.setState({activeSection:'App Settings',showMenu:false,floorVisible:'visible',bottomNavItem:'default'});
        break;
      case 'tasks':
        this.setState({model:'tasks',activeSection:'Tasks',showMenu:false,floorVisible:'visible',bottomNavItem:'tasks',actionMenu:'on-screen',actionSubMenu:'tasks'});
        break;
      case 'new-task':
        this.setState({model:'tasksAdd',activeSection:'Add A Task',showMenu:false,floorVisible:'visible',bottomNavItem:'tasks',actionMenu:'on-screen',actionSubMenu:'tasks'});
        break;
      default:
        this.setState({mail:'received',model:'mail',activeSection:'Messages',actionMenu:'on-screen',bottomNavItem:'default'});
        break;
    }
  }

  showFloorMenu(){
    this.state.floorVisible === 'hidden' ? this.setState({floorVisible:'visible'}) : this.setState({floorVisible:'hidden'});
  }

  render() {
    return (
      <div className="App">
        <section id="action" className={this.state.actionMenu}><ActionButton subMenu={this.state.actionSubMenu} onClick={this.handleActionClick}/></section>
        <LeftNav showFloorMenu={this.showFloorMenu} floorVisible={this.state.floorVisible} handleClicked={this.handleClicked}/>
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
        <section id="floor" className={this.state.floorVisible}>
          <BottomNav item={this.state.bottomNavItem}/>
        </section>
      </div>
    );
  }
}

export default App;
