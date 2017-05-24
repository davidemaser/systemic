import React, {Component} from 'react';
import PanelView from "./Components/Layout/PanelView";
import Request from 'react-http-request';
import ActionButton from "./Components/ActionButton";
import BottomNav from "./Components/Layout/BottomNav";
import HeadBar from "./Components/Layout/HeadBar";
import LeftNav from "./Components/Layout/LeftNav";

const nodes={
  root:'service',
  user:'user',
  mail:'messages',
  tasks:'tasks',
  reminders:'reminders'
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
      model:this.props.defaultView,
      showMenu:true,
      actionMenu:'on-screen',
      actionSubMenu:'mail',
      bottomNavItem:'default',
      snackBarMessage:'Default message',
      snackBarOpen:false,
      hasModal:false,
      modalOpen:false,
      modalContent:["this is the title","this is the content of the modal"]
    };
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
    this.showFloorMenu = this.showFloorMenu.bind(this);
    this.persistConfigData = this.persistConfigData.bind(this);
    this.handleModalView = this.handleModalView.bind(this);
  }

  handleActionClick(e){
    let actionHandle = e.currentTarget.getAttribute('data-key-route');
    actionHandle !== null && actionHandle !== undefined ? this.handleClicked(actionHandle) : null;
  }

  handleModalContent(args){
    Array.isArray(args) ? this.setState({modalContent:args}) : console.log('Object is not an array');
  }

  handleModalView(args){
    console.log(args);
    this.state.modalOpen === true ? this.setState({modalOpen:false}) : this.setState({modalOpen:true});
  }

  handleClicked(args) {
    switch(args){
      case 'mail-received':
        this.setState({mail:'received',model:'mailOverview',activeSection:'Messages',showMenu:true,floorVisible:'hidden',bottomNavItem:'default',actionMenu:'on-screen',actionSubMenu:'mail',hasModal:false,modalContent:["Confirmation","Are you sure you want to delete this message?"]});
        break;
      case 'mail-compose':
        this.setState({mail:'received',model:'mailCompose',activeSection:'Messages',showMenu:true,floorVisible:'hidden',bottomNavItem:'default',actionMenu:'on-screen',hasModal:true});
        break;
      case 'mail-sent':
        this.setState({mail:'received',model:'mailMessage',activeSection:'Messages',showMenu:true,floorVisible:'hidden',bottomNavItem:'default',actionMenu:'off-screen',hasModal:false});
        break;
      case 'user-settings':
        this.setState({model:'user',activeSection:'User Settings',showMenu:true,floorVisible:'hidden',bottomNavItem:'default',actionMenu:'off-screen',hasModal:false});
        break;
      case 'app-settings':
        this.setState({activeSection:'App Settings',showMenu:false,floorVisible:'visible',bottomNavItem:'default',hasModal:false});
        break;
      case 'tasks':
        this.setState({model:'tasks',activeSection:'Tasks',showMenu:false,floorVisible:'visible',bottomNavItem:'tasks',actionMenu:'on-screen',actionSubMenu:'tasks',hasModal:false});
        break;
      case 'reminders':
        this.setState({model:'reminders',activeSection:'Reminders',showMenu:false,floorVisible:'hidden',bottomNavItem:'reminders',actionMenu:'on-screen',actionSubMenu:'reminders',hasModal:false});
        break;
      case 'new-reminder':
        this.setState({model:'remindersAdd',activeSection:'Add A Reminder',showMenu:false,floorVisible:'hidden',bottomNavItem:'tasks',actionMenu:'on-screen',actionSubMenu:'reminders',hasModal:true,modalContent:["Reminder Created","The reminder has been successfully created"]});
        break;
      case 'new-task':
        this.setState({model:'tasksAdd',activeSection:'Add A Task',showMenu:false,floorVisible:'visible',bottomNavItem:'tasks',actionMenu:'on-screen',actionSubMenu:'tasks',hasModal:false});
        break;
      default:
        this.setState({mail:'received',model:'mail',activeSection:'Messages',actionMenu:'on-screen',bottomNavItem:'default',hasModal:false});
        break;
    }
  }

  showFloorMenu(){
    this.state.floorVisible === 'hidden' ? this.setState({floorVisible:'visible'}) : this.setState({floorVisible:'hidden'});
  }

  persistConfigData(obj){
    console.log(obj);
    this.setState({config:obj});
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
                      <PanelView hasModal={this.state.hasModal} modalClick={this.handleModalView} modalVisible={this.state.modalOpen} modalContent={this.state.modalContent} default={true} type={this.state.mail} nodes={nodes} model={this.state.model} data={result.body} config={result.body.config}/>
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
